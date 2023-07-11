import { RiSearchLine, RiMenu3Fill } from 'react-icons/ri';
import { HyundaiSvgComponent } from '../../assets/HyundaiSvgComponent';
import { CommonStyled } from '@/src/styles/CommonStyled';
import { styled } from 'styled-components';
import { MobileSearch } from '../Search/MobileSearch';

interface MainHeaderProps {
  isSearchClicked: boolean;
  onSearchClick: () => void;
}

export const MainHeader = ({
  isSearchClicked,
  onSearchClick,
}: MainHeaderProps) => {
  return (
    <Styled.Header $isSearchClicked={isSearchClicked}>
      <Styled.InnerWrap>
        <Styled.TopMobileArea>
          <Styled.Logo>
            <Styled.Logobutton type="button" width="35px">
              <HyundaiSvgComponent width="126px" />
            </Styled.Logobutton>
          </Styled.Logo>
          <Styled.MobileController>
            <Styled.SearchButton
              data-link-area="gnb"
              data-link-name="검색"
              onClick={onSearchClick}
            >
              <RiSearchLine />
            </Styled.SearchButton>
            <Styled.MenuButton data-link-area="gnb" data-link-name="전체메뉴">
              <RiMenu3Fill />
            </Styled.MenuButton>
          </Styled.MobileController>
        </Styled.TopMobileArea>
        <MobileSearch isSearchClicked={isSearchClicked} />
      </Styled.InnerWrap>
    </Styled.Header>
  );
};

const Styled = {
  Header: styled(CommonStyled.Header)<{ $isSearchClicked: boolean }>`
    position: fixed;
    top: 0;
    background: transparent;
    border-bottom: none;
    ${props => (props.$isSearchClicked ? 'background-color: #fff;' : '')}
  `,
  InnerWrap: styled.div``,
  TopMobileArea: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 99;
    padding: 0 15px;
    box-sizing: border-box;
    width: 100%;
    height: 55px;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
  `,
  Logo: styled.div``,
  Logobutton: styled(CommonStyled.Button)<{ width: string }>`
    overflow: hidden;
    display: block;
    width: ${props => props.width};
  `,
  MobileController: styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
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
