import {
  addCaroselAnimation,
  calcCaroselTransform,
} from '@/src/services/carousel.service';
import React, { JSXElementConstructor, ReactElement, useState } from 'react';
import { useElCarouselEvent } from './useElCarouselEvent';
import { useElCarouselEffect } from './useElCarouselEffect';

interface useElCarouselProps {
  type: ElCarouselType;
  isAutoSlide: boolean;
  children:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | readonly ReactElement<any, string | JSXElementConstructor<any>>[];
}

export const useElCarousel = ({
  type,
  isAutoSlide,
  children,
}: useElCarouselProps) => {
  const showControl = type === 'Main';

  const [width, setWidth] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlay, setIsPlay] = useState(() => isAutoSlide);
  const [el, setEl] = useState<HTMLDivElement | null>(null);
  const itemList: HTMLDivElement[] = [];

  const getRefWidth = (el: HTMLDivElement) => {
    setWidth(el?.offsetWidth || 0);
    setEl(el);
  };

  useElCarouselEffect(getUseElCarouselEffectProps());

  const { onClickArrow, onClickDot, onClickPlay } = useElCarouselEvent(
    getUseElCarouselEventProps(),
  );

  return {
    showControl,
    itemList,
    isPlay,
    selectedIndex,
    getRefWidth,
    onClickDot,
    onClickPlay,
    onClickArrow,
  };

  // inner function
  function getNextIndex() {
    return selectedIndex >= React.Children.count(children) - 1
      ? 0
      : selectedIndex + 1;
  }

  function getPrevIndex() {
    return selectedIndex <= 0
      ? React.Children.count(children) - 1
      : selectedIndex - 1;
  }

  function autoSlide() {
    const nextIndex = getNextIndex();
    onClickDot(nextIndex);
  }

  function onResize() {
    setWidth(el?.offsetWidth || 0);
  }

  function reCalcCaroselTransform(nextIndex: number) {
    itemList.forEach((item, itemIndex) => {
      calcCaroselTransform(
        React.Children.count(children),
        item,
        itemIndex,
        nextIndex,
        width,
      );
    });
  }

  function reAddCaroselAnimation(nextIndex: number) {
    itemList.forEach((item, itemIndex) => {
      addCaroselAnimation(item, itemIndex, nextIndex, selectedIndex);
    });
  }

  function getUseElCarouselEventProps() {
    return {
      setSelectedIndex,
      setIsPlay,
      reCalcCaroselTransform,
      reAddCaroselAnimation,
      getNextIndex,
      getPrevIndex,
    };
  }

  function getUseElCarouselEffectProps() {
    return {
      isPlay,
      isAutoSlide,
      onResize,
      el,
      reCalcCaroselTransform,
      selectedIndex,
      itemList,
      width,
      autoSlide,
    };
  }
};
