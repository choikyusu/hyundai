import Link from 'next/link';
import React from 'react';
import { styled } from 'styled-components';

const LIST = [
  {
    title: '연료타입',
    descList: ['고객님이 원하시는', '연료타입을 선택해주세요.'],
    backgroundPosition: '48.6607% 6.7059%',
    backgroundColor: '#738ba9',
    link: '/vehicles/explorer/base/fuel_type',
  },
  {
    title: '바디타입',
    descList: ['고객님이 선호하는', '바디타입을 선택해주세요.'],
    backgroundPosition: '4.59643% 7.7059%',
    backgroundColor: '#528898',
    link: '/vehicles/explorer/base/body_type',
  },
  {
    title: '예산범위',
    descList: ['고객님이 생각하는', '예산범위를 선택해주세요.'],
    backgroundPosition: '69.9429% 7.7059%',
    backgroundColor: '#b38664',
    link: '/vehicles/explorer/base/budget_range',
  },
  {
    title: '인원수',
    descList: ['고객님이 함께 차를', '이용하실 인원수를', '선택해주세요.'],
    backgroundPosition: '92.625% 7.7059%',
    backgroundColor: '#ca5a41',
    link: '/vehicles/explorer/base/passenger',
  },
  {
    title: '공간활용',
    descList: ['고객님이 주로 실어다니는', '짐을 알려주세요.'],
    backgroundPosition: '4.29643% 54.902%',
    backgroundColor: '#67907f',
    link: '/vehicles/explorer/base/luggage',
  },
];

export default function ExplorerBasePage() {
  return (
    <Styled.Container>
      <Styled.FindCarWrap>
        <Styled.InfoText>
          <Styled.H1>기본 항목 선택하기</Styled.H1>
          <Styled.P>
            기본 항목 설정을 많이 할수록, <Styled.PBr /> 원하는 차에 가까워질 수
            있어요.
          </Styled.P>
          <Styled.ItemWrap>
            <Styled.ItemList>
              {LIST.map((item, index) => (
                <Styled.Item key={index}>
                  <Styled.Link href={item.link}>
                    <Styled.FindCarIcon
                      $backgroundColor={item.backgroundColor}
                      $backgroundPosition={item.backgroundPosition}
                    >
                      {item.title}
                    </Styled.FindCarIcon>
                  </Styled.Link>
                  <Styled.InfoSelect>
                    <Styled.B>
                      {item.title}
                      <Styled.InfoDec>
                        {item.descList.map((desc, index) => (
                          <React.Fragment key={index}>
                            {index !== 0 && <br />}
                            {desc}
                          </React.Fragment>
                        ))}
                      </Styled.InfoDec>
                    </Styled.B>
                  </Styled.InfoSelect>
                </Styled.Item>
              ))}
            </Styled.ItemList>
          </Styled.ItemWrap>
        </Styled.InfoText>
      </Styled.FindCarWrap>
    </Styled.Container>
  );
}

const Styled = {
  Container: styled.section`
    @media screen and (min-width: 768px) {
      width: 100%;
      height: 100vh;
      min-height: 860px;
      background-color: #d9e5e6;
    }

    @media screen and (max-width: 1460px) {
      height: 100%;
      min-height: auto;
      overflow: visible;
    }

    @media screen and (max-width: 767px) {
      width: 100%;
      height: 100%;
      min-height: 100vh;
      background-color: #d9e5e6;
    }
  `,
  FindCarWrap: styled.div`
    @media screen and (min-width: 768px) {
      height: 100vh !important;
    }

    @media screen and (max-width: 1150px) {
      height: 100% !important;
    }

    @media screen and (min-width: 768px) {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    @media screen and (max-width: 1460px) {
      overflow: visible;
      padding-bottom: 110px;
      height: 100% !important;
    }

    @media screen and (max-width: 767px) {
      width: 100%;
      height: 100%;
      min-height: 100vh;
      padding-bottom: 65px;
    }
  `,
  InfoText: styled.section`
    @media screen and (max-width: 767px) {
      padding-top: 65px;
      text-align: center;
    }

    @media screen and (min-width: 768px) {
      padding-top: 200px;
      text-align: center;
    }
  `,
  H1: styled.h1`
    @media screen and (min-width: 768px) {
      margin-top: 0;
      font-family: 'HyundaiSansHeadKR';
      font-size: 44px;
      letter-spacing: -0.4px;
      color: #000;
      line-height: 1;
      font-weight: 400;
    }

    @media screen and (max-width: 767px) {
      margin: 0;
      font-family: 'HyundaiSansHeadKR';
      font-size: 21px;
      letter-spacing: -0.192px;
      color: #000;
      line-height: 1;
      font-weight: 400;
    }
  `,
  P: styled.p`
    @media screen and (min-width: 768px) {
      margin-top: 30px;
      font-family: 'HyundaiSansTextKR';
      font-size: 20px;
      letter-spacing: -0.4px;
      color: #666;
      line-height: 1;
    }

    @media screen and (max-width: 767px) {
      margin-top: 10px;
      font-family: 'HyundaiSansTextKR';
      font-size: 14px;
      letter-spacing: -0.192px;
      color: #666;
      line-height: 22px;
    }
  `,
  PBr: styled.br`
    @media screen and (min-width: 768px) {
      display: none;
    }
  `,
  ItemWrap: styled.div`
    @media screen and (max-width: 767px) {
      position: relative;
      display: inline-block;
    }

    @media screen and (min-width: 768px) {
      position: relative;
      display: inline-block;
    }
  `,
  ItemList: styled.ul`
    @media screen and (max-width: 1460px) {
      margin: 60px auto;
      max-width: 690px;
    }

    @media screen and (max-width: 767px) {
      display: flex;
      flex-wrap: wrap;
      margin: 35px auto 0;
      max-width: 320px;
      justify-content: center;
    }

    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: top;
      flex-wrap: wrap;
      margin-top: 60px;
      margin-bottom: 0;
    }
  `,
  Item: styled.li`
    @media screen and (max-width: 767px) {
      width: 50%;
      min-width: auto;
      margin-bottom: 40px;
    }

    @media screen and (min-width: 768px) {
      position: relative;
      width: 230px;
    }
  `,
  Link: styled(Link)`
    @media screen and (max-width: 767px) {
      display: block;
      position: relative;
      width: 100%;
      height: auto;
      background-color: transparent;
    }

    @media screen and (min-width: 768px) {
      display: inline-block;
      position: static;
    }
  `,
  FindCarIcon: styled.i<{
    $backgroundPosition: string;
    $backgroundColor: string;
  }>`
    @media screen and (min-width: 768px) {
      display: inline-block;
      overflow: hidden;
      background-repeat: no-repeat;
      background-image: url(/images/findcar_ico_sprite.png);
    }

    background-position: ${props => props.$backgroundPosition};
    background-size: 600%;
    background-color: ${props => props.$backgroundColor};

    @media screen and (min-width: 768px) {
      position: relative;
      display: block;
      width: 170px;
      height: 170px;
      border-radius: 85px;
      margin: 0 0 30px;
      text-indent: -9999px;
    }

    @media screen and (max-width: 767px) {
      display: inline-block;
      overflow: hidden;
      background-repeat: no-repeat;
      background-image: url(/images/findcar_ico_sprite.png);
    }

    @media screen and (max-width: 767px) {
      position: relative;
      width: 85px;
      height: 85px;
      margin: 0 auto 15px;
      border-radius: 85px;
      text-indent: -999em;
      background-repeat: no-repeat;
    }
  `,
  InfoSelect: styled.div``,
  B: styled.b`
    @media screen and (min-width: 768px) {
      display: block;
      font-family: 'HyundaiSansHeadKR';
      font-size: 24px;
      letter-spacing: -0.4px;
      color: #000;
      line-height: 1;
      font-weight: 400;
    }
  `,
  InfoDec: styled.div`
    @media screen and (max-width: 767px) {
      font-size: 13px;
      color: #666;
      margin-top: 12px;
      line-height: 22px;
    }

    @media screen and (min-width: 768px) {
      margin-top: 20px;
      margin-bottom: 50px;
      font-family: 'HyundaiSansTextKR';
      font-size: 16px;
      letter-spacing: -0.4px;
      color: #666;
      line-height: 25px;
    }
  `,
};
