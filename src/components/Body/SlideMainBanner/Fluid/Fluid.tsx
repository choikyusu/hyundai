import Link from 'next/link';
import React from 'react';
import { styled } from 'styled-components';
import { CarImage } from './CarImage/CarImage';

interface FluidProps {
  fluid: FluidType;
  selected?: boolean;
}

export const Fluid = React.memo(({ fluid, selected }: FluidProps) => {
  return (
    <Styled.FluidContainer $backgroundImage={fluid.backgroundUrl}>
      <Styled.TextWrap>
        <Styled.LinkText href={fluid.pageUrl}>
          <Styled.TextInner>
            <Styled.CarName $fontColor={fluid.title.color}>
              {fluid.title.text}
            </Styled.CarName>
            <Styled.SubText $fontColor={fluid.title.color}>
              {fluid.subText.text}
            </Styled.SubText>
          </Styled.TextInner>
        </Styled.LinkText>
      </Styled.TextWrap>
      <CarImage
        imageUrl={fluid.imageUrl}
        pageUrl={fluid.pageUrl}
        selected={selected}
      />
    </Styled.FluidContainer>
  );
});

const Styled = {
  FluidContainer: styled.div<{
    $backgroundImage: {
      mobile: string;
      wide: string;
    };
  }>`
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    max-width: 2560px;

    @media screen and (max-width: 767px) {
      background-size: cover !important;
    }

    @media screen and (max-width: 767px) {
      background: url(${props => props.$backgroundImage.mobile}) center top /
        auto 100% no-repeat;
    }

    @media screen and (min-width: 768px) {
      background: url(${props => props.$backgroundImage.wide}) center top / auto
        100% no-repeat;
    }
  `,
  TextWrap: styled.div`
    position: absolute;
    left: 7vw;
    top: 152px;
    right: 0;
    z-index: 1;
    width: 1260px;
    height: auto;
    margin: 0 auto;
    text-align: left;

    @media screen and (max-width: 1024px) {
      left: 5vw;
      top: 90px;
    }

    @media screen and (max-width: 767px) {
      top: 26vw;
      width: auto;
    }
  `,
  LinkText: styled(Link)`
    @media screen and (max-width: 767px) {
      text-align: center;
    }

    @media screen and (max-width: 767px) {
      display: inline-block;
      vertical-align: middle;
    }

    @media screen and (max-width: 767px) {
      width: 280px;
      height: 40px;
      border: 0;
      background: #002c5f;
      font-family: 'HyundaiSansTextKR';
      font-size: 15px;
      font-weight: 500;
      letter-spacing: -0.4px;
      color: #fff;
      cursor: pointer;
    }

    @media screen and (max-width: 9999px) {
      width: auto;
      height: auto;
      background: transparent;
    }

    @media screen and (max-width: 767px) {
      width: 100%;
      text-align: left;
    }

    @media screen and (min-width: 768px) {
      text-align: center;
    }

    @media screen and (min-width: 768px) {
      display: inline-block;
      vertical-align: middle;
    }

    @media screen and (min-width: 768px) {
      width: 180px;
      height: 50px;
      border: 0;
      background: #002c5f;
      font-family: 'HyundaiSansTextKR';
      font-size: 16px;
      font-weight: 500;
      letter-spacing: -0.4px;
      color: #fff;
      cursor: pointer;
    }

    @media screen and (max-width: 9999px) {
      width: auto;
      height: auto;
      background: transparent;
    }
  `,

  TextInner: styled.div`
    display: inline-block;
    vertical-align: middle;
  `,
  CarName: styled.p<{ $fontColor: string }>`
    font-family: 'HyundaiSansHeadKR';
    font-size: 86px;
    letter-spacing: 0;
    color: ${props => props.$fontColor};
    line-height: 82px;
    letter-spacing: -0.25px;
    text-align: left;

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      line-height: 52px;
    }

    @media screen and (max-width: 767px) {
      letter-spacing: -0.25px;
      word-break: keep-all;
    }

    @media screen and (max-width: 767px) {
      font-size: 8.35vw;
      line-height: 1.27em;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 42px;
    }
  `,
  SubText: styled.p<{ $fontColor: string }>`
    margin-top: 14px;
    font-family: 'HyundaiSansHeadKR';
    font-size: 26px;
    letter-spacing: 0;
    color: ${props => props.$fontColor};
    line-height: 38px;
    letter-spacing: -0.25px;
    text-align: left;

    @media screen and (max-width: 1024px) {
      margin-top: 0;
      font-size: 20px;
    }

    @media screen and (max-width: 767px) {
      margin-top: 2.5vw;
      font-size: 5vw;
      letter-spacing: -0.25px;
    }
  `,
};
