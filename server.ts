import express from "express";
import path from "path";
import https from "https";
import http from "http";
import fs from "fs";

interface HttpsGetResponse {
  ok: boolean;
  status: number;
  headers: Record<string, string>;
  buffer: Buffer;
}

function httpsGet(url: string): Promise<HttpsGetResponse> {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    client.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/437.36",
      }
    }, (res) => {
      if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        httpsGet(res.headers.location).then(resolve).catch(reject);
        return;
      }
      
      const chunks: Buffer[] = [];
      res.on("data", (chunk) => chunks.push(chunk));
      res.on("end", () => {
        const headers: Record<string, string> = {};
        for (const [key, val] of Object.entries(res.headers)) {
          if (val !== undefined) {
            headers[key.toLowerCase()] = Array.isArray(val) ? val.join(", ") : val;
          }
        }
        resolve({
          ok: (res.statusCode || 0) >= 200 && (res.statusCode || 0) < 300,
          status: res.statusCode || 0,
          headers,
          buffer: Buffer.concat(chunks)
        });
      });
    }).on("error", (err) => {
      reject(err);
    });
  });
}

const BEAUTIFUL_ARCHITECTURAL_IMAGES = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200", // Modern Residence Exterior
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200", // Luxury Modern House Exterior
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200", // Elegant Interior Living Room
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200", // Minimalist Modern Living Room
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200", // High-End Luxurious Sofa/Interior
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200", // Minimalist Concrete House/Detail
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200", // Premium Concrete & Timber Office
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200", // Glass & Steel Building Facade
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200", // Nordic Style Workspace
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200", // Luxury Bedroom
  "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200", // Cozy Minimalist Bedroom
  "https://images.unsplash.com/photo-1617806118233-18e1db207f62?q=80&w=1200", // Elegant Dining Room
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200", // Minimalist Modern Kitchen
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200", // Modern Staircase
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200", // Architectural Concrete Curve
  "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1200"  // Warm Wooden Interior detail
];

function getDeterministicUnsplashUrl(id: string): string {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % BEAUTIFUL_ARCHITECTURAL_IMAGES.length;
  return BEAUTIFUL_ARCHITECTURAL_IMAGES[index];
}

function getLocalValidImagePath(fileId: string): string | null {
  const possibleNames = [
    `drive_${fileId}`,
    `drive_${fileId}.jpg`,
    `drive_${fileId}.png`,
    `${fileId}`,
    `${fileId}.jpg`,
    `${fileId}.png`
  ];
  
  const possibleDirs = [
    path.join(process.cwd(), "public", "images"),
    path.join(process.cwd(), "dist", "images")
  ];

  for (const dir of possibleDirs) {
    for (const name of possibleNames) {
      const fullPath = path.join(dir, name);
      if (fs.existsSync(fullPath)) {
        try {
          const fd = fs.openSync(fullPath, "r");
          const buffer = Buffer.alloc(100);
          fs.readSync(fd, buffer, 0, 100, 0);
          fs.closeSync(fd);
          const snippet = buffer.toString("utf8");
          if (!snippet.includes("<html") && !snippet.includes("<!DOCTYPE") && !snippet.includes("<HTML")) {
            return fullPath;
          }
        } catch (err) {
          // If read fails, continue
        }
      }
    }
  }
  return null;
}

async function validateAndProxyAndSaveImage(id: string, width: string, res: express.Response) {
  // Try to load local valid image first
  const localPath = getLocalValidImagePath(id);
  if (localPath) {
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    return res.sendFile(localPath);
  }

  // Target Google Drive URLs to fetch from in order
  const targetUrls = [
    `https://lh3.googleusercontent.com/d/${id}=w${width}`,
    `https://lh3.googleusercontent.com/d/${id}`,
    `https://drive.google.com/thumbnail?id=${id}&sz=w${width}`,
    `https://drive.google.com/uc?id=${id}&export=download`
  ];

  let fetchResponse: HttpsGetResponse | null = null;
  let lastError = "";

  for (const url of targetUrls) {
    try {
      const resp = await httpsGet(url);
      if (resp.ok && resp.buffer.length > 5000) { // minimum image size limit
        const snippet = resp.buffer.toString("utf8", 0, 150);
        const isHtml = snippet.includes("<html") || snippet.includes("<!doctype html") || snippet.includes("<HTML") || snippet.includes("<!DOCTYPE");
        if (!isHtml) {
          fetchResponse = resp;
          break;
        } else {
          lastError = "Response was HTML login screen redirect";
        }
      } else {
        lastError = `Status ${resp.status}, size ${resp.buffer.length}`;
      }
    } catch (err: any) {
      lastError = err.message || "Unknown error";
    }
  }

  if (fetchResponse) {
    const contentType = fetchResponse.headers["content-type"] || "image/jpeg";
    const buffer = fetchResponse.buffer;

    // Save fetched image to disk to heal the broken local files!
    const ext = contentType.includes("png") ? ".png" : ".jpg";
    const names = [
      `drive_${id}`,
      `drive_${id}${ext}`,
      `drive_${id}.jpg`,
      `drive_${id}.png`
    ];
    const dirs = [
      path.join(process.cwd(), "public", "images"),
      path.join(process.cwd(), "dist", "images")
    ];
    
    for (const dir of dirs) {
      if (fs.existsSync(dir)) {
        for (const name of names) {
          try {
            fs.writeFileSync(path.join(dir, name), buffer);
          } catch (e) {
            // Silence write error (e.g. disk read-only or intermediate path issues)
          }
        }
      }
    }

    res.setHeader("Content-Type", contentType);
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    return res.send(buffer);
  }

  // Return 404 to let client-side SafeImage handle CDN error and try next backup CDN
  console.warn(`[Proxy Fallback] Failed proxy load for ID: ${id}. Error: ${lastError}`);
  return res.status(404).send("Google Drive image fetch failed or permission blocked");
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API Route: Local file-path interceptor for /images/drive_... filenames
  app.get("/images/drive_:fileId", async (req, res, next) => {
    try {
      const fileIdWithExt = req.params.fileId;
      if (!fileIdWithExt) return next();
      
      const id = fileIdWithExt.split(".")[0];
      if (!id) return next();

      await validateAndProxyAndSaveImage(id, "1000", res);
    } catch (err) {
      console.error(`Local Image Proxy Route Error [file=${req.params.fileId}]:`, err);
      const id = req.params.fileId ? req.params.fileId.split(".")[0] : "default";
      return res.redirect(getDeterministicUnsplashUrl(id));
    }
  });

  // API Route: Image Proxy for Google Drive to bypass Third-Party Cookie blocking
  app.get("/api/image-proxy", async (req, res) => {
    const { id, w } = req.query;
    if (!id || typeof id !== "string") {
      return res.status(400).send("Missing image id parameter");
    }

    try {
      const width = w && typeof w === "string" ? w : "1000";
      await validateAndProxyAndSaveImage(id, width, res);
    } catch (err: any) {
      console.error(`GP Proxy Error [id=${id}]:`, err);
      return res.redirect(getDeterministicUnsplashUrl(id));
    }
  });

  // API Route: Client-side self-healing endpoint to cache authenticated images
  app.post("/api/heal-image", express.json({ limit: "15mb" }), async (req: express.Request, res: express.Response) => {
    const { id, base64 } = req.body;
    if (!id || typeof id !== "string" || !base64 || typeof base64 !== "string") {
      return res.status(400).send("Missing parameters");
    }

    try {
      const base64Data = base64.replace(/^data:image\/\w+;base64,/, "");
      const buffer = Buffer.from(base64Data, "base64");

      if (buffer.length < 5000) {
        return res.status(400).send("Image too small or invalid");
      }

      // Check if it's HTML
      const snippet = buffer.toString("utf8", 0, 150);
      const isHtml = snippet.includes("<html") || snippet.includes("<!doctype") || snippet.includes("<HTML") || snippet.includes("<!DOCTYPE");
      if (isHtml) {
        return res.status(400).send("Payload is HTML, not a valid image");
      }

      const dirs = [
        path.join(process.cwd(), "public", "images"),
        path.join(process.cwd(), "dist", "images")
      ];
      
      const ext = base64.includes("png") ? ".png" : ".jpg";
      const names = [
        `drive_${id}`,
        `drive_${id}${ext}`,
        `drive_${id}.jpg`,
        `drive_${id}.png`
      ];

      for (const dir of dirs) {
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
        for (const name of names) {
          try {
            fs.writeFileSync(path.join(dir, name), buffer);
          } catch (e) {
            // Squelch single directory file writes (like dist not built yet)
          }
        }
      }

      console.log(`[Self-Healing] Successfully cached and healed image ID: ${id} (${buffer.length} bytes)`);
      return res.json({ success: true, size: buffer.length });
    } catch (err: any) {
      console.error(`[Self-Healing] Failed to save healed image ID: ${id}:`, err);
      return res.status(500).send(err.message || "Internal server error");
    }
  });

  // Client SPA routing
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
