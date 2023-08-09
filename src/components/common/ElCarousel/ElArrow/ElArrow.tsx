import { useViewportSize } from '@/src/hooks/useViewportSize';
import { CommonStyled } from '@/src/styles/CommonStyled';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { styled } from 'styled-components';

interface ElArrowProps {
  showArrow?: {
    small: boolean;
    medium: boolean;
    large: boolean;
  };
  childrenCount: number;
  onClickArrow: (direction: DirectionType) => void;
}

export const ElArrow = ({
  showArrow,
  childrenCount,
  onClickArrow,
}: ElArrowProps) => {
  const { viewportSize } = useViewportSize();

  if (!showArrow || childrenCount === 1) return null;
  if (
    (viewportSize === 'Large' && !showArrow.large) ||
    (viewportSize === 'Medium' && !showArrow.medium) ||
    (viewportSize === 'Small' && !showArrow.small)
  )
    return null;

  return (
    <>
      <Styled.ElArrow $isLeft onClick={() => onClickArrow('Left')}>
        <AiOutlineLeft />
      </Styled.ElArrow>
      <Styled.ElArrow $isLeft={false} onClick={() => onClickArrow('Right')}>
        <AiOutlineRight />
      </Styled.ElArrow>
    </>
  );
};

const Styled = {
  ElArrow: styled(CommonStyled.Button)<{ $isLeft: boolean }>`
    border: none;
    padding: 0;
    margin: 0;
    height: 36px;
    width: 36px;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 50%;
    background-color: rgba(31, 45, 61, 0.11);
    color: #fff;
    position: absolute;
    top: 50%;
    z-index: 10;
    outline: none;

    width: 44px;
    height: 44px;
    border-radius: 0;
    background-color: rgba(31, 45, 61, 0.4);

    display: flex;
    align-items: center;
    justify-content: center;

    ${props => (props.$isLeft ? 'left : 0' : 'right : 0')};

    svg {
      width: 18px;
      height: 18px;
    }
  `,
};
