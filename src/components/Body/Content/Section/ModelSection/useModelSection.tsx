import { useState } from 'react';
import { ageBaseModelList } from './data/data';

export const useModelSection = () => {
  const [selectedindex, setSelectedIndex] = useState(0);
  const [modelList, setModelList] = useState<ModelType[]>(
    ageBaseModelList[0].modelList,
  );

  const onClickAge = (index: number) => {
    setSelectedIndex(index);
    setModelList(ageBaseModelList[index].modelList);
  };

  const isActive = (index: number) => {
    return index === selectedindex;
  };

  return {
    isActive,
    onClickAge,
    modelList,
  };
};
