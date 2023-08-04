import { styled } from 'styled-components';
import { useAllMenu } from './hook/useAllMenu';
import { Search } from './Search/Search';
import { TabMenu } from './TabMenu/TabMenu';
import { TabContent } from './TabContent/TabContent';

export const AllMenu = () => {
  const { keyword, treeList, filteredTreeList, onChange } = useAllMenu();
  return (
    <Styled.AllMenu>
      <Styled.Container>
        <Search onChange={onChange} keyword={keyword} />
        <Styled.ContentWrap>
          <TabMenu treeList={treeList} />
          <TabContent treeList={filteredTreeList} keyword={keyword} />
        </Styled.ContentWrap>
      </Styled.Container>
    </Styled.AllMenu>
  );
};

const Styled = {
  AllMenu: styled.div`
    min-width: 768px;
    padding: 0 30px;
    background-color: #f6f3f2;
  `,
  Container: styled.div`
    position: relative;
    margin: 0 auto;
    max-width: 1400px;
  `,
  ContentWrap: styled.section``,
};
