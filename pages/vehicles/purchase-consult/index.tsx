import { Branch } from '@/src/components/Branch/Branch';
import { Footer } from '@/src/components/Footer/Footer';
import { Header } from '@/src/components/Header/Header';
import { PurchaseConsult } from '@/src/components/PurchaseConsult/PurchaseConsult';
import MapProvider from '@/src/contexts/MapContext';
import MenuProvider from '@/src/contexts/MenuContext';

export default function PurchaseConsultPage() {
  return (
    <>
      <MenuProvider>
        <div style={{ position: 'relative', height: '64px' }}>
          <Header />
        </div>
        <PurchaseConsult />
      </MenuProvider>
      <Footer />
    </>
  );
}
