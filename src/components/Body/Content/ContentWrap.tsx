import { styled } from 'styled-components';
import { Section } from './Section/Section';

export const ContentWrap = () => {
  return (
    <Styled.Content>
      <Section />
    </Styled.Content>
  );
};

const Styled = {
  Content: styled.div`
    padding: 0 0 50px;
  `,
};
