import { Checkbox } from '@/src/components/common/Checkbox/Checkbox';
import { styled } from 'styled-components';

interface FilterCheckboxListProps {
  type: string;
  list: {
    name: string;
  }[];
}

export const FilterCheckboxList = ({ type, list }: FilterCheckboxListProps) => {
  return (
    <Styled.FilterCheckboxList>
      <Styled.CheckboxGroup>
        {list.map((carType, index) => (
          <Checkbox type={type} index={index} name={carType.name} />
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
