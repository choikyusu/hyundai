import { styled } from 'styled-components';

export default function Signin() {
  return (
    <Styled.Root>
      <div>
        <Styled.Type4>
          <Styled.HeaderWrap>
            <Styled.Header>
              <h2>
                <img src="/images/hyundai_logo.png" alt="HYUNDAI" />
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
                </Styled.InputAreaWrap>
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
};
