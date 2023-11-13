import Link from 'next/link';
import { styled } from 'styled-components';
import { DetailBox } from '../../common/DetailBox/DetailBox';

export const BudgetRange = () => {
  return (
    <Styled.Container>
      <Styled.FindCarWrap>
        <Styled.DetailWrap>
          <Styled.H1>예산범위</Styled.H1>
          <DetailBox
            src="/images/ani_detail_money.gif"
            questionList={['당신이 생각하는', '예산범위는?']}
          >
            <Styled.AnswerBox>
              <Styled.FunctionWrap>
                <Styled.H3>금액 설정</Styled.H3>
              </Styled.FunctionWrap>
            </Styled.AnswerBox>
          </DetailBox>
          <Styled.PrevBaseLink href="/vehicles/explorer/base">
            <Styled.ArrowLineLeft>계속하기</Styled.ArrowLineLeft>
          </Styled.PrevBaseLink>
        </Styled.DetailWrap>
        <Styled.MovePageRight>
          <Styled.MovePageLink href="/vehicles/explorer/base/body_type">
            <Styled.MovePageSpan>바디타입</Styled.MovePageSpan>
          </Styled.MovePageLink>
        </Styled.MovePageRight>
      </Styled.FindCarWrap>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    min-height: 880px;
    overflow: hidden;

    background: #c1cddb;

    @media screen and (min-width: 767px) and (max-width: 1200px) {
      height: 100%;
      min-height: auto;
      overflow: visible;
    }
  `,
  FindCarWrap: styled.div`
    @media screen and (max-width: 767px) {
      padding-top: 54px;
      position: relative;
    }

    @media screen and (min-width: 767px) and (max-width: 1200px) {
      padding: 110px 0;
    }
  `,
  DetailWrap: styled.div`
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1120px;
    margin: 0;
    transform: translate(-50%, -50%);

    @media screen and (max-width: 767px) {
      position: relative;
      transform: none;
      top: 0;
      left: 0;
      width: 100%;
      max-width: 708px;
      margin: 0 auto;
      font-size: 12px;
      padding: 0 40px;
    }

    @media screen and (min-width: 767px) and (max-width: 1200px) {
      position: static;
      width: 100%;
      max-width: 708px;
      -webkit-transform: none;
      transform: none;
      margin: 0 auto;
    }
  `,
  H1: styled.h1`
    position: absolute;
    top: -60px;
    font-family: 'HyundaiSansHeadKR';
    font-size: 24px;
    letter-spacing: -0.4px;
    color: #365e93;
    line-height: 1;
    font-weight: 500;

    @media screen and (max-width: 767px) {
      position: absolute;
      top: 30px;
      left: 50%;
      transform: translateX(-50%);
      font-family: 'HyundaiSansTextKR';
      font-size: 16px;
      letter-spacing: -0.4px;
      color: #365e93;
      line-height: 22px;
      margin: 0;
    }

    @media screen and (min-width: 767px) and (max-width: 1200px) {
      position: static;
      margin: 0 0 20px;
    }
  `,
  AnswerBox: styled.div`
    width: 50%;
    height: 580px;

    @media screen and (max-width: 767px) {
      width: 100%;
    }

    position: relative;
    background: #738ba9;

    @media screen and (max-width: 767px) {
      height: 290px;
    }

    @media screen and (min-width: 767px) and (max-width: 1200px) {
      width: 100%;
      height: 500px;
    }
  `,
  FunctionWrap: styled.div`
    width: 85%;
    margin: 110px auto 0;

    @media screen and (max-width: 767px) {
      max-width: 100%;
      width: 100%;
      margin: 0 auto;
      padding: 40px 30px 0;
    }

    @media screen and (min-width: 767px) and (max-width: 1200px) {
      width: 440px;
      padding-top: 70px;
      margin: 0 auto 30px;
    }
  `,
  H3: styled.h3`
    padding-bottom: 20px;
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.3);
    font-family: 'HyundaiSansHeadKR';
    font-size: 24px;
    letter-spacing: -0.4px;
    color: #fff;
    line-height: 1;
    font-weight: 400;

    @media screen and (max-width: 767px) {
      padding-bottom: 10px;
      font-family: 'HyundaiSansHeadKR';
      font-size: 14px;
      letter-spacing: -0.4px;
      color: #fff;
      line-height: 20px;
    }
  `,
  PriceWrap: styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;

    @media screen and (max-width: 767px) {
      margin-top: 30px;
    }
  `,
  PrevBaseLink: styled(Link)`
    position: absolute;
    left: 50%;
    bottom: -115px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 55px;
    border-radius: 31px;
    border: 3px solid #000;
    font-family: 'HyundaiSansHeadKR';
    font-size: 18px;
    letter-spacing: -0.4px;
    color: #000;
    line-height: 1;
    opacity: 0.8;
    transform: translateX(-50%);

    @media screen and (max-width: 767px) {
      height: 40px;
      border: 2px solid #000;
    }

    @media screen and (min-width: 767px) and (max-width: 1200px) {
      position: static;
      margin: 60px auto 0;
      transform: none;
    }
  `,
  ArrowLineLeft: styled.span`
    position: relative;
    width: 80%;
    text-align: center;

    @media screen and (max-width: 767px) {
      font-size: 14px;
    }
  `,
  MovePageRight: styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    right: 0;

    @media screen and (max-width: 767px) {
      top: unset;
      bottom: 10px;
      -webkit-transform: none;
      transform: none;
    }

    @media screen and (max-width: 767px) {
      right: 40px;
      bottom: -50px;
      top: auto;
    }
  `,
  MovePageLink: styled(Link)`
    position: relative;
    display: block;
    width: 44px;
    height: 44px;
    font-family: 'HyundaiSansTextKR';
    font-size: 24px;
    letter-spacing: -0.4px;
    color: #666;
    line-height: 1;
    font-weight: 500;
    background-color: rgba(0, 0, 0, 0.2);

    @media screen and (max-width: 767px) {
      width: 74px;
      background-color: transparent !important;
    }
  `,
  MovePageSpan: styled.span`
    position: absolute;
    top: 50%;
    display: inline-block;
    white-space: nowrap;
    transform: translateY(-50%);
    right: 60px;

    @media screen and (max-width: 767px) {
      font-size: 14px;
    }

    @media screen and (max-width: 767px) {
      right: 20px;
    }
  `,
};
