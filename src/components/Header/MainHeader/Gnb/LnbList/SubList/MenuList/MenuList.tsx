import { styled } from 'styled-components';
import { Menu } from './Menu/Menu';

interface MenuListProps {
  isShow: boolean;
  subList: MenuType[];
}

export const MenuList = ({ isShow, subList }: MenuListProps) => {
  return (
    <Styled.MenuList $isShow={isShow}>
      {subList.map((item, index) => (
        <Menu key={index} {...item} />
      ))}
    </Styled.MenuList>
  );
};

const Styled = {
  MenuList: styled.ul<{ $isShow: boolean }>`
    display: ${props => (props.$isShow ? 'block' : 'none')};
    width: 100%;
  `,
};
