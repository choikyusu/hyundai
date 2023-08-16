import { RiMenu3Fill, RiSearchLine } from 'react-icons/ri';
import { styled } from 'styled-components';
import { TopMobileAreaProps } from '../TopMobileArea';
import { TextLink } from './TextLink/TextLink';
import { CommonStyled } from '@/src/styles/CommonStyled';
import { useMenuProvider } from '@/src/contexts/MenuContext';

export const MobileController = ({ onClickType }: TopMobileAreaProps) => {
  const { headerType } = useMenuProvider();

  return (
    <Styled.MobileController>
      <TextLink headerType={headerType} />
      <Styled.ButtonWrapper>
        <Styled.SearchButton
          data-link-area="gnb"
          data-link-name="검색"
          onClick={() => onClickType('Search')}
        >
          <RiSearchLine fill={headerType !== 'None' ? '#fff' : '#002c5f'} />
        </Styled.SearchButton>
        <Styled.MenuButton
          data-link-area="gnb"
          data-link-name="전체메뉴"
          onClick={() => onClickType('Menu')}
        >
          <RiMenu3Fill fill={headerType !== 'None' ? '#fff' : '#002c5f'} />
        </Styled.MenuButton>
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

  SearchButton: styled(CommonStyled.Button)`
    display: inline-block;
    width: 20px;
    height: 20px;

    svg {
      width: 20px;
      height: 20px;
    }
  `,
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
