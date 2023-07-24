import { css } from 'styled-components';

export const BUTTON_STYLE = css`
  @media screen and (max-width: 767px) {
    width: auto;
    text-align: left;
    color: #000;
    display: block;
  }

  @media screen and (max-width: 767px) {
    display: block;
    width: 100%;
    padding: 0 15px;
    background-color: #fff;
    border-bottom: 1px solid #e5e5e5;
    font-family: 'HyundaiSansHeadKRR';
    font-size: 15px;
    line-height: 23px;
    letter-spacing: -0.4px;
    line-height: 59px;
  }

  @media screen and (min-width: 768px) {
    outline: none;
    border: none;
  }

  @media screen and (min-width: 768px) {
    font-family: 'HyundaiSansHeadKRR';
    font-size: 16px;
    line-height: 30px;
    letter-spacing: -0.4px;
    color: #000;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 14px;
  }
`;
