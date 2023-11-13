import Link from 'next/link';
import { styled } from 'styled-components';
import { Checkbox } from '../../../common/Checkbox/Checkbox';
import { RoundLinkButton } from '../../../common/RoundLinkButton/RoundLinkButton';
import { MovePageLink } from '../../common/MovePageLink/MovePageLink';
import { DetailBox } from '../../common/DetailBox/DetailBox';
import { useType } from '../../hooks/useType';
import { BODY_TYPE_LIST } from '../../data/fuelType.data';

export const BodyType = () => {
  const { onChange, budgetRange, fuelType, list } = useType({
    type: 'bodyType',
  });
  return (
    <Styled.Container>
      <Styled.FindCarWrap>
        <Styled.DetailWrap>
          <Styled.H1>바디타입</Styled.H1>
          <DetailBox
            src="/images/ani_detail_body.gif"
            questionList={['당신이 선호하는', '바디타입은?']}
          >
            <Styled.AnswerBox>
              <Styled.OptionCheckList>
                {BODY_TYPE_LIST.map(type => (
                  <Styled.Item>
                    <Styled.CheckboxWrap>
                      <Checkbox
                        id={type.id}
                        name=""
                        type={type.type}
                        checked={list.includes(type.id)}
                        onChange={() => onChange(type.id)}
                      />
                      <Styled.FindCarType />
                      {type.name}
                    </Styled.CheckboxWrap>
                  </Styled.Item>
                ))}
              </Styled.OptionCheckList>
              <Styled.P>각 항목에 대해 복수 선택 가능합니다.</Styled.P>
            </Styled.AnswerBox>
          </DetailBox>
          <RoundLinkButton
            query={{ fuelType, budgetRange, bodyType: list.join(',') }}
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
  DetailBox: styled.article`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 767px) {
      display: block;
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    }

    @media screen and (min-width: 767px) and (max-width: 1200px) {
      display: block;
    }
  `,
  QuestionBox: styled.div`
    width: 50%;
    height: 580px;

    @media screen and (max-width: 767px) {
      width: 100%;
    }

    @media screen and (min-width: 767px) and (max-width: 1200px) {
      width: 100%;
      height: 500px;
    }

    @media screen and (max-width: 767px) {
      min-height: 280px;
      height: auto;
    }

    background: #fff;
    text-align: center;
  `,
  H2: styled.h2`
    font-family: 'HyundaiSansHeadKR';
    font-size: 36px;
    letter-spacing: -0.4px;
    color: #000;
    line-height: 50px;
    font-weight: 500;

    @media screen and (max-width: 767px) {
      padding: 65px 0 30px;
      font-family: 'HyundaiSansHeadKR';
      font-size: 16px;
      letter-spacing: -0.4px;
      color: #000;
      line-height: 22px;
    }
  `,

  Anipic: styled.div`
    display: block;
    width: 450px;
    margin: 30px auto 50px;

    @media screen and (max-width: 767px) {
      width: 180px;
      margin: 0 auto 20px;
      line-height: normal;
    }

    @media screen and (min-width: 767px) and (max-width: 1200px) {
      margin: 0 auto 20px;
    }
  `,
  Image: styled.img`
    @media screen and (max-width: 767px) {
      width: 100%;
    }
  `,
  Question: styled.div`
    @media screen and (max-width: 767px) {
      margin-top: 20px;
    }
  `,
  AnswerBox: styled.div`
    width: 50%;
    height: 580px;

    @media screen and (max-width: 767px) {
      width: 100%;
    }

    position: relative;
    background: #528898;

    @media screen and (max-width: 767px) {
      height: 290px;
    }

    @media screen and (min-width: 767px) and (max-width: 1200px) {
      width: 100%;
      height: 500px;
    }
  `,
  OptionCheckList: styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 170px auto 70px;

    @media screen and (min-width: 767px) and (max-width: 1200px) {
      padding-top: 70px;
      margin: 0 auto 30px;
    }

    @media screen and (max-width: 767px) {
      max-width: 100%;
      margin: 0 auto;
      padding: 40px 30px 0;
    }
  `,
  Item: styled.li`
    position: relative;
    display: inline-block;
    width: 150px;
    height: 239px;
    margin: 0 6px;
    padding: 50px 0 40px;
    border-radius: 4px;
    background-color: #5faaba;

    @media screen and (max-width: 767px) {
      width: 100%;
      height: 56px;
      margin: 0 0 7.5px;
      padding: 0 0 0 15px;
    }
  `,
  CheckboxWrap: styled.div`
    position: relative;
    justify-content: center;

    @media screen and (max-width: 767px) {
      display: block;
      width: 100%;
      height: 100%;
    }
  `,
  FindCarType: styled.i`
    display: block;
    width: 130px;
    height: 54px;
    margin: 55px 0 15px;
    text-indent: -9999em;

    background-image: url(/images/findcar-type-sedan.png);
    background-size: auto;
    background-position: 4px;

    @media screen and (max-width: 767px) {
      position: absolute;
      right: 15px;
      top: 50%;
      width: 65px;
      height: auto;
      margin: 0;
      background-size: contain !important;
      transform: translateY(-50%);
    }
  `,
  P: styled.p`
    position: absolute;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    font-family: 'HyundaiSansTextKRR';
    font-size: 18px;
    letter-spacing: -0.4px;
    color: #fff;
    line-height: 1;

    @media screen and (max-width: 767px) {
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      font-family: 'HyundaiSansTextKR';
      font-size: 12px;
      letter-spacing: -0.4px;
      color: #fff;
      line-height: 22px;
      white-space: nowrap;
    }

    @media screen and (min-width: 767px) and (max-width: 1200px) {
      bottom: 40px;
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
