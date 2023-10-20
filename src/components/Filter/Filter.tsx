import { styled } from 'styled-components';
import { ContentBottom } from '../Content/ContentFooter/ContentBottom';
import { ContentArea } from '../common/ContentArea/ContentArea';

import { FilterTop } from './FilterTop/FilterTop';
import { FilterBottom } from './FilterBottom/FilterBottom';
import { CommonStyled } from '@/src/styles/CommonStyled';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import { useFilter } from './useFilter';
import { LoadingWrap } from '../common/LoadingWrap/LoadingWrap';

export const Filter = () => {
  const {
    data,
    filterMap,
    maxIndex,
    minIndex,
    onChangeInputRange,
    setFilterMap,
  } = useFilter();

  return (
    <LoadingWrap>
      <ContentArea
        descList={['차량 정보와 옵션으로 원하는 모델을 검색해 보세요.']}
        menuTreeList={['홈', '구매/이벤트', '모델탐색', '상세모델검색']}
      >
        <Styled.ContentTop>
          <Styled.FilterWrap>
            <div>
              <FilterTop
                minIndex={minIndex}
                maxIndex={maxIndex}
                filterMap={filterMap}
                setFilterMap={setFilterMap}
                onChangeInputRange={onChangeInputRange}
              />
              <FilterBottom filterMap={filterMap} setFilterMap={setFilterMap} />
            </div>
          </Styled.FilterWrap>
          <Styled.FilterTag>
            {Array.from(filterMap)
              .sort((a, b) => a[0].localeCompare(b[0]))
              .map(flatMap =>
                flatMap[1].map((item, index) => (
                  <Styled.Tag key={index}>
                    {item.name}
                    <Styled.DeleteButton>
                      <AiOutlineClose />
                    </Styled.DeleteButton>
                  </Styled.Tag>
                )),
              )}

            <span>
              <Styled.DeselectAllButton onClick={() => setFilterMap(new Map())}>
                전체해제
              </Styled.DeselectAllButton>
            </span>
          </Styled.FilterTag>
        </Styled.ContentTop>
        <Styled.ContentBody>
          <Styled.CarList>
            {!data && (
              <Styled.CarListHeader>
                검색조건을 선택해 주세요.
              </Styled.CarListHeader>
            )}
            {data && (
              <Styled.CarListHeader>
                총 <Styled.Span>{data.list.length}건</Styled.Span>이
                검색되었습니다.
              </Styled.CarListHeader>
            )}

            <Styled.CarListGroup>
              {data &&
                data.list.map((item, index) => (
                  <Styled.CarListItem key={index}>
                    <Styled.CarLink href="">
                      <Styled.ElImage>
                        <Styled.ElImageInner
                          src={item.carImgPath}
                          alt={item.carName}
                        />
                        <Styled.Strong>{item.carName}</Styled.Strong>
                      </Styled.ElImage>
                    </Styled.CarLink>
                  </Styled.CarListItem>
                ))}
            </Styled.CarListGroup>
          </Styled.CarList>
        </Styled.ContentBody>
        <ContentBottom
          title="유의사항"
          description="홈페이지의 사진, 사양, 컬러, 제원은 참고용이며 실제 차량과는 상이할 수 있으니, 차량 구입 전 카마스터를 통해 확인 바랍니다."
        />
      </ContentArea>
    </LoadingWrap>
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
  Span: styled.span`
    color: #007fa8;
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
  CarListItem: styled.li`
    width: 25%;
    margin: 0 0 80px;
    text-align: center;

    @media screen and (max-width: 767px) {
      width: 50%;
      margin: 0 0 40px;
    }
  `,
  CarLink: styled(Link)`
    display: block;
    padding: 0 40px;
    color: #000;
  `,
  ElImage: styled.div`
    position: relative;

    display: inline-block;
    text-align: center;
    box-sizing: border-box;
    overflow: hidden;
  `,
  ElImageInner: styled.img`
    object-fit: contain;
    width: 100%;
  `,
  ElImagePlaceHolder: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    background: #e5e5e5;
    text-align: center;
    vertical-align: middle;
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
  Strong: styled.strong`
    display: block;
    font-family: 'HyundaiSansHeadKR';
    font-size: 20px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: -0.4px;

    @media screen and (max-width: 767px) {
      font-family: 'HyundaiSansHeadKR';
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: -0.4px;
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
  FilterTag: styled.div`
    width: 1120px;
    margin: 0 auto;
    padding: 35px 0 25px;

    @media screen and (min-width: 767px) and (max-width: 1200px) {
      width: 100%;
      padding-left: 15px;
      padding-right: 15px;
    }

    @media screen and (max-width: 767px) {
      width: 100%;
    }
  `,
  DeselectAllButton: styled(CommonStyled.Button)`
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 30px;
    border-radius: 15px;
    color: #000;
    background-color: #fff;
    border: 0;
    padding: 0 13px;
    margin: 0 6px 6px 0;
    line-height: 24px;

    @media screen and (max-width: 640px) {
      margin-right: 10px;
      padding: 0 10px;
      height: 20px;
      border-radius: 10px;
    }

    padding: 0 13px;
    background-color: #007fa8;

    @media screen and (max-width: 640px) {
      &:first-child {
        margin-left: 0;
      }
    }

    @media screen and (max-width: 640px) {
      padding: 0 10px;
    }

    margin-bottom: 10px;
    margin-right: 10px;

    font-family: 'HyundaiSansTextKR';
    font-size: 16px;
    line-height: 30px;
    letter-spacing: -0.4px;
    color: #fff;

    @media screen and (max-width: 767px) {
      font-size: 12px;
      line-height: 100%;
    }

    cursor: pointer;
  `,
  Tag: styled.span`
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 30px;
    border-radius: 15px;
    color: #000;
    background-color: #fff;
    border: 0;
    padding: 0 13px;
    margin: 0 6px 6px 0;
    line-height: 24px;

    margin-bottom: 10px;
    margin-right: 10px;

    @media screen and (max-width: 640px) {
      margin-right: 10px;
      padding: 0 10px;
      height: 20px;
      border-radius: 10px;

      &:first-child {
        margin-left: 0;
      }
    }
  `,
  DeleteButton: styled(CommonStyled.Button)`
    cursor: pointer;
    display: inline-block;
    margin: 0 -5px 0 8px;
    vertical-align: middle;
    width: 15px;
    height: 15px;
    padding: 3px 0 0 3px;

    @media screen and (max-width: 640px) {
      margin: 0 0 0 10px;
      width: 8px;
      height: 8px;
    }
  `,
};
