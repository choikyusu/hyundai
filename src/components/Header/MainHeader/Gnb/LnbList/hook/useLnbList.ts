import { useViewportSize } from '@/src/hooks/useViewportSize';
import { useState } from 'react';
import { LnbListProps } from '../LnbList';

export const useLnbList = ({ el }: LnbListProps) => {
  const { isMobile } = useViewportSize();

  const [level1, setLevel1] = useState<number>();
  const [level2, setLevel2] = useState<number>();
  const itemList: HTMLButtonElement[] = [];

  const onLevel1Click = (index: number) => {
    if (isMobile()) setLevel1(prev => (prev === index ? undefined : index));
    else setLevel1(index);

    if (isMobile()) setLevel2(undefined);
    else setLevel2(0);

    if (el && itemList.length > 0) {
      el.style.opacity = '1';
      el.style.left = `${itemList[index].offsetLeft}px`;
      el.style.width = `${itemList[index].offsetWidth}px`;
    }
  };

  const onLevel2Click = (index: number) => {
    if (isMobile()) setLevel2(prev => (prev === index ? undefined : index));
    else setLevel2(index);
  };

  const onClickCloseButton = () => {
    setLevel1(undefined);
    setLevel2(undefined);

    if (el) {
      el.style.opacity = '0';
    }
  };

  const isLv1Selected = (index: number) => level1 === index;
  const isLv2Selected = (index: number, type?: 'Car' | 'Menu' | 'CarLink') => {
    if (isMobile()) return level2 === index;
    return type === 'Menu' ? false : level2 === index;
  };

  return {
    level1,
    level2,
    itemList,
    onClickCloseButton,
    onLevel1Click,
    onLevel2Click,
    isLv1Selected,
    isLv2Selected,
  };
};
