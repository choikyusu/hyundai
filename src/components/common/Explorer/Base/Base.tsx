import React from 'react';
import { styled } from 'styled-components';
import { BASE_TYPE_LIST } from './data/data';
import { useBase } from './useBase';
import { BaseItem } from './BaseItem/BaseItem';

export default function Base() {
  const { query } = useBase();

  return (
    <Styled.Container>
      <Styled.FindCarWrap>
        <Styled.InfoText>
          <Styled.H1>기본 항목 선택하기</Styled.H1>
          <Styled.P>
            기본 항목 설정을 많이 할수록, <Styled.PBr /> 원하는 차에 가까워질 수
            있어요.
          </Styled.P>
          <Styled.ItemWrap>
            <Styled.ItemList>
              {BASE_TYPE_LIST.map((item, index) => (
                <BaseItem key={index} item={item} query={query} />
              ))}
            </Styled.ItemList>
          </Styled.ItemWrap>
        </Styled.InfoText>
      </Styled.FindCarWrap>
    </Styled.Container>
  );
}

const Styled = {
  Container: styled.section`
    @media screen and (min-width: 768px) {
      width: 100%;
      height: 100vh;
      min-height: 860px;
      background-color: #d9e5e6;
    }

    @media screen and (max-width: 1460px) {
      height: 100%;
      min-height: auto;
      overflow: visible;
    }

    @media screen and (max-width: 767px) {
      width: 100%;
      height: 100%;
      min-height: 100vh;
      background-color: #d9e5e6;
    }
  `,
  FindCarWrap: styled.div`
    @media screen and (min-width: 768px) {
      height: 100vh !important;
    }

    @media screen and (max-width: 1150px) {
      height: 100% !important;
    }

    @media screen and (min-width: 768px) {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    @media screen and (max-width: 1460px) {
      overflow: visible;
      padding-bottom: 110px;
      height: 100% !important;
    }

    @media screen and (max-width: 767px) {
      width: 100%;
      height: 100%;
      min-height: 100vh;
      padding-bottom: 65px;
    }
  `,
  InfoText: styled.section`
    @media screen and (max-width: 767px) {
      padding-top: 65px;
      text-align: center;
    }

    @media screen and (min-width: 768px) {
      padding-top: 200px;
      text-align: center;
    }
  `,
  H1: styled.h1`
    @media screen and (min-width: 768px) {
      margin-top: 0;
      font-family: 'HyundaiSansHeadKR';
      font-size: 44px;
      letter-spacing: -0.4px;
      color: #000;
      line-height: 1;
      font-weight: 400;
    }

    @media screen and (max-width: 767px) {
      margin: 0;
      font-family: 'HyundaiSansHeadKR';
      font-size: 21px;
      letter-spacing: -0.192px;
      color: #000;
      line-height: 1;
      font-weight: 400;
    }
  `,
  P: styled.p`
    @media screen and (min-width: 768px) {
      margin-top: 30px;
      font-family: 'HyundaiSansTextKR';
      font-size: 20px;
      letter-spacing: -0.4px;
      color: #666;
      line-height: 1;
    }

    @media screen and (max-width: 767px) {
      margin-top: 10px;
      font-family: 'HyundaiSansTextKR';
      font-size: 14px;
      letter-spacing: -0.192px;
      color: #666;
      line-height: 22px;
    }
  `,
  PBr: styled.br`
    @media screen and (min-width: 768px) {
      display: none;
    }
  `,
  ItemWrap: styled.div`
    @media screen and (max-width: 767px) {
      position: relative;
      display: inline-block;
    }

    @media screen and (min-width: 768px) {
      position: relative;
      display: inline-block;
    }
  `,
  ItemList: styled.ul`
    @media screen and (max-width: 1460px) {
      margin: 60px auto;
      max-width: 690px;
    }

    @media screen and (max-width: 767px) {
      display: flex;
      flex-wrap: wrap;
      margin: 35px auto 0;
      max-width: 320px;
      justify-content: center;
    }

    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: top;
      flex-wrap: wrap;
      margin-top: 60px;
      margin-bottom: 0;
    }
  `,
};
