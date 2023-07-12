import { CommonStyled } from '@/src/styles/CommonStyled';
import { CSSProp, css, styled } from 'styled-components';
import { MobileSearch } from './Search/MobileSearch/MobileSearch';
import { TopMobileArea } from './TopMobileArea/TopMobileArea';

interface MainHeaderProps {
  headerType: 'None' | 'Search' | 'Menu';
  onClickType: (type: 'None' | 'Search' | 'Menu') => void;
}

export const MainHeader = ({ headerType, onClickType }: MainHeaderProps) => {
  const headerStyles = HEADER_STYLE[headerType];

  return (
    <Styled.Header $headerStyles={headerStyles}>
      <Styled.InnerWrap>
        <TopMobileArea headerType={headerType} onClickType={onClickType} />
        <MobileSearch headerType={headerType} />
      </Styled.InnerWrap>
    </Styled.Header>
  );
};

const Styled = {
  Header: styled(CommonStyled.Header)<{ $headerStyles: CSSProp }>`
    ${props => props.$headerStyles}
    position: fixed;
    top: 0;
    background: transparent;
    border-bottom: none;
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
