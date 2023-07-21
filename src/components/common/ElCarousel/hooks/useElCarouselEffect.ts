import { useEffect } from 'react';

interface useElCarouselEffectProps {
  interval: NodeJS.Timer;
  isPlay: boolean;
  isAutoSlide: boolean;
  onResize(): void;
  el: HTMLDivElement | null;
  reCalcCaroselTransform(nextIndex: number): void;
  selectedIndex: number;
  itemList: HTMLDivElement[];
  width: number;
}

export const useElCarouselEffect = ({
  el,
  interval,
  isPlay,
  isAutoSlide,
  onResize,
  reCalcCaroselTransform,
  selectedIndex,
  itemList,
  width,
}: useElCarouselEffectProps) => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    if (!isAutoSlide || !isPlay) return () => {};

    return () => {
      clearInterval(interval);
    };
  }, [itemList, selectedIndex, isPlay]);

  useEffect(() => {
    reCalcCaroselTransform(selectedIndex);
  }, [width]);

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [el]);
};
