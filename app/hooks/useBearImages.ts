import { useState, useEffect } from 'react';

interface BearImages {
  watchBearImages: string[];
  hideBearImages: string[];
  peakBearImages: string[];
}

export function useBearImages(): BearImages {
  const [watchBearImages, setWatchBearImages] = useState<string[]>([]);
  const [hideBearImages, setHideBearImages] = useState<string[]>([]);
  const [peakBearImages, setPeakBearImages] = useState<string[]>([]);

  const imageCounts: Record<string, number> = {
    watch: 20,
    peak: 3,
    hide: 5,
  };  

  useEffect(() => {
    // Function to dynamically load images from the public folder
    const loadImages = async (pattern: string): Promise<string[]> => {
      const images: string[] = [];
      const maxImages = imageCounts[pattern] ?? 0; 
    
      for (let i = 0; i <= maxImages; i++) {
        try {
          const img = `/assets/img/${pattern}_bear_${i}.png`;
          const image = new Image();
          image.src = img;
          image.onload = () => images.push(img);
        } catch (error) {
          console.error(`Failed to load image:`, error);
        }
      }
    
      return images.sort((a, b) => {
        const aNum = parseInt(a.match(/\d+/)?.[0] || '0');
        const bNum = parseInt(b.match(/\d+/)?.[0] || '0');
        return aNum - bNum;
      });
    };

    // Fetch images dynamically for watch, hide, and peak bears
    const fetchImages = async () => {
      const watchImages = await loadImages('watch');
      const hideImages = await loadImages('hide');
      const peakImages = await loadImages('peak');

      setWatchBearImages(watchImages);
      setHideBearImages(hideImages);
      setPeakBearImages(peakImages);
    };

    fetchImages();
  }, []);

  return {
    watchBearImages,
    hideBearImages,
    peakBearImages,
  };
}
