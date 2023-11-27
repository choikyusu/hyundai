import { styled } from 'styled-components';
import { FUEL_TYPE_LIST } from '../../data/fuelType.data';
import { Checkbox } from '../../../common/Checkbox/Checkbox';
import { RoundLinkButton } from '../../../common/RoundLinkButton/RoundLinkButton';
import { DetailBox } from '../../common/DetailBox/DetailBox';
import { MovePageLink } from '../../common/MovePageLink/MovePageLink';
import { useType } from '../../hooks/useType';

export const Passenger = () => {
  const { onChange, bodyType, budgetRange, list } = useType({
    type: 'passenger',
  });

  return (
    <Styled.Container>
      <Styled.FindCarWrap>
        <Styled.DetailWrap>
          <Styled.H1>인원 수</Styled.H1>
          <DetailBox
            src="/images/ani_detail_people.gif"
            questionList={['당신은 누구와 함께', '차를 이용하시나요?']}
          >
            <Styled.AnswerBox>
              <Styled.FunctionWrap>
                <Styled.PersionWrap>
                  <Styled.Section>
                    <Styled.CircleButton />
                    <Styled.AnswerText>성인</Styled.AnswerText>
                    <Styled.Span>X</Styled.Span>
                    <Styled.AnswerText>1</Styled.AnswerText>
                    <Styled.CircleButton />
                  </Styled.Section>
                  <Styled.Section>
                    <Styled.CircleButton />
                    <Styled.AnswerText>어린이</Styled.AnswerText>
                    <Styled.Span>X</Styled.Span>
                    <Styled.AnswerText>1</Styled.AnswerText>
                    <Styled.CircleButton />
                  </Styled.Section>
                  <Styled.Section>
                    <Styled.CircleButton />
                    <Styled.AnswerText>아기</Styled.AnswerText>
                    <Styled.Span>X</Styled.Span>
                    <Styled.AnswerText>1</Styled.AnswerText>
                    <Styled.CircleButton />
                  </Styled.Section>
                </Styled.PersionWrap>
              </Styled.FunctionWrap>
              <Styled.P>최대 12명까지 설정 가능합니다.</Styled.P>
            </Styled.AnswerBox>
          </DetailBox>
          <RoundLinkButton
            query={{ fuelType: list.join(','), budgetRange, bodyType }}
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

    background: #e1d3ce;

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
    color: #bd472c;
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
      color: #bd472c;
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
    background: #cd6851;

    @media screen and (max-width: 767px) {
      height: 290px;
    }

    @media screen and (min-width: 767px) and (max-width: 1200px) {
      width: 100%;
      height: 500px;
    }
  `,
  FunctionWrap: styled.div`
    width: 80%;
    margin: 110px auto 0;

    @media screen and (max-width: 767px) {
      width: 100%;
      margin: 0 auto;
      padding: 20px 30px 0;
    }
  `,
  PersionWrap: styled.article`
    margin: 30px 0 60px;

    @media screen and (max-width: 767px) {
      margin: 0;
    }
  `,
  Section: styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    height: 100%;
    padding: 30px 0;
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.35);
    color: #fff;

    @media screen and (max-width: 767px) {
      padding: 20px 0;
    }
  `,
  CircleButton: styled.button`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    min-height: 20px;
    border: 0;
    border-radius: 20px;
    background: #fff;

    @media screen and (max-width: 767px) {
      width: 30px;
      height: 30px;
      min-width: 30px;
      min-height: 30px;
    }
  `,

  AnswerText: styled.p`
    width: 110px;
    text-align: center;
    font-family: 'HyundaiSansHeadKR';
    font-size: 30px;
    letter-spacing: -0.4px;
    color: #fff;
    line-height: 1;
    font-weight: 500;

    @media screen and (max-width: 767px) {
      width: 60px;
      font-size: 16px;
    }

    @media screen and (max-width: 767px) {
      width: 80px;
    }
  `,
  Span: styled.span`
    font-size: 1.1rem;
    white-space: nowrap;

    @media screen and (max-width: 767px) {
      width: 50px;
      font-size: 14px;
      text-align: center;
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
};
