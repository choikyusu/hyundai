import { Branch } from '@/src/components/Branch/Branch';
import { Footer } from '@/src/components/Footer/Footer';
import { Header } from '@/src/components/Header/Header';
import LoadingProvider from '@/src/contexts/LoadingContext';
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
      <LoadingProvider>
        <MenuProvider>
          <div style={{ position: 'relative', height: '64px' }}>
            <Header />
          </div>
          <Branch />
        </MenuProvider>
        <Footer />
      </LoadingProvider>
    </MapProvider>
  );
}
