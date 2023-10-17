import { MarkerTip } from '@/src/components/common/MarkerTip/MarkerTip';
import { renderToString } from 'react-dom/server';

const AGENCY_IMAGE_SRC = '/images/marker_number_blue_big.png';
const NETWORK_IMAGE_SRC = '/images/purchase/map_marker.png';

export function createMarker(
  inputList: InputMarkerData[],
  kakaoMap: any,
  branchMap: any,
) {
  const markerList: Marker[] = inputList.map((agency, index) => {
    const position = new kakaoMap.LatLng(agency.lattitude, agency.longitude);
    return createPositionToMarker(agency.type, position, index);
  });

  function setMarkerClickTip(itemList: HTMLLIElement[]) {
    markerList.forEach((marker, index) => {
      const { clickInfowindow } = createTipComponent(inputList, index);

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
      const { hoverInfowindow } = createTipComponent(inputList, index);
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

  function createTipComponent(inputList: InputMarkerData[], index: number) {
    const iwHoverContent = createHoverTipComponent(inputList, index);
    const iwClickContent = createClickTipComponent(inputList, index);

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

  function createPositionToMarker(
    type: 'Network' | 'Agency',
    position: any,
    index: number,
  ) {
    const imageSize = getImageSize(type, kakaoMap);
    const imageOption = getImageOption(type, index, kakaoMap);
    const markerImage = new kakaoMap.MarkerImage(
      getImageResource(type),
      imageSize,
      imageOption,
    );

    return new kakaoMap.Marker({
      map: branchMap,
      position,
      image: markerImage,
      clickable: true,
    });
  }

  function createHoverTipComponent(
    inputList: InputMarkerData[],
    index: number,
  ) {
    return renderToString(
      <MarkerTip
        name={inputList[index].name}
        detailList={[
          `전시차량(${inputList[index].displayCarCount})`,
          `카마스터(${inputList[index].carMasterCount})`,
        ]}
      />,
    );
  }

  function createClickTipComponent(
    inputList: InputMarkerData[],
    index: number,
  ) {
    return renderToString(
      <MarkerTip
        name={inputList[index].name}
        detailList={[
          `전시차량(${inputList[index].displayCarCount})`,
          `카마스터(${inputList[index].carMasterCount})`,
        ]}
        dotList={[inputList[index].agencyAddress, inputList[index].agencyTel]}
      />,
    );
  }
}

function getImageResource(type: 'Network' | 'Agency') {
  switch (type) {
    case 'Agency':
      return AGENCY_IMAGE_SRC;
    case 'Network':
      return NETWORK_IMAGE_SRC;
    default:
      return '';
  }
}

function getImageOption(
  type: 'Network' | 'Agency',
  index: number,
  kakaoMap: any,
) {
  switch (type) {
    case 'Agency':
      return {
        spriteSize: new kakaoMap.Size(43, 529),
        spriteOrigin: new kakaoMap.Point(0, 52 * index + 10),
        offset: new kakaoMap.Point(15, 37),
      };
    case 'Network':
      return {};
    default:
      return '';
  }
}

function getImageSize(type: 'Network' | 'Agency', kakaoMap: any) {
  switch (type) {
    case 'Agency':
      return new kakaoMap.Size(43, 52);
    case 'Network':
      return new kakaoMap.Size(44, 57);
    default:
      return '';
  }
}
