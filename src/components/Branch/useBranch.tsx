import { useMapProvider } from '@/src/contexts/MapContext';
import useCoords from '@/src/hooks/useCoords';
import { getAgencyList } from '@/src/services/apis/agency.api.service';
import { useEffect, useState } from 'react';
import { useArrowList } from './usePagination';
import { createMarker } from '@/src/utils/map/marker.builder';

export const useBranch = () => {
  const { kakaoMap } = useMapProvider();
  const [branchMap, setBranchMap] = useState<any | null>(null);
  const [address, setAddress] = useState('');
  const [agencyList, setAgencyList] = useState<AgencyResponse | null>(null);
  const [agencyTypeCode, setAgencyTypeCode] = useState<number | undefined>();
  const itemList: HTMLLIElement[] = [];

  const { longitude, latitude } = useCoords();
  const {
    pageIndexList,
    pageNo,
    onClickArrow,
    onClickPageNo,
    setVisibleIndex,
  } = useArrowList({ totalPage: agencyList?.pages || 0 });

  const isSelectedPage = (index: number) => index === pageNo;

  useEffect(() => {
    if (!kakaoMap || !latitude || !longitude) return;

    handleCurrentAddress();

    getAgencyList(
      10,
      pageNo,
      latitude,
      longitude,
      agencyTypeCode,
      agencyListCallback,
    );
  }, [kakaoMap, latitude, longitude, agencyTypeCode, pageNo]);

  useEffect(() => {
    if (!branchMap || !kakaoMap || !agencyList) return () => undefined;
    const list = createMarker(agencyList, kakaoMap, branchMap)
      .setMarkerHoverTip(itemList)
      .setMarkerHoverTip(itemList);

    return () => {
      list.markerList.forEach(mapMarker => mapMarker.setMap(null));
      list.removeClickTipEvent(itemList);
      list.removeHoverTipEvent(itemList);
    };
  }, [branchMap, kakaoMap, agencyList]);

  return {
    address,
    agencyList,
    pageIndexList,
    itemList,
    setAgencyTypeCode,
    onClickPageNo,
    setBranchMap,
    onClickArrow,
    isSelectedPage,
  };

  function agencyListCallback(
    success: boolean,
    agencyList: AgencyResponse | undefined,
  ) {
    if (!success || !agencyList) return;
    setVisibleIndex(pageNo, agencyList.pages);
    setAgencyList(agencyList);
  }

  function handleCurrentAddress() {
    if (address) return;

    const geocoder = new kakaoMap.services.Geocoder();
    geocoder.coord2Address(longitude, latitude, (result: any, status: any) => {
      if (status === kakaoMap.services.Status.OK) {
        setAddress(result[0].address.address_name);
      }
    });
  }
};
