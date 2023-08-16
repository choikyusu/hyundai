import { styled } from 'styled-components';
import { useAllMenu } from './hook/useAllMenu';
import { Search } from './Search/Search';
import { TabMenu } from './TabMenu/TabMenu';
import { TabContent } from './TabContent/TabContent';
import { useMenuProvider } from '@/src/contexts/MenuContext';

export const AllMenu = () => {
  const { setHeaderType } = useMenuProvider();
  const { keyword, treeList, filteredTreeList, onChange } = useAllMenu();
  return (
    <Styled.AllMenu>
      <Styled.Container>
        <Search onChange={onChange} keyword={keyword} />
        <Styled.ContentWrap>
          <TabMenu treeList={treeList} />
          <TabContent treeList={filteredTreeList} keyword={keyword} />
          <Styled.CloseButton onClick={() => setHeaderType('None')} />
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
  CloseButton: styled.button`
    @media screen and (min-width: 768px) {
      display: inline-block;
      vertical-align: middle;
    }

    @media screen and (min-width: 768px) {
      width: 180px;
      height: 50px;
      border: 0;
      background: #002c5f;
      font-family: 'HyundaiSansTextKR';
      font-size: 16px;
      font-weight: 500;
      letter-spacing: -0.4px;
      color: #fff;
      cursor: pointer;
    }

    @media screen and (min-width: 768px) {
      position: absolute;
      display: block;
      top: 10px;
      right: -5px;
      width: 30px;
      height: 50px;
      background-color: transparent;
      box-sizing: border-box;
      transition: transform 0.3s;
      z-index: 10;
      cursor: pointer;
    }

    &:before {
      transform: rotate(-45deg);

      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 24px;
      height: 1px;
      margin: -0.5px 0 0 -12px;
      background-color: #000;
    }
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 24px;
      height: 1px;
      margin: -0.5px 0 0 -12px;
      background-color: #000;

      transform: rotate(45deg);
    }
  `,
};
