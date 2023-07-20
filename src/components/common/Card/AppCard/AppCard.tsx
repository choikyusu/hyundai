import { styled } from 'styled-components';
import { Card } from '../Card';

export const AppCard = () => {
  return (
    <Styled.AppWrap>
      <Card
        title="마이현대 APP"
        linkText="다운로드"
        linkUrl="https://myhyundai.page.link/app_home"
        descriptionList={[
          '당신의 카라이프를 책임질',
          '현대자동차 대표 앱 myHyundai를',
          '만나보세요.',
        ]}
      />
    </Styled.AppWrap>
  );
};

const Styled = {
  AppWrap: styled.div`
    position: relative;
    width: 288px;
    height: 440px;
    padding: 33px 0 0 40px;
    text-align: left;
    background-color: #f6f3f2;

    width: calc(100% - 56px);
    height: auto;
    margin: 40px auto 0;
    padding-bottom: 31px px;

    width: calc(100% - 30px);
    margin: 30px 15px 0;
    padding: 30px 15px 25px;

    &:before {
      position: absolute;
      right: 40px;
      bottom: 36px;
      display: block;
      content: '';
      width: 120px;
      height: 120px;
      background: url(/images/re_hyundaishop_app.png) no-repeat;

      width: 60px;
      height: 60px;
      right: 40px px;
      bottom: 30px;
      background-size: 100%;

      right: 16px;
      bottom: 30px;
    }
  `,
};
