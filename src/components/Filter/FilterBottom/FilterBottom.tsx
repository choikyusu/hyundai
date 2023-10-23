import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';
import { CommonStyled } from '@/src/styles/CommonStyled';
import { styled } from 'styled-components';
import { Checkbox } from '../../common/Checkbox/Checkbox';
import { checkboxDataList } from './data/data';
import { Dispatch, SetStateAction, useState } from 'react';

interface FilterBottomProps {
  filterMap: Map<
    string,
    {
      code: string;
      name: string;
    }[]
  >;
  setFilterMap: Dispatch<
    SetStateAction<
      Map<
        string,
        {
          code: string;
          name: string;
        }[]
      >
    >
  >;
}

export const FilterBottom = ({
  filterMap,
  setFilterMap,
}: FilterBottomProps) => {
  const [isOpen, setOpen] = useState<{ [key: string]: boolean }>({});

  return (
    <Styled.FilterBottom>
      <ul>
        {checkboxDataList.data.map((data, index) => (
          <Styled.FilterItem key={index}>
            <Styled.FilterTitle>
              <Styled.FilterTitleStrong>{`${data.specTypeName}(${data.count})`}</Styled.FilterTitleStrong>
            </Styled.FilterTitle>
            <Styled.FilterButtonWrap>
              <Styled.FilterButton
                onClick={() =>
                  setOpen(prev => ({
                    ...prev,
                    [data.specTypeCode]: !prev[data.specTypeCode],
                  }))
                }
              >
                {isOpen[data.specTypeCode] ? (
                  <HiOutlineChevronUp />
                ) : (
                  <HiOutlineChevronDown />
                )}
              </Styled.FilterButton>
            </Styled.FilterButtonWrap>
            <Styled.CheckboxWrapper $isOpen={isOpen[data.specTypeCode]}>
              {data.specCategorys.map((category, index) => (
                <Styled.FilterCheckbox key={index}>
                  <Checkbox
                    id={category.specCategoryCode}
                    name={category.specCategoryName}
                    type="small"
                    checked={
                      !!filterMap
                        .get(data.specTypeCode)
                        ?.find(
                          value => value.code === category.specCategoryCode,
                        )
                    }
                    onChange={() => {
                      let list = filterMap.get(data.specTypeCode) || [];

                      const index = list.findIndex(
                        value => value.code === category.specCategoryCode,
                      );

                      if (index !== -1)
                        list = list
                          .slice(0, index)
                          .concat(list.slice(index + 1));
                      else
                        list.push({
                          code: category.specCategoryCode,
                          name: category.specCategoryName,
                        });

                      filterMap.set(data.specTypeCode, list);

                      setFilterMap(new Map(filterMap));
                    }}
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
  CheckboxWrapper: styled.div<{ $isOpen: boolean }>`
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

    ${props => (props.$isOpen ? '' : 'height: 60px;')}
  `,
  FilterCheckbox: styled.div`
    display: flex;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    white-space: nowrap;
    user-select: none;
    margin-right: 30px;
    outline: none;

    margin: 0 !important;

    min-height: 60px;

    width: 25%;

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      width: 33.332%;
    }

    @media screen and (max-width: 767px) {
      width: 50% !important;
    }
  `,
};
