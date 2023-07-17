import Link from 'next/link';
import { styled } from 'styled-components';

interface FluidProps {
  fluid: FluidType;
}

export const Fluid = ({ fluid }: FluidProps) => {
  return (
    <Styled.FluidContainer>
      <Styled.TextWrap>
        <Styled.LinkText href={fluid.pageUrl}>
          <Styled.TextInner>
            <Styled.CarName>{fluid.title}</Styled.CarName>
            <Styled.SubText>{fluid.subText}</Styled.SubText>
          </Styled.TextInner>
        </Styled.LinkText>
      </Styled.TextWrap>
      <Styled.TextButton href={fluid.pageUrl}>
        <Styled.Span>
          <Styled.Image src={fluid.imageUrl} />
        </Styled.Span>
      </Styled.TextButton>
    </Styled.FluidContainer>
  );
};

const Styled = {
  FluidContainer: styled.div`
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    max-width: 2560px;
    margin: 0 auto;
    background-size: cover !important;
    background: url(/contents/mainbanner/car-bg-m.jpg) center top / auto 100%
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
  Span: styled.span`
    display: inline-block;
    vertical-align: middle;
  `,
  TextInner: styled.div``,
  CarName: styled.p`
    font-family: 'HyundaiSansHeadKR';
    font-size: 86px;
    letter-spacing: 0;
    color: #000;
    line-height: 82px;
    letter-spacing: -0.25px;
    text-align: left;

    letter-spacing: -0.25px;
    word-break: keep-all;

    font-size: 8.35vw;
    line-height: 1.27em;
  `,
  SubText: styled.p`
    margin-top: 14px;
    font-family: 'HyundaiSansHeadKR';
    font-size: 26px;
    letter-spacing: 0;
    color: #000;
    line-height: 38px;
    letter-spacing: -0.25px;
    text-align: left;

    margin-top: 2.5vw;
    font-size: 5vw;
    letter-spacing: -0.25px;
  `,
  TextButton: styled(Link)`
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
    border-radius: 0;
    color: #002c5f;
    background-color: transparent;
  `,

  Image: styled.img`
    width: 100%;
    margin: 0;
    object-fit: cover;
    height: auto !important;
    margin-top: -19px;
  `,
};
