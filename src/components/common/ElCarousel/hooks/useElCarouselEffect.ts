import { useEffect } from 'react';

interface useElCarouselEffectProps {
  isPlay: boolean;
  isAutoSlide: boolean;
  onResize(): void;
  el: HTMLDivElement | null;
  reCalcCaroselTransform(nextIndex: number): void;
  selectedIndex: number;
  itemList: HTMLDivElement[];
  width: number;
  autoSlide(): void;
}

export const useElCarouselEffect = ({
  el,
  isPlay,
  isAutoSlide,
  onResize,
  reCalcCaroselTransform,
  selectedIndex,
  itemList,
  width,
  autoSlide,
}: useElCarouselEffectProps) => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    if (!isAutoSlide || !isPlay) return () => {};

    const interval = setInterval(() => autoSlide(), 3000);

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
