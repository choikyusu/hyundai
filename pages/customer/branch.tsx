import useCoords from '@/src/hooks/useCoords';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';
import { MdHeight } from 'react-icons/md';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function Branch() {
  const { latitude, longitude } = useCoords();

  return (
    <>
      <Script
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=731b62ad8a8684ac6b4e98a59b09bca5&autoload=false"
        onLoad={() => {
          window.kakao.maps.load(() => {
            const container = document.getElementById('map');
            const options = {
              center: new window.kakao.maps.LatLng(latitude, longitude),
              level: 3,
            };

            const map = new window.kakao.maps.Map(container, options);
          });
        }}
      />
      <div id="map" style={{ width: '500px', height: '400px' }} />
    </>
  );
}
