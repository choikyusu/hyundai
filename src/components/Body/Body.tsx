import { styled } from 'styled-components';
import { ContentWrap } from './Content/ContentWrap';
import { SlideMainBanner } from './SlideMainBanner/SlideMainBanner';

export const Body = () => {
  return (
    <Styled.ContantArea>
      <Styled.Container>
        <SlideMainBanner />
        <ContentWrap />
      </Styled.Container>
    </Styled.ContantArea>
  );
};

const Styled = {
  ContantArea: styled.div`
    position: relative;
  `,
  Container: styled.div``,
};
