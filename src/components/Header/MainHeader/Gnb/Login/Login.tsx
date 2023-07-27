import { CommonStyled } from '@/src/styles/CommonStyled';
import Link from 'next/link';
import { styled } from 'styled-components';
import { BUTTON_STYLE } from './styles/buttonStyle';
import { RiMenu3Fill, RiSearchLine } from 'react-icons/ri';
import { TextLink } from '../../TopMobileArea/MobileController/TextLink/TextLink';
import { useViewportSize } from '@/src/hooks/useViewportSize';

export const Login = () => {
  const { isMobile } = useViewportSize();

  return (
    <Styled.UtilWrapper>
      <Styled.Util>
        {isMobile() && (
          <>
            <Styled.ItemUtil>
              <Styled.MobileLoginButton href="/kr/ko/login" title="개인 로그인">
                개인 로그인
              </Styled.MobileLoginButton>
            </Styled.ItemUtil>
            <Styled.ItemUtil>
              <Styled.MobileLoginButton href="/kr/ko/login" title="개인 로그인">
                법인 로그인
              </Styled.MobileLoginButton>
            </Styled.ItemUtil>
            <Styled.ItemUtil>
              <Styled.LanguageButton title="언어 선택">
                KR
              </Styled.LanguageButton>
            </Styled.ItemUtil>
          </>
        )}
        {!isMobile() && (
          <>
            <TextLink headerType="Web" />
            <Styled.ItemUtil>
              <Styled.LanguageButton title="언어 선택">
                KR
              </Styled.LanguageButton>
            </Styled.ItemUtil>
            <Styled.Divide />
            <Styled.LoginButton />
            <Styled.ItemUtil>
              <Styled.SearchButton>
                <RiSearchLine fill="#002c5f" />
              </Styled.SearchButton>
              <Styled.MenuButton>
                <RiMenu3Fill fill="#002c5f" />
              </Styled.MenuButton>
            </Styled.ItemUtil>
          </>
        )}
      </Styled.Util>
    </Styled.UtilWrapper>
  );
};

const Styled = {
  UtilWrapper: styled.div`
    @media screen and (max-width: 767px) {
      order: 1;
      margin-left: 0 !important;
      height: 48px;
      background: #f6f3f2;
      text-align: center;
      box-sizing: border-box;
    }

    @media screen and (min-width: 768px) {
      width: 29.8%;
      min-width: 250px;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      width: 30%;
      min-width: 250px;
    }
  `,
  Util: styled.div`
    @media screen and (max-width: 767px) {
      height: 48px;
      width: 100%;
      display: table;
      table-layout: fixed;
    }

    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
    }
  `,
  ItemUtil: styled.div`
    @media screen and (max-width: 767px) {
      display: table-cell;
      position: relative;
      vertical-align: middle;
      padding: 0 3px;
    }

    @media screen and (min-width: 768px) {
      position: relative;
      flex-shrink: 0;
    }
  `,
  MobileLoginButton: styled(Link)`
    ${BUTTON_STYLE}
  `,
  LanguageButton: styled(CommonStyled.Button)`
    ${BUTTON_STYLE}
  `,
  Divide: styled.div`
    width: 1px;
    height: 0.9em em;
    background: #999;
  `,
  LoginButton: styled(CommonStyled.Button)`
    outline: none;
    border: none;

    color: #000;
    height: 100%;

    position: relative;

    &:after {
      content: '';
      display: inline-block;
      vertical-align: middle;
      width: 20px;
      height: 20px;
      background: url(/images/w_mypage.png) no-repeat;
      background-position: 0 0;
      background-size: 100%;
    }
  `,
  SearchButton: styled(CommonStyled.Button)`
    @media screen and (max-width: 767px) {
      display: inline-block;
      width: 20px;
      height: 20px;

      svg {
        width: 20px;
        height: 20px;
      }
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      svg {
        width: 20px;
        height: 20px;
      }
    }
  `,
  MenuButton: styled(CommonStyled.Button)`
    @media screen and (max-width: 767px) {
      display: inline-block;
      width: 20px;
      height: 20px;

      svg {
        width: 20px;
        height: 20px;
      }
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      svg {
        width: 20px;
        height: 20px;
      }
    }
  `,
};
