import Link from 'next/link';
import { styled } from 'styled-components';

export default function Login() {
  return (
    <Styled.Root>
      <div>
        <Styled.Type4>
          <Styled.HeaderWrap>
            <Styled.Header>
              <h2>
                <img
                  width="100%"
                  height="100%"
                  src="/images/hyundai_logo.png"
                  alt="HYUNDAI"
                />
              </h2>
            </Styled.Header>
          </Styled.HeaderWrap>
        </Styled.Type4>
        <Styled.Main>
          <Styled.GreyBox>
            <Styled.InnerBox>
              <Styled.LoginAreaWrap>
                <Styled.InputAreaWrap>
                  <Styled.SubTitle>이메일 로그인</Styled.SubTitle>
                  <Styled.InputWrap>
                    <Styled.Input placeholder="이메일 주소(test01@test01.com)" />
                  </Styled.InputWrap>
                  <Styled.InputWrap>
                    <Styled.Input placeholder="비밀번호(1234)" />
                  </Styled.InputWrap>
                </Styled.InputAreaWrap>
                <Styled.ButtonWrap>
                  <Styled.Button>로그인</Styled.Button>
                </Styled.ButtonWrap>
                <Styled.LinKWrap>
                  <Styled.RightLinkWrap>
                    <Styled.Link href="/user/account-search">
                      아이디 찾기
                    </Styled.Link>
                    |
                    <Styled.Link href="/user/password-init">
                      비밀번호 초기화
                    </Styled.Link>
                  </Styled.RightLinkWrap>
                  <Styled.Link href="/user/agreement">회원가입▶</Styled.Link>
                </Styled.LinKWrap>
              </Styled.LoginAreaWrap>
            </Styled.InnerBox>
          </Styled.GreyBox>
        </Styled.Main>
      </div>
    </Styled.Root>
  );
}

const Styled = {
  Root: styled.div`
    border-top: 7px solid #012d5e;
  `,
  Type4: styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;

    text-align: center;
    background-color: #fff;
  `,
  HeaderWrap: styled.div`
    width: 400px;
    margin: 0 auto;
    padding: 0px 20px;
  `,
  Header: styled.div`
    width: 128px;
  `,
  Main: styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;

    border-top: 1px solid #dedede;

    border-bottom: 1px solid #dedede;
  `,
  GreyBox: styled.div`
    margin-bottom: 0;

    flex-grow: 0;
    max-width: 100%;
    flex-basis: 100%;

    margin: 0;
    box-sizing: border-box;

    background-color: #fff;
  `,
  InnerBox: styled.div`
    max-width: 400px;

    margin: 0 auto;
    padding: 25px 20px;
  `,

  LoginAreaWrap: styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
  `,
  InputAreaWrap: styled.div`
    flex-grow: 0;
    max-width: 100%;
    flex-basis: 100%;

    margin: 0;
    box-sizing: border-box;
  `,
  SubTitle: styled.h3`
    color: #666;
    font-size: 12px;
    word-break: none;
    font-family:
      undefined,
      Nanum Gothic,
      sans-serif,
      Roboto,
      Helvetica,
      Arial;
    font-weight: 600;
    line-height: 15px;
    padding-bottom: 7px;

    &:before {
      width: 4px;
      height: 4px;
      margin: 6px 6px 0 0;
      content: no-open-quote;
      display: inline-block;
      background: #999;
      border-radius: 3px;
      vertical-align: top;
    }
  `,
  InputWrap: styled.div`
    margin-bottom: 5px;
  `,
  Input: styled.input`
    font: inherit;
    color: currentColor;
    width: 100%;
    border: 0;
    margin: 0;
    padding: 6px 0 7px;
    display: block;
    min-width: 0;
    box-sizing: content-box;
    background: none;

    border: 1px solid #ced4da;
    height: 40px;
    padding: 10px 12px;
    opacity: 1 !important;
    font-size: 12px;
    box-sizing: border-box;
    transition:
      border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    appearance: none;
    font-family:
      undefined,
      Nanum Gothic,
      sans-serif,
      Roboto,
      Helvetica,
      Arial;
    border-color: #ced4da;
    background-color: #fff;
  `,
  ButtonWrap: styled.div`
    padding-top: 10px;

    flex-grow: 0;
    max-width: 100%;
    flex-basis: 100%;
  `,
  Button: styled.button`
    width: 100%;
    height: 55px;
    padding: 0;
    font-size: 18px;
    font-family:
      undefined,
      Nanum Gothic,
      sans-serif,
      Roboto,
      Helvetica,
      Arial;
    font-weight: 600;
    border-radius: 0;
    background-color: #3387bd;
  `,
  RightLinkWrap: styled.div`
    display: flex;
    gap: 10px;
  `,
  LinKWrap: styled.div`
    width: 100%;
    display: flex;

    justify-content: space-between;

    color: #666;
    font-size: 13px;
    text-align: center;
    font-family:
      undefined,
      Nanum Gothic,
      sans-serif,
      Roboto,
      Helvetica,
      Arial;
    line-height: 1.9;
    padding-top: 20px;
  `,
  Link: styled(Link)`
    color: #006ca4;
    font-family:
      undefined,
      Nanum Gothic,
      sans-serif,
      Roboto,
      Helvetica,
      Arial;
    font-weight: 600;

    text-decoration: none;
  `,
};
