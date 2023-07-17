import {
  addCaroselAnimation,
  calcCaroselTransform,
} from '@/src/services/carousel.service';
import React, { useEffect, useState } from 'react';

interface useElCarouselProps {
  isAutoSlide: boolean;
  children: React.ReactNode;
}

export const useElCarousel = ({
  isAutoSlide,
  children,
}: useElCarouselProps) => {
  const [width, setWidth] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlay, setIsPlay] = useState(() => isAutoSlide);
  const itemList: HTMLDivElement[] = [];

  const onClickDot = (index: number) => {
    setSelectedIndex(index);

    itemList.forEach((item, itemIndex) => {
      addCaroselAnimation(item, itemIndex, index, selectedIndex);
      calcCaroselTransform(
        React.Children.count(children),
        item,
        itemIndex,
        index,
        width,
      );
    });
  };

  const onClickPlay = () => setIsPlay(prev => !prev);
  const getRefWidth = (el: HTMLDivElement) => setWidth(el?.offsetWidth || 0);

  useEffect(() => {
    if (!isAutoSlide || !isPlay)
      return () => {
        //
      };

    const interval = setInterval(() => {
      const nextIndex = getNextIndex();
      onClickDot(nextIndex);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [itemList, selectedIndex, isPlay]);

  useEffect(() => {
    itemList.forEach((item, itemIndex) => {
      calcCaroselTransform(
        React.Children.count(children),
        item,
        itemIndex,
        selectedIndex,
        width,
      );
    });
  }, [width]);

  return {
    itemList,
    isPlay,
    selectedIndex,
    getRefWidth,
    onClickDot,
    onClickPlay,
  };

  function getNextIndex() {
    return selectedIndex >= React.Children.count(children) - 1
      ? 0
      : selectedIndex + 1;
  }
};
