import { Branch } from '@/src/components/Branch/Branch';
import { Header } from '@/src/components/Header/Header';
import MapProvider from '@/src/contexts/MapContext';
import MenuProvider from '@/src/contexts/MenuContext';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function BranchPage() {
  return (
    <MapProvider>
      <MenuProvider>
        <div style={{ position: 'relative', height: '64px' }}>
          <Header />
        </div>
        <Branch />
      </MenuProvider>
    </MapProvider>
  );
}
