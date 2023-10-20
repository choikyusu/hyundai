import { styled } from 'styled-components';
import { ContentArea } from '../common/ContentArea/ContentArea';
import { TabMenu } from '../Header/MainHeader/Search/MobileSearch/TabMenu/TabMenu';
import { useState } from 'react';
import { data } from './data/data';

export const PurchaseConsult = () => {
  const [keywordType, setKeywordType] = useState<number>(1);

  const onClickKeyword = (selectedKeyword: number) => {
    setKeywordType(selectedKeyword);
  };

  return (
    <ContentArea
      descList={['현대자동차 차량 구매 정보를 신속하고 정확하게 알려드립니다.']}
      menuTreeList={['홈', '구매/이벤트', '구매', '구매상담 신청']}
    >
      <Styled.ContentBody>
        <TabMenu
          type="PurchaseConsult"
          list={['승용 차종', '상용 차종']}
          keywordType={keywordType}
          onClickKeyword={onClickKeyword}
        />
        <Styled.ContentStep>
          <Styled.List>
            {data.map((item, index) => (
              <Styled.Item key={index}>
                <Styled.IconWrap>
                  <Styled.Icon />
                  <Styled.IconDescription>{item.text}</Styled.IconDescription>
                </Styled.IconWrap>
              </Styled.Item>
            ))}
          </Styled.List>
        </Styled.ContentStep>
      </Styled.ContentBody>
    </ContentArea>
  );
};

const Styled = {
  ContentBody: styled.div`
    @media screen and (max-width: 767px) {
      width: 100% !important;
    }

    @media screen and (min-width: 768px) {
      width: 1120px;
      padding: 0;
      margin: 0 auto;
    }

    @media screen and (min-width: 768px) and (max-width: 1200px) {
      width: 100%;
      padding: 0 30px;
    }
  `,
  ContentStep: styled.div`
    @media screen and (min-width: 768px) {
      width: 1120px;
      margin: 0 auto;
      padding: 80px 0;
    }

    @media screen and (min-width: 768px) and (max-width: 1200px) {
      width: 100%;
    }

    @media screen and (max-width: 767px) {
      padding: 50px 15px 40px;
    }
  `,
  List: styled.ul`
    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: center;
    }
  `,
  Item: styled.li`
    @media screen and (max-width: 767px) {
      margin-bottom: 28px;
      background-color: #f6f3f2;
    }

    @media screen and (min-width: 768px) {
      width: 25%;
      text-align: center;
    }

    @media screen and (min-width: 768px) {
      &:first-child {
        margin-left: 0;
      }
    }
  `,
  IconWrap: styled.p`
    @media screen and (max-width: 767px) {
      align-items: stretch;
      height: 21.9vw;
      max-height: 95px;
    }

    @media screen and (max-width: 767px) {
      display: flex;
      position: relative;
    }

    @media screen and (min-width: 768px) {
      position: relative;
    }
  `,
  Icon: styled.i`
    background: url(/img/consult_ico_step_04.87303a6.png) no-repeat;

    @media screen and (min-width: 768px) {
      display: block;
      width: 200px;
      height: 200px;
      margin: 0 auto 10px;
    }

    @media screen and (min-width: 768px) and (max-width: 1200px) {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      background-position: 50%;
    }
  `,
  IconDescription: styled.span`
    @media screen and (min-width: 768px) {
      display: block;
      margin-top: 30px;
      padding: 0 10px;
      font-family: 'HyundaiSansHeadKRR';
      font-size: 16px;
      line-height: 30px;
      letter-spacing: -0.4px;
    }

    @media screen and (max-width: 767px) {
      display: flex;
      position: relative;
    }

    @media screen and (max-width: 767px) {
      align-items: center;
      flex: 1;
      margin: 0 6.5vw;
      padding-left: 1.5em;
      font-family: 'HyundaiSansTextKRR';
      font-size: 14px;
      line-height: 22px;
      letter-spacing: -0.4px;
    }
  `,
};
