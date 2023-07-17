import Link from 'next/link';
import React from 'react';
import { styled } from 'styled-components';
import { CarImage } from '../../Fluid/CarImage/CarImage';

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
  FluidContainer: styled.div<{ $backgroundImage: string }>`
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    max-width: 2560px;
    margin: 0 auto;
    background-size: cover !important;
    background: url(${props => props.$backgroundImage}) center top / auto 100%
      no-repeat;
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

    left: 5vw;
    top: 26vw;
    width: auto;
  `,
  LinkText: styled(Link)`
    display: inline-block;
    vertical-align: middle;

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

    width: auto;
    height: auto;
    background: transparent;

    width: 100%;
    text-align: left;
  `,

  TextInner: styled.div``,
  CarName: styled.p<{ $fontColor: string }>`
    font-family: 'HyundaiSansHeadKR';
    font-size: 86px;
    letter-spacing: 0;
    color: ${props => props.$fontColor};
    line-height: 82px;
    letter-spacing: -0.25px;
    text-align: left;

    letter-spacing: -0.25px;
    word-break: keep-all;

    font-size: 8.35vw;
    line-height: 1.27em;
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

    margin-top: 2.5vw;
    font-size: 5vw;
    letter-spacing: -0.25px;
  `,
};
