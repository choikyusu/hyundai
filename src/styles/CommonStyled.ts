import { styled } from 'styled-components';

export const CommonStyled = {
  Button: styled.button`
    vertical-align: middle;
    cursor: pointer;
    background-color: transparent;
    border: none;
  `,
  Header: styled.header`
    position: relative;
    z-index: 997;
    width: 100%;
    background: #fff;
    transition:
      transform 0.3s ease-in-out,
      -webkit-transform 0.3s ease-in-out;
  `,
  Input: styled.input`
    outline: none;
    height: 40px;
    padding: 0 20px;
    border: 1px solid #e4dcd3;
    background: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 0;
    font-family: 'HyundaiSansTextKR';
    font-size: 14px;
    letter-spacing: -0.4px;
    color: #000;
    line-height: 100%;
  `,
  LiButton: styled.button``,
};

CommonStyled.LiButton = styled(CommonStyled.Button)`
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 20px;
  white-space: nowrap;
  font-family: 'HyundaiSansTextKR';
  font-size: 15px;
  letter-spacing: 0;
  color: #fff;
  line-height: 22px;
  font-weight: 500;
  background: #444;
`;
