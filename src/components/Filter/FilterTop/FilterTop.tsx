import { styled } from 'styled-components';
import { MultiRangeSlider } from '../../common/MultiRangeSlider/MultiRangeSlider';
import { FilterItem } from './FilterItem/FilterItem';
import { FilterCheckboxList } from './FilterItem/FilterCheckboxList/FilterCheckboxList';

export const FilterTop = () => {
  const list = Array.from({ length: 15 }, (v, i) => `${(i + 3) * 500}만원`);

  const CAR_TYPE_LIST = {
    type: 'CarTypeList',
    title: '차종',
    list: [
      {
        name: '수소/전기차',
      },
      {
        name: 'N',
      },
      {
        name: '승용',
      },
      {
        name: 'SUV',
      },
      {
        name: 'MPV',
      },
      {
        name: '소형트럭&택시',
      },
    ],
  };

  const ENGINE_TYPE_LIST = {
    type: 'EngineTypeList',
    title: '엔진',
    list: [
      {
        name: '디젤',
      },
      {
        name: '전기',
      },
      {
        name: '가솔린',
      },
      {
        name: '하이브리드',
      },
      {
        name: '수소',
      },
      {
        name: 'LPG',
      },
    ],
  };

  return (
    <Styled.FilterTop>
      <Styled.FilterList>
        <FilterItem type={CAR_TYPE_LIST.type}>
          <FilterCheckboxList
            type={CAR_TYPE_LIST.type}
            list={CAR_TYPE_LIST.list}
          />
        </FilterItem>
        <FilterItem type={ENGINE_TYPE_LIST.type}>
          <FilterCheckboxList
            type={ENGINE_TYPE_LIST.type}
            list={ENGINE_TYPE_LIST.list}
          />
        </FilterItem>

        <FilterItem type="가격">
          <MultiRangeSlider list={list} />
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
