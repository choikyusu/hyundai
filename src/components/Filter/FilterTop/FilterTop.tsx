import { styled } from 'styled-components';
import { MultiRangeSlider } from '../../common/MultiRangeSlider/MultiRangeSlider';
import { FilterItem } from './FilterItem/FilterItem';
import { FilterCheckboxList } from './FilterItem/FilterCheckboxList/FilterCheckboxList';
import { CAR_TYPE_LIST, ENGINE_TYPE_LIST, PRICE_LIST } from './data/data';
import { Dispatch, SetStateAction } from 'react';
import { CarFilterMap } from '../useFilter';

interface FilterBottomProps {
  minIndex: number;
  maxIndex: number;
  filterMap: CarFilterMap;
  setFilterMap: Dispatch<SetStateAction<CarFilterMap>>;
  onChangeInputRange: (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'Min' | 'Max',
  ) => void;
}

export const FilterTop = ({
  minIndex,
  maxIndex,
  filterMap,
  setFilterMap,
  onChangeInputRange,
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
            minIndex={minIndex}
            maxIndex={maxIndex}
            onChangeInputRange={onChangeInputRange}
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
