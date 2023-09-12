import { Filter } from '@/src/components/Filter/Filter';
import { Footer } from '@/src/components/Footer/Footer';
import { Header } from '@/src/components/Header/Header';
import MenuProvider from '@/src/contexts/MenuContext';

export default function FilterPage() {
  return (
    <>
      <MenuProvider>
        <div style={{ position: 'relative', height: '64px' }}>
          <Header />
        </div>
        <Filter />
      </MenuProvider>
      <Footer />
    </>
  );
}
