import { useMapProvider } from '@/src/contexts/MapContext';
import useCoords from '@/src/hooks/useCoords';
import { useEffect, useState } from 'react';

interface MapProps {
  width: string;
  height: string;
}

export function Map({ width, height }: MapProps) {
  const { kakaoMap } = useMapProvider();
  const [map, setMap] = useState<any | null>(null);

  const { latitude, longitude } = useCoords();

  useEffect(() => {
    if (kakaoMap && latitude && longitude) {
      const container = document.getElementById('map');

      const options = {
        center: new kakaoMap.LatLng(latitude, longitude),
        level: 3,
      };

      setMap(new kakaoMap.Map(container, options));
    }
  }, [kakaoMap, latitude, longitude]);

  return <div id="map" style={{ width, height }} />;
}
