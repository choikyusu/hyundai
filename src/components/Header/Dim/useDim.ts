import { useMenuProvider } from '@/src/contexts/MenuContext';
import { useViewportSize } from '@/src/hooks/useViewportSize';

export const useDim = () => {
  const { headerType } = useMenuProvider();
  const { isMobile } = useViewportSize();

  const showDim = () => {
    return (
      (isMobile() && headerType !== 'None') ||
      (!isMobile() && headerType !== 'Menu' && headerType !== 'None')
    );
  };

  return { showDim };
};
