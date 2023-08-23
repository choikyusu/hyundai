import {
  addCaroselAnimation,
  calcCaroselTransform,
} from '@/src/services/carousel.service';
import React, {
  JSXElementConstructor,
  ReactElement,
  cloneElement,
  useState,
} from 'react';
import { useElCarouselEvent } from './useElCarouselEvent';
import { useElCarouselEffect } from './useElCarouselEffect';
import { useViewportSize } from '@/src/hooks/useViewportSize';

interface useElCarouselProps {
  type: ElCarouselType;
  config?: ElCarouselConfigType;
  children:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | readonly ReactElement<any, string | JSXElementConstructor<any>>[];
}

export const useElCarousel = ({
  type,
  config,
  children,
}: useElCarouselProps) => {
  const showControl = type === 'Main';

  const [width, setWidth] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlay, setIsPlay] = useState(() => config?.autoSlide || false);
  const [el, setEl] = useState<HTMLDivElement | null>(null);
  const itemList: HTMLDivElement[] = [];

  const { viewportSize } = useViewportSize();
  useElCarouselEffect(getUseElCarouselEffectProps());

  const { onClickArrow, onClickDot, onClickPlay } = useElCarouselEvent(
    getUseElCarouselEventProps(),
  );

  const getRefWidth = (el: HTMLDivElement) => {
    setWidth(el?.offsetWidth || 0);
    setEl(el);
  };

  const splitChildrenIntoChunks = () => {
    const childrenArray = React.Children.toArray(children) as ChildrenType[];

    return childrenArray.reduce((result: ChildrenType[][], current, index) => {
      const chunkIndex = Math.floor(index / getContentCountBySilde());

      if (!result[chunkIndex]) result[chunkIndex] = [];

      const newElement = cloneElement(current, {
        selected: isSelected(index),
      });

      result[chunkIndex].push(newElement);
      return result;
    }, []);
  };

  const getPageCount = () => {
    return Math.floor(
      React.Children.count(children) / getContentCountBySilde(),
    );
  };

  return {
    showControl,
    itemList,
    isPlay,
    selectedIndex,
    getRefWidth,
    getPageCount,
    onClickDot,
    onClickPlay,
    onClickArrow,
    splitChildrenIntoChunks,
  };

  function getContentCountBySilde() {
    switch (viewportSize) {
      case 'Small':
        return config?.contentCountBySlide?.small.total || 1;
      case 'Medium':
        return config?.contentCountBySlide?.medium.total || 1;
      case 'Large':
        return config?.contentCountBySlide?.large.total || 1;
      default:
        return 1;
    }
  }

  // inner function
  function getNextIndex() {
    return selectedIndex >= getPageCount() - 1 ? 0 : selectedIndex + 1;
  }

  function getPrevIndex() {
    return selectedIndex <= 0 ? getPageCount() - 1 : selectedIndex - 1;
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

  function isSelected(index: number) {
    return index === selectedIndex;
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
      isAutoSlide: config?.autoSlide || false,
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
