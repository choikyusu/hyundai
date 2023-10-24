import { Checkbox } from '@/src/components/common/Checkbox/Checkbox';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { styled } from 'styled-components';

export const FUEL_TYPE_LIST: BaseSubItemType[] = [
  { id: '2110000000', name: '가솔린', type: 'medium' },
  { id: '2120000000', name: '디젤', type: 'medium' },
  { id: '2130000000', name: '친환경', type: 'medium' },
  { id: '2140000000', name: 'LPG', type: 'medium' },
];

export default function FuelTypePage() {
  const router = useRouter();

  const { fuelType, budgetRange, bodyType } = router.query as {
    fuelType: string | undefined;
    budgetRange: string | undefined;
    bodyType: string | undefined;
  };

  const [list, setList] = useState<string[]>(
    fuelType ? fuelType?.split(',') : [],
  );

  const onChange = (value: string) => {
    if (list.includes(value)) {
      const updatedList = list.filter(item => item !== value);
      setList(updatedList);
    } else {
      const updatedList = [...list, value];
      setList(updatedList);
    }
  };

  return (
    <Styled.Container>
      <Styled.FindCarWrap>
        <Styled.DetailWrap>
          <Styled.H1>연료타입</Styled.H1>
          <Styled.DetailBox>
            <Styled.QuestionBox>
              <Styled.H2>
                <Styled.Anipic>
                  <Styled.Image src="/images/ani_detail_fuel.gif" />
                </Styled.Anipic>
                <Styled.Question>
                  당신이 선호하는 연료는
                  <br />
                  어떤 종류인가요?
                </Styled.Question>
              </Styled.H2>
            </Styled.QuestionBox>
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
          </Styled.DetailBox>
          <Styled.PrevBaseLink
            href={{
              pathname: '/vehicles/explorer/base',
              query: { fuelType: list.join(','), budgetRange, bodyType },
            }}
          >
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
}

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

    &:hover {
      background: #000;
      color: #fff;
      opacity: 1;
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
