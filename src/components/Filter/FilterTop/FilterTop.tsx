import { styled } from 'styled-components';
import { MultiRangeSlider } from '../../common/MultiRangeSlider/MultiRangeSlider';
import { FilterItem } from './FilterItem/FilterItem';
import { FilterCheckboxList } from './FilterItem/FilterCheckboxList/FilterCheckboxList';
import { CAR_TYPE_LIST, ENGINE_TYPE_LIST, PRICE_LIST } from './data/data';

export const FilterTop = () => {
  return (
    <Styled.FilterTop>
      <Styled.FilterList>
        <FilterItem type={CAR_TYPE_LIST.title}>
          <FilterCheckboxList
            type={CAR_TYPE_LIST.type}
            list={CAR_TYPE_LIST.list}
          />
        </FilterItem>
        <FilterItem type={ENGINE_TYPE_LIST.title}>
          <FilterCheckboxList
            type={ENGINE_TYPE_LIST.type}
            list={ENGINE_TYPE_LIST.list}
          />
        </FilterItem>

        <FilterItem type="가격">
          <MultiRangeSlider list={PRICE_LIST} />
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
