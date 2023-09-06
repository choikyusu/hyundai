import { MarkerTip } from '@/src/components/common/MarkerTip/MarkerTip';
import { renderToString } from 'react-dom/server';

const IMAGE_SRC = '/images/marker_number_blue_big.png';

type Marker = {
  openInfoWindow?: () => void;
  closeInfoWindow?: () => void;
  clickInfoWindow?: () => void;
  hasMarkerClickTip: () => Marker[];
  hasMarkerHoverTip: () => Marker[];
  [key: string]: any;
};

export function createMarker(
  agencyList: AgencyResponse,
  kakaoMap: any,
  branchMap: any,
) {
  const markerList: Marker[] = agencyList.list.map((agency, index) => {
    const position = new kakaoMap.LatLng(agency.lattitude, agency.longitude);
    return createPocationToMarker(position, index);
  });

  function setMarkerClickTip(itemList: HTMLLIElement[]) {
    markerList.forEach((marker, index) => {
      const { clickInfowindow } = createTipComponent(agencyList, index);

      marker.clickInfoWindow = () => {
        clickInfowindow.open(branchMap, marker);
      };

      kakaoMap.event.addListener(marker, 'click', marker.clickInfoWindow);
    });

    return {
      markerList,
      setMarkerClickTip,
      setMarkerHoverTip,
      removeHoverTipEvent,
      removeClickTipEvent,
    };
  }

  function setMarkerHoverTip(itemList: HTMLLIElement[]) {
    markerList.forEach((marker, index) => {
      const { hoverInfowindow } = createTipComponent(agencyList, index);
      marker.openInfoWindow = () => {
        hoverInfowindow.open(branchMap, marker);
      };
      marker.closeInfoWindow = () => hoverInfowindow.close();

      itemList[index].addEventListener('mouseover', marker.openInfoWindow);
      itemList[index].addEventListener('mouseout', marker.closeInfoWindow);
      kakaoMap.event.addListener(marker, 'mouseover', marker.openInfoWindow);
      kakaoMap.event.addListener(marker, 'mouseout', marker.closeInfoWindow);
    });

    return {
      markerList,
      setMarkerClickTip,
      setMarkerHoverTip,
      removeHoverTipEvent,
      removeClickTipEvent,
    };
  }

  function removeHoverTipEvent(itemList: HTMLLIElement[]) {
    markerList.forEach((mapMarker, index) => {
      kakaoMap.event.removeListener(
        mapMarker,
        'mouseover',
        mapMarker.openInfoWindow,
      );
      kakaoMap.event.removeListener(
        mapMarker,
        'mouseout',
        mapMarker.closeInfoWindow,
      );

      if (mapMarker.openInfoWindow)
        itemList[index].removeEventListener(
          'mouseover',
          mapMarker.openInfoWindow,
        );

      if (mapMarker.closeInfoWindow)
        itemList[index].removeEventListener(
          'mouseout',
          mapMarker.closeInfoWindow,
        );
    });
  }

  function removeClickTipEvent(itemList: HTMLLIElement[]) {
    markerList.forEach((mapMarker, index) => {
      kakaoMap.event.removeListener(
        mapMarker,
        'click',
        mapMarker.clickInfoWindow,
      );

      if (mapMarker.clickInfoWindow)
        itemList[index].removeEventListener('click', mapMarker.clickInfoWindow);
    });
  }

  return {
    markerList,
    setMarkerClickTip,
    setMarkerHoverTip,
    removeHoverTipEvent,
    removeClickTipEvent,
  };

  function createTipComponent(agencyList: AgencyResponse, index: number) {
    const iwHoverContent = createHoverTipComponent(agencyList, index);
    const iwClickContent = createClickTipComponent(agencyList, index);

    const hoverInfowindow = new kakaoMap.InfoWindow({
      content: iwHoverContent,
      zIndex: 98,
    });

    const clickInfowindow = new kakaoMap.InfoWindow({
      content: iwClickContent,
      removable: true,
      zIndex: 99,
    });

    return { hoverInfowindow, clickInfowindow };
  }

  function createPocationToMarker(position: any, index: number) {
    const imageSize = new kakaoMap.Size(43, 52);
    const imageOption = {
      spriteSize: new kakaoMap.Size(43, 529),
      spriteOrigin: new kakaoMap.Point(0, 52 * index + 10),
      offset: new kakaoMap.Point(15, 37),
    };
    const markerImage = new kakaoMap.MarkerImage(
      IMAGE_SRC,
      imageSize,
      imageOption,
    );

    return new kakaoMap.Marker({
      branchMap,
      position,
      image: markerImage,
      clickable: true,
    });
  }

  function createHoverTipComponent(agencyList: AgencyResponse, index: number) {
    return renderToString(
      <MarkerTip
        name={agencyList.list[index].agencyName}
        detailList={[
          `전시차량(${agencyList.list[index].displayCarCount})`,
          `카마스터(${agencyList.list[index].carMasterCount})`,
        ]}
      />,
    );
  }

  function createClickTipComponent(agencyList: AgencyResponse, index: number) {
    return renderToString(
      <MarkerTip
        name={agencyList.list[index].agencyName}
        detailList={[
          `전시차량(${agencyList.list[index].displayCarCount})`,
          `카마스터(${agencyList.list[index].carMasterCount})`,
        ]}
        dotList={[
          agencyList.list[index].agencyAddress,
          agencyList.list[index].agencyTel,
        ]}
      />,
    );
  }
}
