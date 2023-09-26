import { styled } from 'styled-components';
import { MultiRangeSlider } from '../../common/MultiRangeSlider/MultiRangeSlider';
import { FilterItem } from './FilterItem/FilterItem';
import { FilterCheckboxList } from './FilterItem/FilterCheckboxList/FilterCheckboxList';
import { CAR_TYPE_LIST, ENGINE_TYPE_LIST, PRICE_LIST } from './data/data';
import { Dispatch, SetStateAction } from 'react';

interface FilterBottomProps {
  minVal: number;
  maxVal: number;
  setMinVal: Dispatch<SetStateAction<number>>;
  setMaxVal: Dispatch<SetStateAction<number>>;
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

export const FilterTop = ({
  minVal,
  maxVal,
  setMinVal,
  setMaxVal,
  filterMap,
  setFilterMap,
}: FilterBottomProps) => {
  return (
    <Styled.FilterTop>
      <Styled.FilterList>
        <FilterItem type="차종">
          <FilterCheckboxList
            data={{ type: 'CarType', list: CAR_TYPE_LIST.data }}
            filterMap={filterMap}
            setFilterMap={setFilterMap}
          />
        </FilterItem>
        <FilterItem type="엔진">
          <FilterCheckboxList
            data={{ type: 'EngineType', list: ENGINE_TYPE_LIST.data }}
            filterMap={filterMap}
            setFilterMap={setFilterMap}
          />
        </FilterItem>
        <FilterItem type="가격">
          <MultiRangeSlider
            minVal={minVal}
            maxVal={maxVal}
            setMinVal={setMinVal}
            setMaxVal={setMaxVal}
            list={PRICE_LIST.map(price => `${price}만원`)}
          />
        </FilterItem>
      </Styled.FilterList>
    </Styled.FilterTop>
  );
};

const Styled = {
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
};
