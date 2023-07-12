import { CommonStyled } from '@/src/styles/CommonStyled';
import Link from 'next/link';
import { styled } from 'styled-components';
import { BUTTON_STYLE } from './styles/buttonStyle';

export const Login = () => {
  return (
    <Styled.UtilWrapper>
      <Styled.Util>
        <Styled.ItemUtil>
          <Styled.LoginButton
            data-v-26fd7dba=""
            href="/kr/ko/login"
            title="개인 로그인"
            data-link-area="gnb"
            data-link-name="개인 로그인"
          >
            개인 로그인
          </Styled.LoginButton>
        </Styled.ItemUtil>
        <Styled.ItemUtil>
          <Styled.LoginButton
            data-v-26fd7dba=""
            href="/kr/ko/login"
            title="개인 로그인"
            data-link-area="gnb"
            data-link-name="개인 로그인"
          >
            법인 로그인
          </Styled.LoginButton>
        </Styled.ItemUtil>
        <Styled.ItemUtil>
          <Styled.LanguageButton
            title="언어 선택"
            data-link-area="gnb"
            data-link-name="언어_KR"
          >
            KR
          </Styled.LanguageButton>
        </Styled.ItemUtil>
      </Styled.Util>
    </Styled.UtilWrapper>
  );
};

const Styled = {
  UtilWrapper: styled.div`
    margin-left: 0 !important;
    height: 48px;
    background: #f6f3f2;
    text-align: center;
    box-sizing: border-box;
  `,
  Util: styled.div`
    height: 48px;
    width: 100%;
    display: table;
    table-layout: fixed;
  `,
  ItemUtil: styled.div`
    display: table-cell;
    position: relative;
    vertical-align: middle;
    padding: 0 3px;
  `,
  LoginButton: styled(Link)`
    ${BUTTON_STYLE}
  `,
  LanguageButton: styled(CommonStyled.Button)`
    ${BUTTON_STYLE}
  `,
};
