import { styled } from 'styled-components';
import { LnbList } from './LnbList/LnbList';
import { Util } from './Util/Util';
import { GnbEvent } from './GnbEvent/GnbEvent';
import { LnbBottomList } from './LnbBottomList/LnbBottomList';
import { useState } from 'react';
import { useViewportSize } from '@/src/hooks/useViewportSize';
import { useMenuProvider } from '@/src/contexts/MenuContext';

export const Gnb = () => {
  const { headerType } = useMenuProvider();

  const [el, setEl] = useState<HTMLDivElement | null>(null);
  const { isMobile } = useViewportSize();

  return (
    <Styled.GnbWrapper $isShow={headerType === 'Menu'}>
      <Styled.MenuBar ref={(el: HTMLDivElement) => setEl(el)} />
      <Styled.LnbMenu>
        <LnbList el={el} />
        <Util />
        <GnbEvent isShow={isMobile()} />
        <LnbBottomList />
      </Styled.LnbMenu>
    </Styled.GnbWrapper>
  );
};

const Styled = {
  MenuBar: styled.span`
    @media screen and (min-width: 768px) {
      position: absolute;
      bottom: 0;
      height: 4px;
      background-color: #002c5f;
      opacity: 0;
      transition:
        left 0.4s ease,
        width 0.4s ease,
        opacity 0.4s ease;
    }

    opacity: 1;
    width: 23px;
    left: 191px;
  `,
  GnbWrapper: styled.div<{ $isShow: boolean }>`
    @media screen and (max-width: 767px) {
      position: fixed;
      z-index: 1001;
      top: 55px;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.7);
      overflow-y: auto;
      z-index: 1010;
      display: ${props => (props.$isShow ? 'block' : 'none')};
    }

    @media screen and (min-width: 768px) {
      display: flex;
      width: 76.07%;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      width: 82.26%;
      min-width: calc(380px + 38%);
    }

    @media screen and (min-width: 768px) and (min-width: 1025px) {
      min-width: calc(500px + 29%);
    }
  `,
  LnbMenu: styled.div`
    @media screen and (max-width: 767px) {
      display: flex;
      flex-direction: column;
      height: 100%;
      background-color: #fff;
    }

    @media screen and (min-width: 768px) {
      flex-grow: 1;
      display: flex;
      justify-content: space-between;
    }
  `,
};
