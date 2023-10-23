import { Checkbox } from '@/src/components/common/Checkbox/Checkbox';
import { Dispatch, SetStateAction } from 'react';
import { styled } from 'styled-components';
import { CarFilterMap } from '../../../useFilter';

interface FilterCheckboxListProps {
  data:
    | {
        type: 'CarType';
        list: {
          carTypeCode: string;
          carTypeName: string;
          carTypeOrder: string;
          carTypeCount: string;
          carPurposes: {
            carPurposeCode: string;
            carPurposeName: string;
          }[];
        }[];
      }
    | {
        type: 'EngineType';
        list: {
          carEnginCode: string;
          carEnginName: string;
          carPurposeCode: null;
          carEnginEnableYn: null;
          displayCarYn: null;
          discountInventoryCaryn: null;
        }[];
      };
  filterMap: CarFilterMap;
  setFilterMap: Dispatch<SetStateAction<CarFilterMap>>;
}

export const FilterCheckboxList = ({
  data,
  filterMap,
  setFilterMap,
}: FilterCheckboxListProps) => {
  return (
    <Styled.FilterCheckboxList>
      <Styled.CheckboxGroup>
        {data.type === 'CarType' &&
          data.list.map((item, index) => (
            <Checkbox
              key={index}
              id={item.carTypeCode}
              name={item.carTypeName}
              type="small"
              checked={
                !!filterMap
                  .get(data.type)
                  ?.find(value => value.code === item.carTypeCode)
              }
              onChange={() => {
                let list = filterMap.get(data.type) || [];

                const index = list.findIndex(
                  value => value.code === item.carTypeCode,
                );

                if (index !== -1)
                  list = list.slice(0, index).concat(list.slice(index + 1));
                else
                  list.push({ code: item.carTypeCode, name: item.carTypeName });

                filterMap.set(data.type, list);

                setFilterMap(new Map(filterMap));
              }}
            />
          ))}
        {data.type === 'EngineType' &&
          data.list.map((item, index) => (
            <Checkbox
              key={index}
              id={item.carEnginCode}
              name={item.carEnginName}
              type="small"
              checked={
                !!filterMap
                  .get(data.type)
                  ?.find(value => value.code === item.carEnginCode)
              }
              onChange={() => {
                let list = filterMap.get(data.type) || [];

                const index = list.findIndex(
                  value => value.code === item.carEnginCode,
                );

                if (index !== -1)
                  list = list.slice(0, index).concat(list.slice(index + 1));
                else
                  list.push({
                    code: item.carEnginCode,
                    name: item.carEnginName,
                  });

                filterMap.set(data.type, list);

                setFilterMap(new Map(filterMap));
              }}
            />
          ))}
      </Styled.CheckboxGroup>
    </Styled.FilterCheckboxList>
  );
};

const Styled = {
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
    row-gap: 16px;
  `,
};
