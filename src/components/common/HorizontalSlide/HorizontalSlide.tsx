import { styled } from 'styled-components';

interface HorizontalSlideProps {
  children: React.ReactNode;
}

export const HorizontalSlide = ({ children }: HorizontalSlideProps) => {
  return (
    <Styled.MyHyundaiInner>
      <Styled.ListWrapper>
        <Styled.List>{children}</Styled.List>
      </Styled.ListWrapper>
    </Styled.MyHyundaiInner>
  );
};

const Styled = {
  MyHyundaiInner: styled.div`
    display: flex;
    justify-content: space-between;
    margin: 51px 0 0;

    display: block;

    margin-top: 20px;
  `,
  ListWrapper: styled.div`
    display: block;
  `,
  List: styled.ul`
    display: flex;
    flex-wrap: nowrap;
    justify-content: normal;
    overflow-x: scroll;
  `,
};
