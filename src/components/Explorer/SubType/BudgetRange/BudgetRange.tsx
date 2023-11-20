import Link from 'next/link';
import { styled } from 'styled-components';
import { DetailBox } from '../../common/DetailBox/DetailBox';
import { MultiRangeSlider } from '@/src/components/common/MultiRangeSlider/MultiRangeSlider';
import { PRICE_LIST } from './data/data';
import { useState } from 'react';
import { RoundLinkButton } from '@/src/components/common/RoundLinkButton/RoundLinkButton';
import { MovePageLink } from '../../common/MovePageLink/MovePageLink';
import { useType } from '../../hooks/useType';

export const BudgetRange = () => {
  const { fuelType, bodyType, list } = useType({
    type: 'budgetRange',
  });
  const [minIndex, setMinIndex] = useState(Number(list?.[0]) || 0);
  const [maxIndex, setMaxIndex] = useState(
    Number(list?.[1]) || PRICE_LIST.length - 1,
  );

  const onChangeInputRange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'Min' | 'Max',
  ) => {
    if (type === 'Min') setMinIndex(Number(e.target.value));
    else if (type === 'Max') setMaxIndex(Number(e.target.value));
  };

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
                <Styled.PriceWrap>
                  <Styled.Section>
                    <Styled.P>최소 설정 금액</Styled.P>
                    <Styled.Div>
                      {PRICE_LIST[minIndex]} <Styled.P>만원</Styled.P>
                    </Styled.Div>
                  </Styled.Section>
                  <Styled.Section>
                    <Styled.P>최대 설정 금액</Styled.P>
                    <Styled.Div>
                      {PRICE_LIST[maxIndex]} <Styled.P>만원</Styled.P>
                    </Styled.Div>
                  </Styled.Section>
                </Styled.PriceWrap>
                <Styled.RangeContainer>
                  <MultiRangeSlider
                    minIndex={minIndex}
                    maxIndex={maxIndex}
                    onChangeInputRange={onChangeInputRange}
                    list={PRICE_LIST.map(price => `${price}`)}
                  />
                </Styled.RangeContainer>
              </Styled.FunctionWrap>
              <Styled.P style={{ textAlign: 'center' }}>
                1,500 ~ 9,999 만원까지 설정 가능합니다.
              </Styled.P>
            </Styled.AnswerBox>
          </DetailBox>
          <RoundLinkButton
            query={{
              fuelType,
              budgetRange: `${minIndex},${maxIndex}`,
              bodyType,
            }}
            url="/vehicles/explorer/base"
            text="계속하기"
          />
        </Styled.DetailWrap>
        <Styled.MovePageRight>
          <MovePageLink
            url="/vehicles/explorer/base/body_type"
            text="바디타입"
          />
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

    background: #dacec2;

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
    color: #a05c2b;
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
      color: #a05c2b;
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
    background: #a67d5f;

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
  Section: styled.section`
    position: relative;
    width: 40%;
    white-space: nowrap;
    font-family: 'HyundaiSansTextKR';
    font-size: 24px;
    letter-spacing: -0.4px;
    color: #fff;
    line-height: 1;

    @media screen and (max-width: 767px) {
      width: auto;
      font-family: 'HyundaiSansTextKR';
      font-size: 12px;
      letter-spacing: 0.32px;
      color: #fff;
      line-height: normal;
    }
  `,
  P: styled.p`
    margin-bottom: 20px;
    font-family: 'HyundaiSansTextKR';
    font-size: 20px;
    letter-spacing: -0.4px;
    color: #fff;
    line-height: 1;

    @media screen and (max-width: 767px) {
      margin-bottom: 15px;
      font-family: 'HyundaiSansTextKR';
      font-size: 10px;
      letter-spacing: -0.4px;
      color: #fff;
      line-height: normal;
    }
  `,
  Div: styled.div`
    display: flex;
    height: 40px;
    padding: 0 20px;
    border: 1px solid #e4dcd3;
    background: #fff;
    box-sizing: border-box;
    border-radius: 0;
    font-family: 'HyundaiSansTextKR';
    font-size: 14px;
    letter-spacing: -0.4px;
    color: #000;
    line-height: 100%;

    @media screen and (max-width: 640px) {
      padding: 0 15px;
      font-family: 'HyundaiSansTextKR';
      font-size: 16px;
      letter-spacing: -0.4px;
      color: #000;
      line-height: 100%;
    }

    background: transparent;
    border: 0;
    width: 106px;
    font-family: 'HyundaiSansHeadKR';
    font-size: 44px;
    letter-spacing: -0.32px;
    color: #f9fc1f;
    line-height: 1;
    font-weight: 500;
    padding: 0;
    vertical-align: middle;

    @media screen and (max-width: 767px) {
      background: transparent;
      border: 0;
      width: 50px;
      font-family: 'HyundaiSansTextKR';
      font-size: 20px;
      letter-spacing: 0.32px;
      color: #f9fc1f;
      line-height: normal;
      font-weight: 500;
      padding: 0;
      vertical-align: middle;
    }
  `,
  RangeContainer: styled.div`
    width: 95%;
    margin: 60px auto 70px;

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
