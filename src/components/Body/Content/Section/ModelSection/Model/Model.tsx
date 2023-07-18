import { CommonStyled } from '@/src/styles/CommonStyled';
import { styled } from 'styled-components';

interface ModelProps {
  model: ModelType;
}

export const Model = ({ model }: ModelProps) => {
  return (
    <Styled.Button>
      <Styled.Image src={model.imageUrl} alt={model.carName} />
      <Styled.TextWrap>
        <Styled.Text>
          <span>{model.text}</span>
          {model.carName}
        </Styled.Text>
      </Styled.TextWrap>
    </Styled.Button>
  );
};

const Styled = {
  Button: styled(CommonStyled.Button)`
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 100%;
    padding: 0 20px;
  `,
  Image: styled.img`
    width: 100% !important;
    height: 100%;
  `,
  TextWrap: styled.div`
    position: static !important;
    margin: 20px auto 0 !important;
    width: 100%;
    text-align: left;
  `,
  Text: styled.div`
    font-size: 20px !important;
    line-height: 1 !important;

    font-family: 'HyundaiSansHeadKR';
    font-size: 18px;
    letter-spacing: -0.24px;
    color: #000;
    line-height: 30px;
  `,
};
