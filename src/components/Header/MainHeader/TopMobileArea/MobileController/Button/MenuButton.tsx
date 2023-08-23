import { useMenuProvider } from '@/src/contexts/MenuContext';
import { useHeaderMenu } from '@/src/hooks/useHeaderMenu';
import { CommonStyled } from '@/src/styles/CommonStyled';
import { RiMenu3Fill } from 'react-icons/ri';
import { styled } from 'styled-components';

export const MenuButton = () => {
  const { headerType } = useMenuProvider();
  const { onClickType } = useHeaderMenu();

  return (
    <Styled.MenuButton onClick={() => onClickType('Menu')}>
      <RiMenu3Fill fill={headerType === 'Menu' ? '#fff' : '#002c5f'} />
    </Styled.MenuButton>
  );
};

const Styled = {
  MenuButton: styled(CommonStyled.Button)`
    display: inline-block;
    width: 20px;
    height: 20px;

    svg {
      width: 20px;
      height: 20px;
    }
  `,
};
