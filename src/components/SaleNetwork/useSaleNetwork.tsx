import { useMapProvider } from '@/src/contexts/MapContext';
import useCoords from '@/src/hooks/useCoords';
import { useEffect, useState } from 'react';
import { useLoadingProvider } from '@/src/contexts/LoadingContext';
import { getSaleNetworkList } from '@/src/services/apis/network.api.service';
import { useArrowList } from '../../hooks/useArrowList';

export const useSaleNetwork = () => {
  const { setLoading } = useLoadingProvider();

  const { kakaoMap } = useMapProvider();
  const [branchMap, setBranchMap] = useState<any | null>(null);
  const [point, setPoint] = useState<string | undefined>();
  const [space, setSpace] = useState<string | undefined>();
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

  const onClickTab = (point: string | undefined, space: string | undefined) => {
    setPoint(point);
    setSpace(space);
  };

  const isSelectedTab = (
    tabPoint: string | undefined,
    tabSpace: string | undefined,
  ) => {
    return tabPoint === point && tabSpace === space;
  };

  useEffect(() => {
    if (!kakaoMap || !latitude || !longitude) return;

    getSaleNetworkList(
      pageNo,
      latitude,
      longitude,
      point,
      space,
      saleNetworkListCallback,
    );
  }, [kakaoMap, latitude, longitude, pageNo, point, space]);

  return {
    networkList,
    pageIndexList,
    itemList,
    onClickPageNo,
    onClickArrow,
    isSelectedPage,
    setBranchMap,
    onClickTab,
    isSelectedTab,
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
