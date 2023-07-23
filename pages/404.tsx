import { styled } from 'styled-components';

const NotFoundPage = () => {
  return (
    <Styled.Section>
      <Styled.ErrorWrap>
        <Styled.ErrorContent>
          <Styled.Section>
            <img src="/images/logo.png" alt="현대자동차 로고" />
          </Styled.Section>
          <Styled.H1>현대닷컴 접속이 원활하지 않습니다.</Styled.H1>
          <Styled.Section>
            <p>일시적인 현상이거나, 네트워크 문제일 수 있으니</p>
            <p>잠시 후 다시 시도해주세요.</p>
          </Styled.Section>
        </Styled.ErrorContent>
      </Styled.ErrorWrap>
    </Styled.Section>
  );
};

const Styled = {
  Section: styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
  `,
  ErrorWrap: styled.div`
    position: relative;
    height: 630px;
    padding-top: 90px;
    text-align: center;
    word-break: keep-all;

    min-height: 100%;
    padding: 0;
  `,
  ErrorContent: styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translate(0, -50%);
    -webkit-transform: translate(0, -50%);

    padding: 0 15px;
  `,
  H1: styled.h1`
    font-size: 38px;
    font-family: 'HeadMedium';
    color: #000;

    font-size: 26px;
    line-height: 35px;
  `,
};

export default NotFoundPage;
