import { useMenuProvider } from '@/src/contexts/MenuContext';
import { useViewportSize } from '@/src/hooks/useViewportSize';
import { styled } from 'styled-components';

export const Dim = () => {
  const { headerType } = useMenuProvider();
  const { isMobile } = useViewportSize();

  return (
    <Style.Dim
      $isShow={
        (isMobile() && headerType !== 'None') ||
        (!isMobile() && headerType !== 'Menu' && headerType !== 'None')
      }
    />
  );
};

const Style = {
  Dim: styled.div<{ $isShow: boolean }>`
    display: ${props => (props.$isShow ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 996;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    content: '';
  `,
};
