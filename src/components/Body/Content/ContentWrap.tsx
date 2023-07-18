import { styled } from 'styled-components';
import { EVSection } from './Section/EvSection/EVSection';
import { ModelSection } from './Section/ModelSection/ModelSection';

export const ContentWrap = () => {
  return (
    <Styled.Content>
      <ModelSection />
      <EVSection />
    </Styled.Content>
  );
};

const Styled = {
  Content: styled.div`
    padding: 0 0 50px;
  `,
};
