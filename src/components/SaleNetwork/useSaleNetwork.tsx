import { useMapProvider } from '@/src/contexts/MapContext';
import useCoords from '@/src/hooks/useCoords';
import { useEffect, useState } from 'react';
import { useLoadingProvider } from '@/src/contexts/LoadingContext';
import { getSaleNetworkList } from '@/src/services/apis/network.api.service';
import { useArrowList } from '../../hooks/useArrowList';

export const useSaleNetwork = () => {
  const { setLoading } = useLoadingProvider();

  const { kakaoMap } = useMapProvider();
  const [networkList, setNetworkList] = useState<NetworkResponse | null>(null);
  const itemList: HTMLLIElement[] = [];

  const { longitude, latitude } = useCoords();
  const {
    pageIndexList,
    pageNo,
    onClickArrow,
    onClickPageNo,
    setVisibleIndex,
  } = useArrowList({ totalPage: networkList?.pageSize || 0 });

  const isSelectedPage = (index: number) => index === pageNo;

  useEffect(() => {
    if (!kakaoMap || !latitude || !longitude) return;

    getSaleNetworkList(
      pageNo,
      latitude,
      longitude,
      undefined,
      saleNetworkListCallback,
    );
  }, [kakaoMap, latitude, longitude, pageNo]);

  return {
    networkList,
    pageIndexList,
    itemList,
    onClickPageNo,
    onClickArrow,
    isSelectedPage,
  };

  function saleNetworkListCallback(
    loading: boolean,
    success: boolean,
    networkList: NetworkResponse | undefined,
  ) {
    setLoading(loading);
    if (!success || !networkList) return;
    setVisibleIndex(pageNo, networkList.pageSize);
    setNetworkList(networkList);
  }
};
