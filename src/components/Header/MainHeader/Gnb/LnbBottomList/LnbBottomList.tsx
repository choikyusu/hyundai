import { styled } from 'styled-components';

export const LnbBottomList = () => {
  return (
    <Styled.LnbBottomList>
      <Styled.List>
        <Styled.Item>asas</Styled.Item>
      </Styled.List>
    </Styled.LnbBottomList>
  );
};

const Styled = {
  LnbBottomList: styled.div`
    margin-top: auto;
  `,
  List: styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: auto;
  `,
  Item: styled.li`
    width: 50%;
    text-align: center;
    border-top: 1px solid #cac6c4;
  `,
};
