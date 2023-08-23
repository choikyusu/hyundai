import { useCallback } from 'react';
import { useViewportSize } from './useViewportSize';
import { useMenuProvider } from '../contexts/MenuContext';

export const useHeaderMenu = () => {
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

  return { onClickType };
};
