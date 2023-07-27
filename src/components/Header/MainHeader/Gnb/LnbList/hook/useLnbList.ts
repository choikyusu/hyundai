import { useViewportSize } from '@/src/hooks/useViewportSize';
import { useState } from 'react';

export const useLnbList = () => {
  const { isMobile } = useViewportSize();

  const [level1, setLevel1] = useState<number>();
  const [level2, setLevel2] = useState<number>();

  const onLevel1Click = (index: number) => {
    if (isMobile()) setLevel1(prev => (prev === index ? undefined : index));
    else setLevel1(index);

    if (isMobile()) setLevel2(undefined);
    else setLevel2(0);
  };

  const onLevel2Click = (index: number) => {
    if (isMobile()) setLevel2(prev => (prev === index ? undefined : index));
    else setLevel2(index);
  };

  const isLv1Selected = (index: number) => level1 === index;
  const isLv2Selected = (index: number) => level2 === index;

  return {
    level1,
    level2,
    onLevel1Click,
    onLevel2Click,
    isLv1Selected,
    isLv2Selected,
  };
};
