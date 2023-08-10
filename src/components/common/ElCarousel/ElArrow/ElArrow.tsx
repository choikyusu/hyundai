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
  arrowStyle?: ArrowStyleType;
  childrenCount: number;
  onClickArrow: (direction: DirectionType) => void;
}

export const ElArrow = ({
  showArrow,
  arrowStyle,
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
      <Styled.ElArrow
        $isLeft
        $arrowStyle={arrowStyle}
        onClick={() => onClickArrow('Left')}
      >
        <AiOutlineLeft />
      </Styled.ElArrow>
      <Styled.ElArrow
        $isLeft={false}
        $arrowStyle={arrowStyle}
        onClick={() => onClickArrow('Right')}
      >
        <AiOutlineRight />
      </Styled.ElArrow>
    </>
  );
};

const Styled = {
  ElArrow: styled(CommonStyled.Button)<{
    $isLeft: boolean;
    $arrowStyle?: ArrowStyleType;
  }>`
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 50%;
    color: ${props => props.$arrowStyle?.color || '#fff'};
    position: absolute;
    top: 50%;
    z-index: 10;
    outline: none;

    height: ${props => props.$arrowStyle?.size || '36px'};
    width: ${props => props.$arrowStyle?.size || '36px'};
    border-radius: 0;
    background-color: ${props =>
      props.$arrowStyle?.background || 'rgba(31, 45, 61, 0.11)'};

    display: flex;
    align-items: center;
    justify-content: center;

    ${props => (props.$isLeft ? 'left : 0' : 'right : 0')};

    svg {
      width: ${props => props.$arrowStyle?.size || '18px'};
      height: ${props => props.$arrowStyle?.size || '18px'};
    }
  `,
};
