import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Automated recovery & refresh for new deployments (handles caching/stale chunks)
if (typeof window !== 'undefined') {
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
