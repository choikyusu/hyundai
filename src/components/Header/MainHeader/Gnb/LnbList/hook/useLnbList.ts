import { useState } from 'react';

export const useLnbList = () => {
  const [level1, setLevel1] = useState<number>();
  const [level2, setLevel2] = useState<number>();

  const onLevel1Click = (index: number) => {
    setLevel1(prev => (prev === index ? undefined : index));
    setLevel2(undefined);
  };

  const onLevel2Click = (index: number) => {
    setLevel2(prev => (prev === index ? undefined : index));
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
