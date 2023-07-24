import { CommonStyled } from '@/src/styles/CommonStyled';
import { CSSProp, css, styled } from 'styled-components';
import { MobileSearch } from './Search/MobileSearch/MobileSearch';
import { TopMobileArea } from './TopMobileArea/TopMobileArea';
import { Gnb } from './Gnb/Gnb';
import React from 'react';

interface MainHeaderProps {
  headerType: HeaderMenuType;
  onClickType: (type: HeaderMenuType) => void;
  isMovedScroll: boolean;
}

export const MainHeader = React.memo(
  ({ isMovedScroll, headerType, onClickType }: MainHeaderProps) => {
    const headerStyles = HEADER_STYLE[headerType];

    return (
      <Styled.Header
        $headerStyles={headerStyles}
        $isMovedScroll={isMovedScroll}
      >
        <Styled.InnerWrap>
          <TopMobileArea headerType={headerType} onClickType={onClickType} />
          <MobileSearch headerType={headerType} />
          <Gnb headerType={headerType} />
        </Styled.InnerWrap>
      </Styled.Header>
    );
  },
);

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

    @media screen and (min-width: 768px) {
      backdrop-filter: blur(5px);
    }
  `,
  InnerWrap: styled.div`
    @media screen and (min-width: 768px) {
      max-width: 1400px;
      margin: 0 auto;

      display: flex;
      height: 80px;
      justify-content: space-between;
      align-items: center;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      max-width: 100%;
      height: 64px;
    }
  `,
};

const HEADER_STYLE = {
  None: css``,
  Search: css`
    background-color: #fff;
  `,
  Menu: css``,
  Web: css``,
};
