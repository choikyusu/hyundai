import { useMenuProvider } from '@/src/contexts/MenuContext';
import { useHeaderMenu } from '@/src/hooks/useHeaderMenu';
import { CommonStyled } from '@/src/styles/CommonStyled';
import { RiSearchLine } from 'react-icons/ri';
import { styled } from 'styled-components';

export const SearchButton = () => {
  const { headerType } = useMenuProvider();
  const { onClickType } = useHeaderMenu();

  return (
    <Styled.SearchButton onClick={() => onClickType('Search')}>
      <RiSearchLine fill={headerType === 'Menu' ? '#fff' : '#002c5f'} />
    </Styled.SearchButton>
  );
};

const Styled = {
  SearchButton: styled(CommonStyled.Button)`
    display: inline-block;
    width: 20px;
    height: 20px;

    svg {
      width: 20px;
      height: 20px;
    }
  `,
};
