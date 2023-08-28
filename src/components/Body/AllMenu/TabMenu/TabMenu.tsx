import { CommonStyled } from '@/src/styles/CommonStyled';
import { styled } from 'styled-components';

interface TabMenuProps {
  treeList: PCMenuTreeType[];
}

export const TabMenu = ({ treeList }: TabMenuProps) => {
  return (
    <Styled.TabMenuList>
      {treeList.map((menu, index) => (
        <Styled.TabMenu key={index}>
          <Styled.MenuButton>{menu.name}</Styled.MenuButton>
        </Styled.TabMenu>
      ))}
    </Styled.TabMenuList>
  );
};

const Styled = {
  TabMenuList: styled.ul`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  `,
  TabMenu: styled.li`
    width: 100%;
    height: 60px;
    background: #444;
  `,
  MenuButton: styled(CommonStyled.Button)`
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
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 1em;
      width: 100%;
      height: 100%;
      font-family: 'HyundaiSansTextKR';
      font-size: 16px;
      line-height: 30px;
      letter-spacing: -0.4px;
      font-size: 15px;
      color: #fff;
      background-color: #444;
    }
  `,
};
