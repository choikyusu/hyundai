import { styled } from 'styled-components';
import { ContentBottom } from '../Content/ContentFooter/ContentBottom';
import { ContentArea } from '../common/ContentArea/ContentArea';

import { FilterTop } from './FilterTop/FilterTop';
import { FilterBottom } from './FilterBottom/FilterBottom';

export const Filter = () => {
  return (
    <ContentArea
      descList={['차량 정보와 옵션으로 원하는 모델을 검색해 보세요.']}
      menuTreeList={['홈', '구매/이벤트', '모델탐색', '상세모델검색']}
    >
      <Styled.ContentTop>
        <Styled.FilterWrap>
          <div>
            <FilterTop />
            <FilterBottom />
          </div>
        </Styled.FilterWrap>
      </Styled.ContentTop>

      <Styled.ContentBody>
        <Styled.CarList>
          <Styled.CarListHeader>검색조건을 선택해 주세요.</Styled.CarListHeader>
          <Styled.CarListGroup />
        </Styled.CarList>
      </Styled.ContentBody>
      <ContentBottom
        title="유의사항"
        description="홈페이지의 사진, 사양, 컬러, 제원은 참고용이며 실제 차량과는 상이할 수 있으니, 차량 구입 전 카마스터를 통해 확인 바랍니다."
      />
    </ContentArea>
  );
};

const Styled = {
  ContentBody: styled.div`
    width: 100%;
    margin-top: 0;
  `,
  CarList: styled.div`
    position: relative;
    width: 1120px;
    margin: 0 auto;

    @media screen and (max-width: 767px) {
      width: 100%;
    }

    @media screen and (min-width: 767px) and (max-width: 1200px) {
      width: 100%;
      padding: 0 30px;
    }
  `,
  CarListHeader: styled.p`
    margin-top: 60px;
    font-family: 'HyundaiSansHeadKR';
    font-size: 20px;
    letter-spacing: -0.4px;
    color: inherit;
    line-height: 100%;

    @media screen and (max-width: 767px) {
      margin: 40px 0;
      padding: 0 15px;
      font-family: 'HyundaiSansHeadKR';
      font-size: 16px;
      letter-spacing: -0.4px;
      color: inherit;
      line-height: 100%;
    }
  `,
  CarListGroup: styled.ul`
    padding-top: 60px;
    display: flex;
    justify-content: left;
    flex-wrap: wrap;

    @media screen and (max-width: 767px) {
      padding-top: 0;
    }
  `,
  ContentTop: styled.div`
    width: 100%;
    position: relative;
    background-color: #f6f3f2;

    @media screen and (max-width: 767px) {
      padding: 0 15px;
      overflow: hidden;
      background: #f6f3f2;
    }
  `,
  FilterWrap: styled.div`
    position: relative;
    width: 1120px;
    margin: 0 auto;

    @media screen and (max-width: 767px) {
      width: 100%;
    }

    @media screen and (min-width: 767px) and (max-width: 1200px) {
      width: 100%;
    }
  `,
};
