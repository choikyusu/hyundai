import { CommonStyled } from '@/src/styles/CommonStyled';
import { RiMenu3Fill, RiSearchLine } from 'react-icons/ri';
import { CSSProp, css, styled } from 'styled-components';

interface TopMobileAreaProps {
  headerType: 'None' | 'Search' | 'Menu';
  onClickType: (type: 'None' | 'Search' | 'Menu') => void;
}

export const TopMobileArea = ({
  headerType,
  onClickType,
}: TopMobileAreaProps) => {
  return (
    <Styled.TopMobileArea $areaStyle={AREA_STYLE[headerType]}>
      <Styled.Logo>
        <Styled.Logobutton type="button" width="35px">
          {/* <HyundaiSvgComponent width="126px" /> */}
        </Styled.Logobutton>
      </Styled.Logo>
      <Styled.MobileController>
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
      </Styled.MobileController>
    </Styled.TopMobileArea>
  );
};

const Styled = {
  TopMobileArea: styled.div<{ $areaStyle: CSSProp }>`
    ${props => props.$areaStyle}
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

const AREA_STYLE = {
  None: css`
    background-color: transparent;
    border-bottom: none;
  `,
  Search: css`
    background-color: transparent;
    border-bottom: none;
  `,
  Menu: css`
    background-color: #002c5f;
  `,
};
