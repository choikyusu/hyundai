import { css, styled } from 'styled-components';
import { LnbList } from './LnbList/LnbList';
import { Login } from './Login/Login';
import { GnbEvent } from './GnbEvent/GnbEvent';
import { LnbBottomList } from './LnbBottomList/LnbBottomList';

interface MobileSearchProps {
  headerType: 'None' | 'Search' | 'Menu';
}

export const Gnb = ({ headerType }: MobileSearchProps) => {
  return (
    <Styled.GnbWrapper $isShow={headerType === 'Menu'}>
      <Styled.LnbMenu>
        <Login />
        <LnbList />
        <GnbEvent />
        <LnbBottomList />
      </Styled.LnbMenu>
    </Styled.GnbWrapper>
  );
};

const Styled = {
  GnbWrapper: styled.div<{ $isShow: boolean }>`
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
  `,
  LnbMenu: styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #fff;
  `,
};
