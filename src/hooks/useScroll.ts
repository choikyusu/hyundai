import { useEffect, useState } from 'react';

export const useScroll = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [yScroll, setYscroll] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent);

    return () => {
      window.removeEventListener('scroll', scrollEvent);
    };
  }, []);

  const isMovedScroll = () => {
    return yScroll > 0;
  };

  return { scrollPercentage, yScroll, isMovedScroll };

  function scrollEvent() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY;

    setScrollPercentage(
      (scrollPosition / (documentHeight - windowHeight)) * 100,
    );
    setYscroll(scrollPosition);
  }
};
