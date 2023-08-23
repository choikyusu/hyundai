import { styled } from 'styled-components';
import { TextLink } from './TextLink/TextLink';
import { useMenuProvider } from '@/src/contexts/MenuContext';
import { MenuButton } from './Button/MenuButton';
import { SearchButton } from './Button/SearchButton';

export const MobileController = () => {
  const { headerType } = useMenuProvider();

  return (
    <Styled.MobileController>
      <TextLink headerType={headerType} />
      <Styled.ButtonWrapper>
        <SearchButton />
        <MenuButton />
      </Styled.ButtonWrapper>
    </Styled.MobileController>
  );
};

const Styled = {
  MobileController: styled.div`
    display: flex;
    align-items: center;
    gap: 34px;

    @media screen and (min-width: 768px) {
      display: none;
    }
  `,

  ButtonWrapper: styled.div`
    display: flex;
    gap: 14px;
  `,
};
