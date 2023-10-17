import { useMapProvider } from '@/src/contexts/MapContext';
import useCoords from '@/src/hooks/useCoords';
import { useEffect, useState } from 'react';
import { useLoadingProvider } from '@/src/contexts/LoadingContext';
import { getSaleNetworkList } from '@/src/services/apis/network.api.service';
import { useArrowList } from '../../hooks/useArrowList';
import { createMarker } from '@/src/utils/map/marker.builder';
import { convertInputMarkerFromResponse } from '@/src/utils/map/converter';

const POINT_LIST = [
  {
    name: '전체',
  },
  {
    name: '트럭',
    point: '00001',
  },
  {
    name: '버스',
    point: '00002',
  },
  {
    name: '스페이스',
    space: 'Y',
  },
];

export const useSaleNetwork = () => {
  const { setLoading } = useLoadingProvider();

  const { kakaoMap } = useMapProvider();
  const [branchMap, setBranchMap] = useState<any | null>(null);
  const [point, setPoint] = useState<string | undefined>();
  const [space, setSpace] = useState<string | undefined>();
  const [networkList, setNetworkList] = useState<NetworkResponse | null>(null);
  const [openList, setOpenList] = useState(false);
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

  const isSelectedTab = (
    tabPoint: string | undefined,
    tabSpace: string | undefined,
  ) => {
    return tabPoint === point && tabSpace === space;
  };

  const selectedTabName = () => {
    return POINT_LIST.find(item => item.point === point && item.space === space)
      ?.name;
  };

  const onClickTab = (point: string | undefined, space: string | undefined) => {
    setPoint(point);
    setSpace(space);
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

  useEffect(() => {
    if (!branchMap || !kakaoMap || !networkList) return () => undefined;
    const list = createMarker(
      convertInputMarkerFromResponse(networkList),
      kakaoMap,
      branchMap,
    );

    return () => {
      list.markerList.forEach(mapMarker => mapMarker.setMap(null));
    };
  }, [branchMap, kakaoMap, networkList]);

  return {
    POINT_LIST,
    networkList,
    pageIndexList,
    itemList,
    selectedTabName,
    onClickPageNo,
    onClickArrow,
    isSelectedPage,
    setBranchMap,
    onClickTab,
    isSelectedTab,
    openList,
    setOpenList,
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
