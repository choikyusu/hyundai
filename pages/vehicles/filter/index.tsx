import { Filter } from '@/src/components/Filter/Filter';
import { Footer } from '@/src/components/Footer/Footer';
import { Header } from '@/src/components/Header/Header';
import LoadingProvider from '@/src/contexts/LoadingContext';
import MenuProvider from '@/src/contexts/MenuContext';

export default function FilterPage() {
  return (
    <>
      <MenuProvider>
        <LoadingProvider>
          <div style={{ position: 'relative', height: '64px' }}>
            <Header />
          </div>
          <Filter />
        </LoadingProvider>
      </MenuProvider>
      <Footer />
    </>
  );
}
