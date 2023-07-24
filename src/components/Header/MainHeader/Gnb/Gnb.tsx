import { styled } from 'styled-components';
import { LnbList } from './LnbList/LnbList';
import { Login } from './Login/Login';
import { GnbEvent } from './GnbEvent/GnbEvent';
import { LnbBottomList } from './LnbBottomList/LnbBottomList';

interface MobileSearchProps {
  headerType: HeaderMenuType;
}

export const Gnb = ({ headerType }: MobileSearchProps) => {
  return (
    <Styled.GnbWrapper $isShow={headerType === 'Menu'}>
      <Styled.LnbMenu>
        <LnbList />
        <Login />
        <GnbEvent />
        <LnbBottomList />
      </Styled.LnbMenu>
    </Styled.GnbWrapper>
  );
};

const Styled = {
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
