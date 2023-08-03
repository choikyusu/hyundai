import { Body } from '@/src/components/Body/Body';
import { Footer } from '@/src/components/Footer/Footer';
import { Header } from '@/src/components/Header/Header';
import MenuProvider from '@/src/contexts/MenuContext';

export default function Home() {
  return (
    <MenuProvider>
      <Header />
      <Body />
      <Footer />
    </MenuProvider>
  );
}
