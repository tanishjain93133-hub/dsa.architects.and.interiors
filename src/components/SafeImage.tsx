import React, { useState } from 'react';
import { cn } from '../lib/utils';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  className?: string;
  size?: 'small' | 'medium' | 'large' | 'hero';
  objectFit?: 'cover' | 'contain';
}

const ARCHITECTURAL_FALLBACKS = [
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1000&auto=format&fit=crop'
];

export const SafeImage: React.FC<SafeImageProps> = ({ 
  src, 
  alt, 
  fallbackSrc = ARCHITECTURAL_FALLBACKS[0],
  className,
  size = 'medium',
  objectFit = 'cover',
  ...props 
}) => {
  const [currentSrc, setCurrentSrc] = useState(() => {
    if (!src) return fallbackSrc;
    // Optimize Unsplash images on initialization
    if (src.includes('unsplash.com')) {
      const url = new URL(src);
      url.searchParams.set('fm', 'webp');
      url.searchParams.set('q', '75');
      
      const width = size === 'small' ? '600' : size === 'medium' ? '1200' : size === 'large' ? '2000' : '2400';
      url.searchParams.set('w', width);
      return url.toString();
    }
    
    // Optimize Google Drive for previewing
    if (src.includes('lh3.googleusercontent.com/d/')) {
        const id = src.split('/').pop()?.split('?')[0];
        // Use higher resolution for large/hero
        const width = size === 'small' ? '400' : size === 'medium' ? '1200' : '2400';
        return `https://lh3.googleusercontent.com/d/${id}=w${width}`;
    }
    
    return src;
  });
  const [retryCount, setRetryCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const getStableDriveUrl = (originalUrl: string, attempt: number) => {
    if (!originalUrl) return fallbackSrc;
    
    // If it's an Unsplash URL that failed, just return fallback after first retry
    if (originalUrl.includes('unsplash.com')) return fallbackSrc;

    if (!originalUrl.includes('lh3.googleusercontent.com/d/') && 
        !originalUrl.includes('lh3.googleusercontent.com/u/0/d/')) return originalUrl;

    const id = originalUrl.split('/').pop()?.split('?')[0];
    if (!id) return originalUrl;

    switch (attempt) {
      case 1:
        return `https://lh3.googleusercontent.com/u/0/d/${id}`;
      case 2:
        return `https://drive.google.com/thumbnail?id=${id}&sz=w2000`;
      case 3:
        return `https://drive.google.com/uc?id=${id}&export=view`;
      default:
        return fallbackSrc;
    }
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (retryCount < 3) {
      const nextAttempt = retryCount + 1;
      const nextSrc = getStableDriveUrl(src || '', nextAttempt);
      setRetryCount(nextAttempt);
      setCurrentSrc(nextSrc);
    } else {
      setCurrentSrc(fallbackSrc);
    }

    if (props.onError) props.onError(e);
  };

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget;
    if (img.naturalWidth < 10 || img.naturalHeight < 10) {
      handleError(e);
      return;
    }
    setIsLoaded(true);
    if (props.onLoad) props.onLoad(e);
  };

  return (
    <div className={cn("relative overflow-hidden bg-white/5", className)}>
      {!isLoaded && (
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" 
             style={{ backgroundSize: '200% 100%' }} />
      )}
      <img
        {...props}
        src={currentSrc}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        referrerPolicy="no-referrer"
        loading="lazy"
        decoding="async"
        className={cn(
          "transition-all duration-700 w-full h-full optimize-gpu",
          !isLoaded ? "opacity-0 scale-105 blur-lg" : "opacity-100 scale-100 blur-0",
          objectFit === "contain" ? "object-contain" : "object-cover"
        )}
      />
    </div>
  );
};
