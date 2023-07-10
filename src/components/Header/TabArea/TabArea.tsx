import { styled } from 'styled-components';

export const TabArea = ({ children }: { children: React.ReactNode }) => {
  return (
    <Styled.Wrapper>
      <Styled.NavBar />
      {children}
    </Styled.Wrapper>
  );
};

const Styled = {
  Wrapper: styled.div`
    position: sticky;
    top: 0px;
    z-index: 999;
  `,
  NavBar: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    width: 0;
    height: 5px;
    background-color: #007fa8;
    z-index: 99999;
  `,
};
