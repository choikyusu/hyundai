import { CSSProp, css, styled } from 'styled-components';
import { Logo } from './Logo/Logo';
import { MobileController } from './MobileController/MobileController';
import { useMenuProvider } from '@/src/contexts/MenuContext';

export const TopMobileArea = () => {
  const { headerType } = useMenuProvider();

  return (
    <Styled.TopMobileArea $areaStyle={AREA_STYLE[headerType]}>
      <Logo />
      <MobileController />
    </Styled.TopMobileArea>
  );
};

const Styled = {
  TopMobileArea: styled.div<{ $areaStyle: CSSProp }>`
    @media screen and (max-width: 767px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      z-index: 99;
      padding: 0 15px;
      box-sizing: border-box;
      width: 100%;
      height: 55px;
      background-color: #fff;
      border-bottom: 1px solid #ccc;
      ${props => props.$areaStyle}
    }
  `,
};

const AREA_STYLE = {
  None: css`
    background-color: transparent;
    border-bottom: none;
  `,
  Search: css`
    background-color: transparent;
    border-bottom: none;
  `,
  Menu: css`
    background-color: #002c5f;
  `,
  Web: css``,
};
