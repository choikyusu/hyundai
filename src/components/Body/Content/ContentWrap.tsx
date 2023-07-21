import { styled } from 'styled-components';
import { EVSection } from './Section/EvSection/EVSection';
import { ModelSection } from './Section/ModelSection/ModelSection';
import { MyHyundaiSection } from './Section/MyHyundaiSection/MyHyundaiSection';
import { HyundaiShop } from './Section/HyundaiShop/HyundaiShop';
import { BrandSection } from './Section/BrandSection/BrandSection';
import { EventSection } from './Section/EventSection/EventSection';

export const ContentWrap = () => {
  return (
    <Styled.Content>
      <ModelSection />
      <EVSection />
      <MyHyundaiSection />
      <HyundaiShop />
      <BrandSection />
      <EventSection />
    </Styled.Content>
  );
};

const Styled = {
  Content: styled.div`
    padding: 70px 0 50px;
    display: flex;
    flex-direction: column;
    gap: 70px;
  `,
};
