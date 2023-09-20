import { styled } from 'styled-components';

interface CheckboxProps {
  name: string;
  type: string;
  index: number;
}

export const Checkbox = ({ name, type, index }: CheckboxProps) => {
  return (
    <Styled.ElCheckboxLabel htmlFor={`${type}${index}`}>
      <Styled.ElCheckbox id={`${type}${index}`} type="checkbox" />
      <Styled.CheckboxText>{name}</Styled.CheckboxText>
    </Styled.ElCheckboxLabel>
  );
};

const Styled = {
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
