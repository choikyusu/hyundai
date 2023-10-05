import Script from 'next/script';
import React, { createContext, useContext, useMemo, useState } from 'react';

type MapContextProps = { kakaoMap: any; setkakaoMap: React.Dispatch<any> };

const MapContext = createContext<MapContextProps>({
  kakaoMap: undefined,
  setkakaoMap: () => undefined,
});

export default function MapProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [kakaoMap, setkakaoMap] = useState<any | undefined>(
    typeof window !== 'undefined' ? window.kakao?.maps : undefined,
  );

  const value = useMemo(
    () => ({
      kakaoMap,
      setkakaoMap,
    }),
    [kakaoMap, setkakaoMap],
  );

  return (
    <MapContext.Provider value={value}>
      <Script
        async={false}
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=731b62ad8a8684ac6b4e98a59b09bca5&autoload=false&libraries=services"
        onLoad={() => {
          window.kakao.maps.load(() => {
            setkakaoMap(window.kakao.maps);
          });
        }}
      />
      {children}
    </MapContext.Provider>
  );
}

export const useMapProvider = () => useContext(MapContext);
