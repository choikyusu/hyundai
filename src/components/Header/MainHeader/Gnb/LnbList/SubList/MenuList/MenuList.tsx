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
    @media screen and (max-width: 767px) {
      display: ${props => (props.$isShow ? 'block' : 'none')};
      width: 100%;
    }

    @media screen and (min-width: 768px) {
      display: grid;
      flex: 1;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 0 25px;
      gap: 0 25px;
      margin-left: 6.45%;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
      margin-left: 30px;
    }
  `,
};
