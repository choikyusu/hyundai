import { RiMenu3Fill, RiSearchLine } from 'react-icons/ri';
import { styled } from 'styled-components';
import { TopMobileAreaProps } from '../TopMobileArea';
import { TextLink } from './TextLink/TextLink';
import { CommonStyled } from '@/src/styles/CommonStyled';

export const MobileController = ({
  headerType,
  onClickType,
}: TopMobileAreaProps) => {
  return (
    <Styled.MobileController>
      <TextLink headerType={headerType} />
      <Styled.ButtonWrapper>
        <Styled.SearchButton
          data-link-area="gnb"
          data-link-name="검색"
          onClick={() => onClickType('Search')}
        >
          <RiSearchLine />
        </Styled.SearchButton>
        <Styled.MenuButton
          data-link-area="gnb"
          data-link-name="전체메뉴"
          onClick={() => onClickType('Menu')}
        >
          <RiMenu3Fill />
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