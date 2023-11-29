import { CommonStyled } from '@/src/styles/CommonStyled';
import { CSSProp, css, styled } from 'styled-components';
import { MobileSearch } from './Search/MobileSearch/MobileSearch';
import { TopMobileArea } from './TopMobileArea/TopMobileArea';
import { Gnb } from './Gnb/Gnb';
import React from 'react';
import { useMenuProvider } from '@/src/contexts/MenuContext';
import { useScroll } from '@/src/hooks/useScroll';

export const MainHeader = React.memo(() => {
  const { headerType } = useMenuProvider();
  const { isMovedScroll } = useScroll();

  const headerStyles = HEADER_STYLE[headerType];

  return (
    <Styled.Header
      $headerStyles={headerStyles}
      $isMovedScroll={isMovedScroll()}
      $headerType={headerType}
    >
      <Styled.InnerWrap>
        <TopMobileArea />
        <MobileSearch />
        <Gnb />
      </Styled.InnerWrap>
    </Styled.Header>
  );
});

const Styled = {
  Header: styled(CommonStyled.Header)<{
    $headerStyles: CSSProp;
    $isMovedScroll: boolean;
    $headerType: HeaderMenuType;
  }>`
    @media screen and (max-width: 767px) {
      height: 55px;
    }

    @media screen and (min-width: 768px) {
      top: 0;
      width: 100%;
      padding: 0 30px;
      border-bottom: 1px solid #e5e5e5;
    }

    @media screen and (max-width: 9999px) {
      position: ${props => {
        if (props.$isMovedScroll) return 'fixed';
        if (!props.$isMovedScroll && props.$headerType === 'None')
          return 'absolute';
        return 'relative';
      }};
      top: 0;
      background: ${props =>
        props.$isMovedScroll ? 'hsla(0,0%,100%,.9)' : 'transparent'};
      border-bottom: ${props =>
        props.$isMovedScroll ? '1px solid #e5e5e5' : 'none'};
      ${props => props.$headerStyles}
    }

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
