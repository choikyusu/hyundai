import { styled } from 'styled-components';
import { EVSection } from './Section/EvSection/EVSection';
import { ModelSection } from './Section/ModelSection/ModelSection';
import { MyHyundaiSection } from './Section/MyHyundaiSection/MyHyundaiSection';

export const ContentWrap = () => {
  return (
    <Styled.Content>
      <ModelSection />
      <EVSection />
      <MyHyundaiSection />
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
