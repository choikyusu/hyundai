import { styled } from 'styled-components';
import { useDim } from './useDim';

export const Dim = () => {
  const { showDim } = useDim();

  return <Style.Dim $isShow={showDim()} />;
};

const Style = {
  Dim: styled.div<{ $isShow: boolean }>`
    display: ${props => (props.$isShow ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 996;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    content: '';
  `,
};
