import { CSSProp, css, styled } from 'styled-components';
import { ElCarouselItem } from './ElCarouselItem/ElCarouselItem';
import React, { useEffect, useState } from 'react';
import { Indicator } from './Indicator/Indicator';

interface ElCarouselProps {
  type: ElCarouselType;
  children: React.ReactNode;
}

export const ElCarousel = ({ type, children }: ElCarouselProps) => {
  const [width, setWidth] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const itemList: HTMLDivElement[] = [];

  const onClickDot = (index: number) => {
    setSelectedIndex(index);

    itemList.forEach((item, itemIndex) => {
      if (index === itemIndex || itemIndex === selectedIndex) {
        item.style.transition = 'transform 0.3s ease-in-out';
      } else {
        item.style.transition = '';
      }

      if (itemIndex === 0 && index === itemList.length - 1)
        item.style.transform = `translateX(${width}px) scale(1)`;
      else if (itemIndex === itemList.length - 1 && index === 0)
        item.style.transform = `translateX(${-width}px) scale(1)`;
      else {
        item.style.transform = `translateX(${
          (itemIndex - index) * width
        }px) scale(1)`;
      }
    });
  };

  useEffect(() => {
    itemList.forEach((item, itemIndex) => {
      if (
        itemList.length > 1 &&
        itemIndex === 0 &&
        selectedIndex === itemList.length - 1
      )
        item.style.transform = `translateX(${width}px) scale(1)`;
      else if (
        itemList.length > 1 &&
        itemIndex === itemList.length - 1 &&
        selectedIndex === 0
      )
        item.style.transform = `translateX(${-width}px) scale(1)`;
      else {
        item.style.transform = `translateX(${
          (itemIndex - selectedIndex) * width
        }px) scale(1)`;
      }
    });
  }, [width]);

  const childComponent = React.Children.map(children, child => (
    <ElCarouselItem type={type} itemList={itemList}>
      {child}
    </ElCarouselItem>
  ));

  return (
    <Styled.ElCarousel $variant={VARIANT_STYLE.ElCarousel[type]}>
      <Styled.ElCarouselContainer
        $variant={VARIANT_STYLE.ElCarouselContainer[type]}
        ref={(el: any) => setWidth(el?.offsetWidth || 0)}
      >
        <Styled.ElCarouselLayer>{childComponent}</Styled.ElCarouselLayer>
      </Styled.ElCarouselContainer>
      <Indicator
        type={type}
        childrenCount={React.Children.count(children)}
        onClickDot={onClickDot}
        selectedIndex={selectedIndex}
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
  },
  ElCarouselContainer: {
    Main: css`
      overflow: visible;
      height: 162.5vw !important;
    `,
    GnbEvent: css`
      height: calc(23.64vw + 40px) !important;
      padding-bottom: 40px;
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
