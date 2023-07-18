import { CSSProp, css, styled } from 'styled-components';
import { ElCarouselItem } from './ElCarouselItem/ElCarouselItem';
import React, {
  JSXElementConstructor,
  ReactElement,
  cloneElement,
} from 'react';
import { Indicator } from './Indicator/Indicator';

import { useElCarousel } from './useElCarousel';

interface ElCarouselProps {
  type: ElCarouselType;
  isAutoSlide: boolean;
  children:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | readonly ReactElement<any, string | JSXElementConstructor<any>>[];
}

export const ElCarousel = ({
  type,
  isAutoSlide,
  children,
}: ElCarouselProps) => {
  const {
    showControl,
    selectedIndex,
    itemList,
    onClickDot,
    getRefWidth,
    isPlay,
    onClickPlay,
  } = useElCarousel({
    type,
    isAutoSlide,
    children,
  });

  const childrenWithWrap = React.Children.map(children, (child, index) => (
    <ElCarouselItem key={index} type={type} itemList={itemList}>
      {cloneElement(child, {
        selected: index === selectedIndex,
      })}
    </ElCarouselItem>
  ));

  return (
    <Styled.ElCarousel $variant={VARIANT_STYLE.ElCarousel[type]}>
      <Styled.ElCarouselContainer
        $variant={VARIANT_STYLE.ElCarouselContainer[type]}
        ref={getRefWidth}
      >
        <Styled.ElCarouselLayer>{childrenWithWrap}</Styled.ElCarouselLayer>
      </Styled.ElCarouselContainer>
      <Indicator
        type={type}
        childrenCount={React.Children.count(children)}
        onClickDot={onClickDot}
        selectedIndex={selectedIndex}
        isPlay={isPlay}
        onClickPlay={onClickPlay}
        showControl={showControl}
      />
    </Styled.ElCarousel>
  );
};

const VARIANT_STYLE = {
  ElCarousel: {
    Main: css`
      width: 100%;
      margin: 0 auto;
      height: 162.5vw;
    `,
    GnbEvent: css``,
    ModelSection: css`
      width: 100%;
      margin: 0 auto;
    `,
  },
  ElCarouselContainer: {
    Main: css`
      overflow: visible;
      height: 162.5vw !important;
    `,
    GnbEvent: css`
      height: calc(23.64vw + 40px) !important;
    `,
    ModelSection: css`
      height: calc(80vw + 44px) !important;
    `,
  },
};

const Styled = {
  ElCarousel: styled.div<{ $variant: CSSProp }>`
    overflow-x: hidden;
    position: relative;

    ${props => props.$variant}
  `,
  ElCarouselContainer: styled.div<{ $variant: CSSProp }>`
    position: relative;

    ${props => props.$variant}
  `,
  ElCarouselLayer: styled.div`
    width: 100%;
    height: 100%;
  `,
};
