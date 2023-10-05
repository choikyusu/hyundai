import { useEffect, useState } from 'react';
import { PRICE_LIST } from './FilterTop/data/data';
import { getCarList } from '@/src/services/apis/car.api.service';
import { useLoadingProvider } from '@/src/contexts/LoadingContext';

export type CarFilterMap = Map<string, { code: string; name: string }[]>;

export const useFilter = () => {
  const { setLoading } = useLoadingProvider();

  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(PRICE_LIST.length - 1);
  const [data, setData] = useState<CarResponse | null>(null);
  const [filterMap, setFilterMap] = useState<CarFilterMap>(new Map());

  const onChangeInputRange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'Min' | 'Max',
  ) => {
    if (type === 'Min') setMinIndex(Number(e.target.value));
    else if (type === 'Max') setMaxIndex(Number(e.target.value));
  };

  useEffect(() => {
    const newFilterMap = new Map(filterMap);

    const carTypeCode = newFilterMap
      .get('CarType')
      ?.map(type => type.code)
      .join(',');
    newFilterMap.delete('CarType');
    const carEngineCode = newFilterMap
      .get('EngineType')
      ?.map(type => type.code)
      .join(',');
    newFilterMap.delete('EngineType');

    const filterOptionCodeM: string[] = [];
    newFilterMap.forEach((value, key) => {
      filterOptionCodeM.push(...value.map(type => type.code));
    });

    const fromCarPrice = PRICE_LIST[minIndex];
    const toCarPrice = PRICE_LIST[maxIndex];

    getCarList(
      carTypeCode,
      carEngineCode,
      filterOptionCodeM.join(','),
      fromCarPrice,
      toCarPrice,
      carListCallback,
    );
  }, [filterMap, minIndex, maxIndex]);

  return {
    minIndex,
    maxIndex,
    filterMap,
    setFilterMap,
    onChangeInputRange,
    data,
  };

  function carListCallback(
    loading: boolean,
    success: boolean,
    carList: CarResponse | undefined,
  ) {
    setLoading(loading);
    if (!success || !carList) return;
    setData(carList);
  }
};
