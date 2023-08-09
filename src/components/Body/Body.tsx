import { styled } from 'styled-components';
import { ContentWrap } from './Content/ContentWrap';
import { SlideMainBanner } from './SlideMainBanner/SlideMainBanner';
import { AllMenu } from './AllMenu/AllMenu';
import { useMenuProvider } from '@/src/contexts/MenuContext';

export const Body = () => {
  const { isOpenMenu } = useMenuProvider();

  return (
    <Styled.ContantArea>
      {isOpenMenu ? (
        <AllMenu />
      ) : (
        <Styled.Container>
          <SlideMainBanner />
          <ContentWrap />
        </Styled.Container>
      )}
    </Styled.ContantArea>
  );
};

const Styled = {
  ContantArea: styled.div`
    @media screen and (min-width: 768px) {
      width: 100%;
    }

    @media screen and (max-width: 9999px) {
      position: relative;
    }
  `,
  Container: styled.div``,
};
