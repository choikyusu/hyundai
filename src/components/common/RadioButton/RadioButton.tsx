import { styled } from 'styled-components';

interface RadioButtonProps {
  radioText: string;
  radioId: string;
  onClick: () => void;
}

export const RadioButton = ({
  radioText,
  radioId,
  onClick,
}: RadioButtonProps) => {
  return (
    <Styled.RadioArea onClick={onClick}>
      <Styled.Radio type="radio" id={radioId} name="type" />
      <Styled.RadioLabel htmlFor={radioId}>{radioText}</Styled.RadioLabel>
    </Styled.RadioArea>
  );
};

const Styled = {
  RadioArea: styled.div`
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;

    @media screen and (max-width: 1024px) and (min-width: 768px) {
      margin-right: 15px;
    }

    @media screen and (min-width: 768px) {
      flex: 1 1;
      text-align: left;
      margin-right: 0;
    }
  `,
  Radio: styled.input`
    width: 15px;
    height: 15px;
  `,
  RadioLabel: styled.label`
    font-family: 'HyundaiSansTextKR' !important;
    font-size: 16px !important;
    letter-spacing: -0.4px;
    color: inherit;
    line-height: 100%;
    padding-left: 10px !important;

    @media screen and (max-width: 1024px) and (min-width: 768px) {
      padding-left: 4px !important;
      font-size: 14px !important;
    }

    @media screen and (min-width: 768px) {
      font-family: 'HyundaiSansHeadKRR' !important;
      color: #000 !important;
    }
  `,
};
