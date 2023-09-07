import { Children } from 'react';
import { BreadCrumbs } from '../BreadCrumbs/BreadCrumbs';
import { VisualHead } from '../VisualHead/VisualHead';
import { styled } from 'styled-components';

interface ContentAreaProps {
  menuTreeList: string[];
  descList: string[];
  children: React.ReactNode;
}

export const ContentArea = ({
  menuTreeList,
  descList,
  children,
}: ContentAreaProps) => {
  return (
    <Styled.ContentArea>
      <Styled.Container>
        <VisualHead
          title={menuTreeList[menuTreeList.length - 1]}
          descList={descList}
        >
          <BreadCrumbs list={menuTreeList} />
        </VisualHead>
        <Styled.ContentWrap>
          <Styled.Content>{children}</Styled.Content>
        </Styled.ContentWrap>
      </Styled.Container>
    </Styled.ContentArea>
  );
};

const Styled = {
  ContentArea: styled.div`
    position: relative;

    @media screen and (min-width: 768px) {
      width: 100%;
    }
  `,
  Container: styled.div``,

  ContentWrap: styled.section``,
  Content: styled.div`
    @media screen and (min-width: 768px) {
      width: 100%;
      border-top: 1px solid #e4dcd3;
    }
  `,
};
