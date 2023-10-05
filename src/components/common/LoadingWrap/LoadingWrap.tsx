import { useLoadingProvider } from '@/src/contexts/LoadingContext';
import { styled } from 'styled-components';

interface LoadingPageProps {
  children: React.ReactNode;
}

export const LoadingWrap = ({ children }: LoadingPageProps) => {
  const { loading } = useLoadingProvider();
  return (
    <>
      {loading && <LoadingPage />}
      {children}
    </>
  );
};

const LoadingPage = () => {
  return (
    <Styled.LoadingPage>
      <Styled.Contents>
        <Styled.ImageWrap>
          <Styled.Image />
        </Styled.ImageWrap>
        <Styled.Text>
          <Styled.Title>잠시만 기다려 주세요.</Styled.Title>
        </Styled.Text>
      </Styled.Contents>
    </Styled.LoadingPage>
  );
};

const Styled = {
  LoadingPage: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    text-align: center;
    padding-top: 200px;
    font-size: 30px;
    font-family: sans-serif;
    z-index: 3000;
  `,
  Contents: styled.div`
    max-width: 280px;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    padding: 50px 15px;
    background-color: #fff;

    @media screen and (max-width: 767px) {
      padding: 50px 15px;
    }
  `,
  ImageWrap: styled.div`
    width: 110px;
    margin: 0 auto;
  `,
  Image: styled.img`
    width: 100%;
  `,
  Text: styled.div`
    overflow: hidden;
  `,
  Title: styled.p`
    font-family: 'HyundaiSansTextKR';
    font-size: 16px;
    line-height: 30px;
    letter-spacing: -0.4px;

    @media screen and (max-width: 767px) {
      font-size: 14px;
    }
  `,
};
