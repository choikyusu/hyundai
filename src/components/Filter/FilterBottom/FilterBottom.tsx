import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';
import { CommonStyled } from '@/src/styles/CommonStyled';
import { styled } from 'styled-components';
import { Checkbox } from '../../common/Checkbox/Checkbox';
import { checkboxDataList } from './data/data';

export const FilterBottom = () => {
  return (
    <Styled.FilterBottom>
      <ul>
        {checkboxDataList.data.map(data => (
          <Styled.FilterItem>
            <Styled.FilterTitle>
              <Styled.FilterTitleStrong>{`${data.specTypeName}(${data.count})`}</Styled.FilterTitleStrong>
            </Styled.FilterTitle>
            <Styled.FilterButtonWrap>
              <Styled.FilterButton>
                <HiOutlineChevronDown />
              </Styled.FilterButton>
            </Styled.FilterButtonWrap>
            <Styled.CheckboxWrapper>
              {data.specCategorys.map((category, index) => (
                <Styled.FilterCheckbox>
                  <Checkbox
                    index={index}
                    type={category.specCategoryCode}
                    name={category.specCategoryName}
                  />
                </Styled.FilterCheckbox>
              ))}
            </Styled.CheckboxWrapper>
          </Styled.FilterItem>
        ))}
      </ul>
    </Styled.FilterBottom>
  );
};

const Styled = {
  FilterBottom: styled.div`
    border-bottom: 1px solid #ccc;
  `,
  FilterItem: styled.li`
    display: flex;
    flex-direction: row;
    position: relative;
    border-top: 1px solid #ccc;
    overflow: hidden;

    @media screen and (max-width: 767px) {
      &:first-child {
        padding-top: 0;
        border-top: none;
      }
    }
    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  `,
  FilterTitle: styled.p`
    padding: 20px 0;
    width: 15%;

    @media screen and (min-width: 767px) and (max-width: 1200px) {
      padding-left: 15px;
      width: 20%;
    }

    @media screen and (max-width: 767px) {
      width: 100%;
      padding-top: 30px;
      padding-bottom: 0;
    }
  `,
  FilterTitleStrong: styled.strong`
    font-family: 'HyundaiSansHeadKR';
    font-size: 16px;
    letter-spacing: -0.4px;
    color: inherit;
    line-height: 100%;
  `,
  FilterButtonWrap: styled.div`
    position: absolute;
    right: 30px;
    top: 13px;
    width: 30px;
    height: 30px;

    @media screen and (min-width: 767px) and (max-width: 1200px) {
      right: 15px;
    }

    @media screen and (max-width: 767px) {
      position: absolute;
      right: 0;
      top: 23px;
      transform: none;
    }
  `,
  FilterButton: styled(CommonStyled.Button)`
    width: 30px;
    height: 30px;
    position: absolute;
    right: 0;
    top: 0;
  `,
  CheckboxWrapper: styled.div`
    position: relative;
    width: 80%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    @media screen and (min-width: 767px) and (max-width: 1200px) {
      width: calc(80% - 45px);
    }

    @media screen and (max-width: 767px) {
      width: 100%;
    }

    height: 60px;
  `,
  FilterCheckbox: styled.div`
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    user-select: none;
    margin-right: 30px;
    outline: none;

    margin: 0 !important;

    padding: 4px 0 20px 0;

    width: 25%;

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      width: 33.332%;
    }

    @media screen and (max-width: 767px) {
      width: 50% !important;
    }
  `,
};
