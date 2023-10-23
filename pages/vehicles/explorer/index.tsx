import Link from 'next/link';
import { styled } from 'styled-components';

export default function ExplorerPage() {
  return (
    <Styled.Container>
      <Styled.FindCarWrap>
        <Styled.FindCarStart>
          <Styled.H1>
            Find my Car.
            <Styled.IconFindCarHand />
          </Styled.H1>
          <Styled.BigText>
            나에게 어울리는 차를 <Styled.Br />
            빨리 찾는 방법
          </Styled.BigText>
          <Styled.MidTtext>
            내 차에 필요한 조건을 선택해주세요.
            <br />
            라이프스타일에 맞는 모델을 추천해 드립니다.
          </Styled.MidTtext>
          <Styled.StartLink href="/vehicles/explorer/base">
            시작하기
          </Styled.StartLink>
          <Styled.ModelChoiceLink href="/vehicles/explorer/model">
            {'이미 차종은 결정했어요 >'}
          </Styled.ModelChoiceLink>
        </Styled.FindCarStart>
      </Styled.FindCarWrap>
    </Styled.Container>
  );
}

const Styled = {
  Container: styled.section`
    width: 100%;
    height: 100vh;
    min-height: 860px;
    background: url(/images/bg/bg_find-car.png) no-repeat 50%;
    background-size: cover;

    @media screen and (max-width: 767px) {
      background: url(/images/bg/bg_find-car-mob.png) no-repeat 50%;
      background-size: cover;
    }

    @media screen and (max-width: 767px) {
      min-height: 568px;
    }
  `,
  FindCarWrap: styled.div`
    @media screen and (max-width: 767px) {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    @media screen and (min-width: 768px) {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 50px;
    }
  `,
  FindCarStart: styled.section`
    @media screen and (max-width: 767px) {
      height: 50%;
      text-align: center;
    }

    @media screen and (min-width: 768px) {
      text-align: center;
    }
  `,
  H1: styled.h1`
    @media screen and (min-width: 768px) {
      font-family: 'HyundaiSansHeadKR';
      font-size: 85px;
      letter-spacing: 0;
      color: #fff;
      line-height: 1;
    }

    @media screen and (max-width: 767px) {
      font-family: 'HyundaiSansHeadKR';
      font-size: 32px;
      letter-spacing: 0.32px;
      color: #fff;
      line-height: 1;
      margin: 0;
    }
  `,
  IconFindCarHand: styled.i`
    @media screen and (max-width: 767px) {
      display: inline-block;
      width: 32px;
      height: 32px;
      background: url(/images/hand.png) no-repeat;
      background-position: 0 100%;
      background-size: auto 100%;
    }

    @media screen and (min-width: 768px) {
      display: inline-block;
      position: relative;
      top: 8px;
      width: 70px;
      height: 70px;
      background: url(/images/hand.png) no-repeat;
      background-position: 50%;
    }
  `,
  BigText: styled.p`
    @media screen and (max-width: 767px) {
      margin-top: 25px;
      font-family: 'HyundaiSansHeadKR';
      font-size: 23px;
      letter-spacing: -0.4px;
      color: #63fff9;
      line-height: 31px;
      font-weight: 400;
    }

    @media screen and (min-width: 768px) {
      margin-top: 60px;
      font-family: 'HyundaiSansHeadKR';
      font-size: 55px;
      letter-spacing: -0.4px;
      color: #63fff9;
      line-height: 68px;
      font-weight: 400;
    }
  `,
  Br: styled.br`
    @media screen and (min-width: 768px) {
      display: none;
    }

    @media screen and (max-width: 1024px) {
      display: block;
    }
  `,

  MidTtext: styled.p`
    @media screen and (max-width: 767px) {
      margin-top: 30px;
      font-family: 'HyundaiSansTextKR';
      font-size: 14px;
      letter-spacing: -0.4px;
      color: #fff;
      line-height: 1.5;
      opacity: 0.7;
    }

    @media screen and (min-width: 768px) {
      margin-top: 40px;
      font-family: 'HyundaiSansTextKR';
      font-size: 24px;
      letter-spacing: -0.4px;
      color: #fff;
      line-height: 38px;
      opacity: 0.7;
    }
  `,
  StartLink: styled(Link)`
    @media screen and (max-width: 767px) {
      position: absolute;
      bottom: 80px;
      left: 50%;
      display: block;
      width: 68px;
      height: 68px;
      border-radius: 50%;
      background: #002c5f;
      font-family: 'HyundaiSansHeadKR';
      font-size: 16px;
      letter-spacing: -0.4px;
      color: #fff;
      line-height: 1;
      font-weight: 400;
      line-height: 68px;
      transform: translateX(-50%);
    }

    @media screen and (min-width: 768px) {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 126px;
      height: 126px;
      margin: 115px auto 0;
      border-radius: 62px;
      background: #002c5f;
      font-family: 'HyundaiSansHeadKR';
      font-size: 24px;
      letter-spacing: -0.4px;
      color: #fff;
      line-height: 1;
      font-weight: 400;
    }

    &:hover {
      background: #fff;
      color: #000;
    }
  `,
  ModelChoiceLink: styled(Link)`
    @media screen and (min-width: 768px) {
      position: relative;
    }

    @media screen and (min-width: 768px) {
      display: inline-block;
      margin-top: 60px;
      font-family: 'HyundaiSansTextKR';
      font-size: 20px;
      letter-spacing: -0.4px;
      color: #fff;
      line-height: 1;
      font-weight: 400;
    }

    @media screen and (max-width: 767px) {
      position: absolute;
      bottom: 40px;
      left: 50%;
      display: inline-block;
      margin-top: 40px;
      font-family: 'HyundaiSansTextKR';
      font-size: 14px;
      letter-spacing: -0.4px;
      color: #fff;
      line-height: 1;
      font-weight: 400;
      transform: translateX(-50%);
    }
  `,
};
