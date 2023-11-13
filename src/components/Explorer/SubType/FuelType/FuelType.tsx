import { styled } from 'styled-components';
import { FUEL_TYPE_LIST } from '../../data/fuelType.data';
import { Checkbox } from '../../../common/Checkbox/Checkbox';
import { RoundLinkButton } from '../../../common/RoundLinkButton/RoundLinkButton';
import { DetailBox } from '../../common/DetailBox/DetailBox';
import { MovePageLink } from '../../common/MovePageLink/MovePageLink';
import { useType } from '../../hooks/useType';

export const FuelType = () => {
  const { onChange, bodyType, budgetRange, list } = useType({
    type: 'fuelType',
  });

  return (
    <Styled.Container>
      <Styled.FindCarWrap>
        <Styled.DetailWrap>
          <Styled.H1>연료타입</Styled.H1>
          <DetailBox
            src="/images/ani_detail_fuel.gif"
            questionList={['당신이 선호하는 연료는', '어떤 종류인가요?']}
          >
            <Styled.AnswerBox>
              <Styled.OptionCheckList>
                {FUEL_TYPE_LIST.map(item => (
                  <Styled.Item>
                    <Styled.CheckboxWrap>
                      <Checkbox
                        id={item.id}
                        name={item.name}
                        type={item.type as 'medium'}
                        checked={list.includes(item.id)}
                        onChange={() => onChange(item.id)}
                      />
                    </Styled.CheckboxWrap>
                  </Styled.Item>
                ))}
              </Styled.OptionCheckList>
              <Styled.P>각 항목에 대해 복수 선택 가능합니다.</Styled.P>
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
  OptionCheckList: styled.ul`
    max-width: 440px;
    margin: 100px auto 50px;

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
    display: flex;
    align-items: center;
    width: 440px;
    height: 70px;
    margin-bottom: 20px;
    padding: 0 0 0 30px;
    border-radius: 4px;
    background-color: #8aa2ba;

    @media screen and (max-width: 767px) {
      width: auto;
      height: 40px;
      margin-bottom: 7.5px;
      padding-left: 15px;
    }
  `,
  CheckboxWrap: styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    margin-right: 16px;
    white-space: nowrap;

    @media screen and (max-width: 767px) {
      position: relative;
      width: 100%;
      height: 100%;
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
