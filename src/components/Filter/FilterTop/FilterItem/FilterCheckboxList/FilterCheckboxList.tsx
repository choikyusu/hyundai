import { Checkbox } from '@/src/components/common/Checkbox/Checkbox';
import { Dispatch, SetStateAction } from 'react';
import { styled } from 'styled-components';

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
  filterMap: Map<string, { checked: boolean; name: string }>;
  setFilterMap: Dispatch<
    SetStateAction<Map<string, { checked: boolean; name: string }>>
  >;
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
          data.list.map(item => (
            <Checkbox
              type={item.carTypeCode}
              name={item.carTypeName}
              checked={!!filterMap.get(item.carTypeCode)?.checked}
              onChange={() => {
                filterMap.set(item.carTypeCode, {
                  checked: !filterMap.get(item.carTypeCode)?.checked,
                  name: item.carTypeName,
                });
                setFilterMap(new Map(filterMap));
              }}
            />
          ))}
        {data.type === 'EngineType' &&
          data.list.map(item => (
            <Checkbox
              type={item.carEnginCode}
              name={item.carEnginName}
              checked={!!filterMap.get(item.carEnginCode)?.checked}
              onChange={() => {
                filterMap.set(item.carEnginCode, {
                  checked: !filterMap.get(item.carEnginCode)?.checked,
                  name: item.carEnginName,
                });
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
  `,
};
