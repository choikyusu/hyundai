import { styled } from 'styled-components';
import { ContentBottom } from '../Content/ContentFooter/ContentBottom';
import { ContentArea } from '../common/ContentArea/ContentArea';
import { MultiRangeSlider } from '../common/MultiRangeSlider/MultiRangeSlider';

export const Filter = () => {
  const list = Array.from({ length: 15 }, (v, i) => `${(i + 3) * 500}만원`);

  return (
    <ContentArea
      descList={['차량 정보와 옵션으로 원하는 모델을 검색해 보세요.']}
      menuTreeList={['홈', '구매/이벤트', '모델탐색', '상세모델검색']}
    >
      <Styled.ContentTop>
        <Styled.FilterWrap>
          <div>
            <Styled.FilterTop>
              <Styled.FilterList>
                <Styled.FilterItem>
                  <Styled.FilterTopHeader>
                    <strong>차종</strong>
                  </Styled.FilterTopHeader>
                  <Styled.FilterCheckboxList>
                    <Styled.CheckboxGroup>
                      <Styled.ElCheckboxLabel htmlFor="1">
                        <Styled.ElCheckbox id="1" type="checkbox" />
                        <Styled.CheckboxText>수소/전기차</Styled.CheckboxText>
                      </Styled.ElCheckboxLabel>
                      <Styled.ElCheckboxLabel htmlFor="2">
                        <Styled.ElCheckbox id="2" type="checkbox" />
                        <Styled.CheckboxText>N</Styled.CheckboxText>
                      </Styled.ElCheckboxLabel>
                      <Styled.ElCheckboxLabel htmlFor="3">
                        <Styled.ElCheckbox id="3" type="checkbox" />
                        <Styled.CheckboxText>승용</Styled.CheckboxText>
                      </Styled.ElCheckboxLabel>
                      <Styled.ElCheckboxLabel htmlFor="4">
                        <Styled.ElCheckbox id="4" type="checkbox" />
                        <Styled.CheckboxText>SUV</Styled.CheckboxText>
                      </Styled.ElCheckboxLabel>
                      <Styled.ElCheckboxLabel htmlFor="5">
                        <Styled.ElCheckbox id="5" type="checkbox" />
                        <Styled.CheckboxText>MPV</Styled.CheckboxText>
                      </Styled.ElCheckboxLabel>
                      <Styled.ElCheckboxLabel htmlFor="6">
                        <Styled.ElCheckbox id="6" type="checkbox" />
                        <Styled.CheckboxText>소형트럭&택시</Styled.CheckboxText>
                      </Styled.ElCheckboxLabel>
                    </Styled.CheckboxGroup>
                  </Styled.FilterCheckboxList>
                </Styled.FilterItem>
                <Styled.FilterItem>
                  <Styled.FilterTopHeader>
                    <strong>엔진</strong>
                  </Styled.FilterTopHeader>
                  <Styled.FilterCheckboxList>
                    <Styled.CheckboxGroup>
                      <Styled.ElCheckboxLabel htmlFor="1">
                        <Styled.ElCheckbox id="1" type="checkbox" />
                        <Styled.CheckboxText>디젤</Styled.CheckboxText>
                      </Styled.ElCheckboxLabel>
                      <Styled.ElCheckboxLabel htmlFor="2">
                        <Styled.ElCheckbox id="2" type="checkbox" />
                        <Styled.CheckboxText>전기</Styled.CheckboxText>
                      </Styled.ElCheckboxLabel>
                      <Styled.ElCheckboxLabel htmlFor="3">
                        <Styled.ElCheckbox id="3" type="checkbox" />
                        <Styled.CheckboxText>가솔린</Styled.CheckboxText>
                      </Styled.ElCheckboxLabel>
                      <Styled.ElCheckboxLabel htmlFor="4">
                        <Styled.ElCheckbox id="4" type="checkbox" />
                        <Styled.CheckboxText>하이브리드</Styled.CheckboxText>
                      </Styled.ElCheckboxLabel>
                      <Styled.ElCheckboxLabel htmlFor="5">
                        <Styled.ElCheckbox id="5" type="checkbox" />
                        <Styled.CheckboxText>수소</Styled.CheckboxText>
                      </Styled.ElCheckboxLabel>
                      <Styled.ElCheckboxLabel htmlFor="6">
                        <Styled.ElCheckbox id="6" type="checkbox" />
                        <Styled.CheckboxText>LPG</Styled.CheckboxText>
                      </Styled.ElCheckboxLabel>
                    </Styled.CheckboxGroup>
                  </Styled.FilterCheckboxList>
                </Styled.FilterItem>
                <Styled.FilterItem>
                  <Styled.FilterTopHeader>
                    <strong>가격</strong>
                  </Styled.FilterTopHeader>
                  <MultiRangeSlider list={list} />
                </Styled.FilterItem>
              </Styled.FilterList>
            </Styled.FilterTop>
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
  FilterTop: styled.div`
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  `,

  FilterList: styled.ul`
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  `,
  FilterItem: styled.li`
    display: flex;
    flex-direction: row;
    position: relative;
    border-top: 1px solid #ccc;
    overflow: hidden;

    padding-bottom: 30px;
    flex-direction: column;
    border-top: none;
    border-right: 1px solid #ccc;

    @media screen and (min-width: 767px) and (max-width: 1200px) {
      padding-left: 30px;
    }

    @media screen and (max-width: 767px) {
      padding: 30px 0;
      width: 100%;
      border: none;
      border-bottom: 1px solid #ccc;
      overflow: visible;
    }

    @media screen and (max-width: 767px) {
      padding-top: 0;
      border-top: none;
    }

    &:first-child {
      width: 330px;
      padding-right: 30px;
    }

    &:nth-child(2) {
      padding: 0 30px;
      width: 438px;
    }

    &:last-child {
      padding: 0 30px;
      width: 350px;
      border-right: none;
    }

    @media screen and (max-width: 767px) {
      &:first-child {
        padding-right: 0;
        width: 100%;
      }
    }
  `,
  FilterTopHeader: styled.p`
    padding-top: 40px;
    width: 100%;
    line-height: 22px;

    @media screen and (max-width: 767px) {
      padding-top: 0;
    }
  `,
  FilterCheckboxList: styled.div`
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    user-select: none;
    margin-right: 30px;
    outline: none;

    &:last-child {
      margin-right: 0;
    }
  `,
  CheckboxGroup: styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `,
  ElCheckboxLabel: styled.label`
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    user-select: none;
    margin-right: 30px;

    display: flex;
    flex-direction: row;

    margin-top: 16px;
    align-items: center;
    width: 33.33%;
    font-size: 0;
    white-space: nowrap;

    @media screen and (max-width: 767px) {
      margin-top: 20px;
      margin-right: 0;
    }

    @media screen and (min-width: 767px) and (max-width: 1200px) {
      width: 100%;
    }
  `,
  ElCheckbox: styled.input`
    width: 20px;
    height: 20px;
    border: 2px solid #767676;
  `,
  CheckboxText: styled.span`
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 16px;

    padding-left: 8px;
    position: relative;
    vertical-align: top;
    white-space: nowrap;
    font-family: 'HyundaiSansTextKR';
    font-size: 12px;
    letter-spacing: -0.4px;
    color: inherit;
    line-height: 18px;

    @media screen and (min-width: 767px) and (max-width: 1200px) {
      white-space: normal;
    }

    @media screen and (max-width: 767px) {
      font-family: 'HyundaiSansTextKR';
      font-size: 14px;
      letter-spacing: -0.4px;
      color: inherit;
      line-height: 1.3;
      color: #000;
    }
  `,
};
