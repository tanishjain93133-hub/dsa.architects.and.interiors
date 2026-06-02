import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Automated recovery & refresh for new deployments (handles caching/stale chunks)
if (typeof window !== 'undefined') {
  // Preload crucial above-the-fold hero images for instant First Contentful Paint (FCP)
  const criticalImages = [
    '/api/image-proxy?id=1X6xG-7r6aVJJEwqXFfLno2nZ6v7rLz21&w=1600', // Home hero background
    '/api/image-proxy?id=151kmI4LQypjKjzhQatTQCO-aAXyGuBhE&w=1600', // Projects hero background
    '/api/image-proxy?id=14vWYwDCMoQEcmeXOm2ggKXDszMM9EBL_&w=1600'  // Timber Lights showcase
  ];

  const preloadImages = () => {
    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  };

  if (typeof (window as any).requestIdleCallback === 'function') {
    (window as any).requestIdleCallback(preloadImages);
  } else {
    window.addEventListener('load', () => setTimeout(preloadImages, 100));
  }

  window.addEventListener('error', (e) => {
    const message = e.message || '';
    const isChunkError = 
      message.includes('Failed to fetch dynamically imported module') || 
      /chunkloaderror/i.test(message) ||
      message.includes('loading chunk') ||
      /load chunk/i.test(message);
      
    if (isChunkError) {
      console.warn('New deployment version detected! Auto-refreshing to fetch latest version...');
      window.location.reload();
    }
  }, true);

  window.addEventListener('unhandledrejection', (e) => {
    const reason = e.reason;
    if (reason) {
      const message = reason.message || '';
      const name = reason.name || '';
      const isChunkError = 
        name === 'ChunkLoadError' || 
        message.includes('Failed to fetch dynamically imported module') || 
        /chunkloaderror/i.test(message) ||
        /loading chunk/i.test(message) ||
        /load chunk/i.test(message);
        
      if (isChunkError) {
        console.warn('New deployment chunk rejection. Auto-refreshing...');
        window.location.reload();
      }
    }
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
