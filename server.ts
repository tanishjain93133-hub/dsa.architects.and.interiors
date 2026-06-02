import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Cache object for local in-memory caching of images so they are super-fast on repeat visits
  const imageCache = new Map<string, { buffer: Buffer; contentType: string; timestamp: number }>();
  const CACHE_TTL = 1000 * 60 * 60 * 24; // 24 hours

  // Clean stale cache items occasionally
  setInterval(() => {
    const now = Date.now();
    for (const [key, val] of imageCache.entries()) {
      if (now - val.timestamp > CACHE_TTL) {
        imageCache.delete(key);
      }
    }
  }, 1000 * 60 * 60);

  // API Route: Image Proxy for Google Drive to bypass Third-Party Cookie blocking (Incognito Mode, Safari etc.)
  app.get("/api/image-proxy", async (req, res) => {
    const { id, w } = req.query;
    if (!id || typeof id !== "string") {
      return res.status(400).send("Missing image id parameter");
    }

    const width = w && typeof w === "string" ? w : "1000";
    const cacheKey = `${id}_${width}`;

    // Return from in-memory cache if hit to make load times instant
    if (imageCache.has(cacheKey)) {
      const cached = imageCache.get(cacheKey)!;
      res.setHeader("Content-Type", cached.contentType);
      res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
      return res.send(cached.buffer);
    }

    try {
      // 1. Construct target Google Drive hosting URLs
      // In Node.js, fetch is unauthenticated so it request-proxies cleanly as an anonymous agent
      const targetUrls = [
        `https://lh3.googleusercontent.com/d/${id}=w${width}`,
        `https://lh3.googleusercontent.com/d/${id}`,
        `https://drive.google.com/thumbnail?id=${id}&sz=w${width}`,
        `https://drive.google.com/uc?id=${id}&export=download`
      ];

      let response: Response | null = null;
      let errorMsg = "";

      for (const url of targetUrls) {
        try {
          const fetchPromise = fetch(url, {
            headers: {
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/437.36",
            }
          });
          
          // Timeout fetch after 10s
          const timeoutPromise = new Promise<never>((_, reject) => setTimeout(() => reject(new Error("Timeout")), 10000));
          const resObj = await Promise.race([fetchPromise, timeoutPromise]);

          if (resObj.ok) {
            response = resObj as Response;
            break;
          } else {
            errorMsg = `Status ${resObj.status} from ${url}`;
          }
        } catch (err: any) {
          errorMsg = err.message || "Unknown proxy error";
        }
      }

      if (!response) {
        throw new Error(`Failed to fetch image from Google Drive CDN: ${errorMsg}`);
      }

      const contentType = response.headers.get("Content-Type") || "image/jpeg";
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      // Save to cache
      imageCache.set(cacheKey, {
        buffer,
        contentType,
        timestamp: Date.now()
      });

      // Send to browser with aggressive caching headers
      res.setHeader("Content-Type", contentType);
      res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
      return res.send(buffer);
    } catch (err: any) {
      console.error(`GP Proxy Error [id=${id}]:`, err);
      // Fallback redirect to a high-quality building photo on Unsplash
      return res.redirect("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000");
    }
  });

  // Client SPA routing
  if (process.env.NODE_ENV !== "production") {
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
