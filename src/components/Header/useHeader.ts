import { useEffect, useState } from 'react';

export const useHeader = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [headerType, setHeaderType] = useState<'None' | 'Search' | 'Menu'>(
    'None',
  );

  const onClickType = (type: 'None' | 'Search' | 'Menu') => {
    setHeaderType(prev => {
      if (prev === type) return 'None';
      return type;
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent);

    return () => {
      window.removeEventListener('scroll', scrollEvent);
    };
  }, []);

  return { scrollPercentage, headerType, onClickType };

  function scrollEvent() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY;

    setScrollPercentage(
      (scrollPosition / (documentHeight - windowHeight)) * 100,
    );
  }
};
