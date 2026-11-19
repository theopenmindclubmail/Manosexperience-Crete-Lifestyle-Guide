import { EXPERIENCES } from '../data/experiences';
import { GALLERY_IMAGES } from '../data/galleryData';

/**
 * Preloads an individual image URL into the browser cache.
 */
export function preloadImage(url: string): Promise<void> {
  return new Promise((resolve) => {
    if (!url) return resolve();
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = url;
  });
}

/**
 * Scans all experience cards, gallery items, and key asset images,
 * and preloads them asynchronously during idle moments or startup.
 */
export function preloadAppImages(): void {
  const urls: string[] = [];

  // Experience Card Images
  EXPERIENCES.forEach((exp) => {
    if (exp.image && !urls.includes(exp.image)) {
      urls.push(exp.image);
    }
  });

  // Gallery Items
  GALLERY_IMAGES.forEach((item) => {
    if (item.url && !urls.includes(item.url)) {
      urls.push(item.url);
    }
  });

  // Unsplash review avatars
  const avatarUrls = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
  ];
  avatarUrls.forEach((u) => {
    if (!urls.includes(u)) urls.push(u);
  });

  // Trigger preloading
  if (typeof window !== 'undefined') {
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(() => {
        urls.forEach((u) => preloadImage(u));
      });
    } else {
      setTimeout(() => {
        urls.forEach((u) => preloadImage(u));
      }, 300);
    }
  }
}
