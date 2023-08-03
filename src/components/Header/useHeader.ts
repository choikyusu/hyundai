import { useMenuProvider } from '@/src/contexts/MenuContext';
import { useViewportSize } from '@/src/hooks/useViewportSize';
import { useCallback, useEffect, useState } from 'react';

export const useHeader = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [headerType, setHeaderType] = useState<HeaderMenuType>('None');

  const { isMobile } = useViewportSize();
  const { setOpenMenu } = useMenuProvider();

  const onClickType = useCallback(
    (type: HeaderMenuType) => {
      if (!isMobile()) {
        setOpenMenu(true);
        setHeaderType('None');
      } else {
        setHeaderType(prev => {
          if (prev === type) return 'None';
          return type;
        });
      }
    },
    [isMobile],
  );

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
