import { CommonStyled } from '@/src/styles/CommonStyled';
import { CSSProp, css, styled } from 'styled-components';
import { Control } from './Control/Contron';

interface IndicatorProps {
  type: ElCarouselType;
  childrenCount: number;
  selectedIndex: number;
  onClickDot: (index: number) => void;
  onClickPlay: () => void;
  isPlay: boolean;
  showControl: boolean;
}

export const Indicator = ({
  type,
  childrenCount,
  selectedIndex,
  onClickDot,
  isPlay,
  onClickPlay,
  showControl,
}: IndicatorProps) => {
  if (childrenCount === 1) return null;
  return (
    <Styled.ElCarouselIndicatorList
      $variant={VARIANT_STYLE.ElCarouselIndicatorList[type]}
    >
      {Array.from({ length: childrenCount }).map((_, index) => (
        <Styled.ElCarouselIndicator
          key={index}
          onClick={() => onClickDot(index)}
        >
          <Styled.ElCarouselButton
            $variant={VARIANT_STYLE.ElCarouselButton[type]}
            $isSelected={selectedIndex === index}
          >
            ${index + 1}번째 슬라이드
          </Styled.ElCarouselButton>
        </Styled.ElCarouselIndicator>
      ))}
      <Control
        isPlay={isPlay}
        onClickPlay={onClickPlay}
        showControl={showControl}
      />
    </Styled.ElCarouselIndicatorList>
  );
};

const VARIANT_STYLE = {
  ElCarouselIndicatorList: {
    Main: css`
      bottom: 180px;

      @media screen and (max-width: 767px) {
        position: absolute;
        top: auto;
        bottom: 203px !important;
      }

      @media screen and (min-width: 768px) and (max-width: 1024px) {
        bottom: 140px !important;
      }
    `,
    GnbEvent: css`
      bottom: 4px;
    `,
    ModelSection: css`
      bottom: 0px !important;
    `,
    Brand: css`
      bottom: 0px !important;
    `,
    Events: css`
      bottom: 0px !important;
    `,
    CarList: css`
      display: none;
    `,
    QuickMenu: css``,
  },
  ElCarouselButton: {
    Main: css``,
    GnbEvent: css`
      width: 8px;
      height: 8px;
    `,
    ModelSection: css``,
    Brand: css``,
    Events: css``,
    CarList: css``,

    QuickMenu: css``,
  },
};

const Styled = {
  ElCarouselIndicatorList: styled.ul<{ $variant: CSSProp }>`
    position: absolute;
    list-style: none;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    padding: 0;
    z-index: 6;

    margin: 0;

    display: flex;
    align-items: center;

    ${props => props.$variant}
  `,
  ElCarouselIndicator: styled.li`
    display: inline-block;
    background-color: transparent;
    padding: 12px 4px;
    cursor: pointer;

    margin-right: 4px;
  `,
  ElCarouselButton: styled(CommonStyled.Button)<{
    $isSelected: boolean;
    $variant: CSSProp;
  }>`
    display: block;
    opacity: 0.48;
    width: 30px;
    height: 2px;
    background-color: #fff;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    outline: none;

    width: 12px;
    height: 12px;
    border-radius: 6px;
    background-color: ${props =>
      props.$isSelected ? '#007fa8' : 'rgba(0, 0, 0, 0.1)'};
    color: transparent;
    opacity: 1;
    font-size: 0;
    overflow: hidden;

    opacity: 1;

    ${props => props.$variant}
  `,
};
