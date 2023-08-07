import { CSSProp, css, styled } from 'styled-components';
import { ElCarouselItem } from './ElCarouselItem/ElCarouselItem';
import React from 'react';
import { Indicator } from './Indicator/Indicator';
import { useElCarousel } from './hooks/useElCarousel';
import { ElArrow } from './ElArrow/ElArrow';

interface ElCarouselProps {
  type: ElCarouselType;
  config?: ElCarouselConfigType;
  children: ChildrenType | readonly ChildrenType[];
}

export const ElCarousel = React.memo(
  ({ type, config, children }: ElCarouselProps) => {
    const {
      showControl,
      selectedIndex,
      itemList,
      isPlay,
      getGridRowCount,
      getRefWidth,
      getPageCount,
      onClickDot,
      onClickPlay,
      onClickArrow,
      splitChildrenIntoChunks,
    } = useElCarousel({
      type,
      config,
      children,
    });

    const childrenWithWrap = () => {
      const chunks: ChildrenType[][] = splitChildrenIntoChunks();
      return chunks.map((arr, index) => (
        <ElCarouselItem
          key={index}
          type={type}
          itemList={itemList}
          rowCount={getGridRowCount()}
        >
          {arr}
        </ElCarouselItem>
      ));
    };

    return (
      <Styled.ElCarousel $variant={VARIANT_STYLE.ElCarousel[type]}>
        <Styled.ElCarouselContainer
          $variant={VARIANT_STYLE.ElCarouselContainer[type]}
          ref={getRefWidth}
        >
          <Styled.ElCarouselLayer>
            {childrenWithWrap()}
            <ElArrow
              childrenCount={getPageCount()}
              isShow={config?.showArrow || false}
              onClickArrow={onClickArrow}
            />
          </Styled.ElCarouselLayer>
        </Styled.ElCarouselContainer>
        <Indicator
          type={type}
          childrenCount={getPageCount()}
          onClickDot={onClickDot}
          selectedIndex={selectedIndex}
          isPlay={isPlay}
          onClickPlay={onClickPlay}
          showControl={showControl}
        />
      </Styled.ElCarousel>
    );
  },
);

const VARIANT_STYLE = {
  ElCarousel: {
    Main: css`
      width: 100%;
      margin: 0 auto;
      @media screen and (max-width: 767px) {
        height: 162.5vw !important;
      }

      @media screen and (max-width: 1024px) {
        height: 640px !important;
      }
    `,
    GnbEvent: css``,
    ModelSection: css`
      width: 100%;
      margin: 0 auto;
    `,
    Brand: css`
      width: 100%;
      margin: 0 auto;
    `,
    Events: css`
      width: 100%;
      margin: 0 auto;
    `,
    CarList: css`
      width: 100%;
      margin: 0 auto;
      height: 100%;
    `,
  },
  ElCarouselContainer: {
    Main: css`
      overflow: visible;
      @media screen and (max-width: 767px) {
        height: 162.5vw !important;
      }

      @media screen and (max-width: 1024px) {
        height: 640px !important;
      }
    `,
    GnbEvent: css`
      height: calc(23.64vw + 40px) !important;
    `,
    ModelSection: css`
      height: calc(80vw + 44px) !important;
    `,
    Brand: css`
      height: calc(110vw + 44px) !important;
    `,
    Events: css`
      height: calc(90vw + 44px) !important;
    `,
    CarList: css`
      height: 100%;
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
    position: relative;
    width: 100%;
    height: 100%;
  `,
};
