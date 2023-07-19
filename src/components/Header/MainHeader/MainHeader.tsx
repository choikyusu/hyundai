import { CommonStyled } from '@/src/styles/CommonStyled';
import { CSSProp, css, styled } from 'styled-components';
import { MobileSearch } from './Search/MobileSearch/MobileSearch';
import { TopMobileArea } from './TopMobileArea/TopMobileArea';
import { Gnb } from './Gnb/Gnb';

interface MainHeaderProps {
  headerType: HeaderMenuType;
  onClickType: (type: HeaderMenuType) => void;
  isMovedScroll: boolean;
}

export const MainHeader = ({
  isMovedScroll,
  headerType,
  onClickType,
}: MainHeaderProps) => {
  const headerStyles = HEADER_STYLE[headerType];

  return (
    <Styled.Header $headerStyles={headerStyles} $isMovedScroll={isMovedScroll}>
      <Styled.InnerWrap>
        <TopMobileArea headerType={headerType} onClickType={onClickType} />
        <MobileSearch headerType={headerType} />
        <Gnb headerType={headerType} />
      </Styled.InnerWrap>
    </Styled.Header>
  );
};

const Styled = {
  Header: styled(CommonStyled.Header)<{
    $headerStyles: CSSProp;
    $isMovedScroll: boolean;
  }>`
    position: fixed;
    top: 0;
    background: ${props =>
      props.$isMovedScroll ? 'hsla(0,0%,100%,.9)' : 'transparent'};
    border-bottom: ${props =>
      props.$isMovedScroll ? '1px solid #e5e5e5' : 'none'};
    ${props => props.$headerStyles}
  `,
  InnerWrap: styled.div``,
};

const HEADER_STYLE = {
  None: css``,
  Search: css`
    background-color: #fff;
  `,
  Menu: css``,
};
