import { CSSProp, css, styled } from 'styled-components';

interface CheckboxProps {
  name: string;
  id: string;
  checked: boolean;
  type: 'small' | 'medium';
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Checkbox = ({
  name,
  id,
  checked,
  onChange,
  type,
}: CheckboxProps) => {
  return (
    <Styled.ElCheckboxLabel htmlFor={id}>
      <Styled.ElCheckbox
        id={id}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        $size={SIZE[type]}
      />
      <Styled.CheckboxText $fontSize={FONT_SIZE[type]}>
        {name}
      </Styled.CheckboxText>
    </Styled.ElCheckboxLabel>
  );
};

const SIZE = {
  small: css`
    width: 20px;
    height: 20px;
  `,
  medium: css`
    width: 24px;
    height: 24px;

    @media screen and (max-width: 767px) {
      width: 15px;
      height: 15px;
    }
  `,
};

const FONT_SIZE = {
  small: css`
    font-size: 14px;
  `,
  medium: css`
    font-size: 24px;

    @media screen and (max-width: 767px) {
      font-size: 14px;
    }
  `,
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

    align-items: center;
    width: 33.33%;
    font-size: 0;
    white-space: nowrap;

    @media screen and (max-width: 767px) {
      margin-right: 0;
    }

    @media screen and (min-width: 767px) and (max-width: 1200px) {
      width: 100%;
    }
  `,
  ElCheckbox: styled.input<{ $size: CSSProp }>`
    border: 3px solid #c5d1dd;
    ${props => props.$size}
  `,
  CheckboxText: styled.span<{ $fontSize: CSSProp }>`
    ${props => props.$fontSize}
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;

    padding-left: 8px;
    position: relative;
    vertical-align: top;
    white-space: nowrap;
    font-family: 'HyundaiSansTextKR';
    letter-spacing: -0.4px;
    color: inherit;
    line-height: 18px;

    @media screen and (min-width: 767px) and (max-width: 1200px) {
      white-space: normal;
    }

    @media screen and (max-width: 767px) {
      font-family: 'HyundaiSansTextKR';
      letter-spacing: -0.4px;
      color: inherit;
      line-height: 1.3;
      color: #000;
    }
  `,
};
