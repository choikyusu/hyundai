import { styled } from 'styled-components';
import { TabArea } from './TabArea/TabArea';
import { HyundaiSvgComponent } from './assets/HyundaiSvgComponent';

export const Header = () => {
  return (
    <TabArea>
      <Styled.Header>
        <Styled.InnerWrap>
          <Styled.TopMobileArea>
            <div>
              <button type="button">
                <HyundaiSvgComponent />
              </button>
            </div>
          </Styled.TopMobileArea>
        </Styled.InnerWrap>
      </Styled.Header>
    </TabArea>
  );
};

const Styled = {
  Header: styled.header`
    position: fixed;
    top: 0;
    background: transparent;
    border-bottom: none;
  `,
  InnerWrap: styled.div``,
  TopMobileArea: styled.div`
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
  `,
};
