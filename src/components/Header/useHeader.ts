import { useMenuProvider } from '@/src/contexts/MenuContext';
import { useViewportSize } from '@/src/hooks/useViewportSize';
import { useCallback, useEffect, useState } from 'react';

export const useHeader = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const { isMobile } = useViewportSize();
  const { setHeaderType } = useMenuProvider();

  const onClickType = useCallback(
    (type: HeaderMenuType) => {
      setHeaderType(prev => {
        if (prev === type) return 'None';
        return type;
      });
    },
    [isMobile],
  );

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent);

    return () => {
      window.removeEventListener('scroll', scrollEvent);
    };
  }, []);

  return { scrollPercentage, onClickType };

  function scrollEvent() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY;

    setScrollPercentage(
      (scrollPosition / (documentHeight - windowHeight)) * 100,
    );
  }
};
