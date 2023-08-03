import { useEffect, useState } from 'react';
import { MAX_MEDIUM_SIZE, MAX_SMALL_SIZE } from '../constants/global.constant';

export const useViewportSize = () => {
  const [viewportSize, setViewportSize] = useState<ViewportSizeType>(
    () => 'Small',
  );

  const handleResize = () => {
    if (window.innerWidth <= MAX_SMALL_SIZE) setViewportSize('Small');
    else if (window.innerWidth <= MAX_MEDIUM_SIZE) setViewportSize('Medium');
    else setViewportSize('Large');
  };

  const isMobile = () => {
    return viewportSize === 'Small';
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { viewportSize, isMobile };
};
