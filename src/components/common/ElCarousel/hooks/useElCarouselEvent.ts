interface useElCarouselEventProps {
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  setIsPlay: React.Dispatch<React.SetStateAction<boolean>>;
  reCalcCaroselTransform(nextIndex: number): void;
  reAddCaroselAnimation(nextIndex: number): void;
  getNextIndex(): number;
  getPrevIndex(): number;
}

export const useElCarouselEvent = ({
  setSelectedIndex,
  setIsPlay,
  reCalcCaroselTransform,
  reAddCaroselAnimation,
  getNextIndex,
  getPrevIndex,
}: useElCarouselEventProps) => {
  const onClickDot = (index: number) => {
    setSelectedIndex(index);
    reAddCaroselAnimation(index);
    reCalcCaroselTransform(index);
  };

  const onClickPlay = () => setIsPlay(prev => !prev);
  const onClickArrow = (direction: DirectionType) =>
    onClickDot(direction === 'Right' ? getNextIndex() : getPrevIndex());

  return { onClickDot, onClickPlay, onClickArrow };
};
