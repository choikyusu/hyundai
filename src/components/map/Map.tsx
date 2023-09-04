import { useMapProvider } from '@/src/contexts/MapContext';
import useCoords from '@/src/hooks/useCoords';
import { Dispatch, useEffect } from 'react';

interface MapProps {
  width: string;
  height: string;
  setMap: Dispatch<any>;
}

export function Map({ width, height, setMap }: MapProps) {
  const { kakaoMap } = useMapProvider();

  const { latitude, longitude } = useCoords();

  useEffect(() => {
    if (kakaoMap && latitude && longitude) {
      const container = document.getElementById('map');

      const options = {
        center: new kakaoMap.LatLng(latitude, longitude),
        level: 6,
      };

      setMap(new kakaoMap.Map(container, options));
    }
  }, [kakaoMap, latitude, longitude]);

  return <div id="map" style={{ width, height }} />;
}
