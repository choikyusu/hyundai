import { styled } from 'styled-components';
import { CommonSection } from '../CommonSection';
import { Card } from './Card/Card';
import { cardList } from './data/data';
import Link from 'next/link';

export const MyHyundaiSection = () => {
  return (
    <CommonSection
      title="myHyundai"
      titleTailList={[
        '이제, 단순히 APP을 넘어서 당신의 카라이프를 책임질',
        '‘라이프 플랫폼 myHyundai’ 를 만나보세요.',
      ]}
    >
      <Styled.SectionBody>
        <Styled.MyHyundaiInner>
          <Styled.ListWrapper>
            <Styled.List>
              {cardList.map((card, index) => (
                <Card key={index} card={card} />
              ))}
            </Styled.List>
          </Styled.ListWrapper>
          <Styled.AppWrap>
            <Styled.Title>
              마이현대 APP
              <Styled.Link href="https://myhyundai.page.link/app_home">
                다운로드
              </Styled.Link>
            </Styled.Title>
            <Styled.Text>
              당신의 카라이프를 책임질
              <br />
              현대자동차 대표 앱 myHyundai를
              <br />
              만나보세요.
            </Styled.Text>
          </Styled.AppWrap>
        </Styled.MyHyundaiInner>
      </Styled.SectionBody>
    </CommonSection>
  );
};

const Styled = {
  SectionBody: styled.div`
    padding-right: 0 !important;
    padding-left: 0 !important;

    margin-top: 30px;
    padding: 0 15px;
  `,
  MyHyundaiInner: styled.div`
    display: flex;
    justify-content: space-between;
    margin: 51px 0 0;

    display: block;

    margin-top: 20px;
  `,
  ListWrapper: styled.div`
    display: block;
  `,
  List: styled.ul`
    display: flex;
    flex-wrap: nowrap;
    justify-content: normal;
    overflow-x: scroll;
  `,
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
  Title: styled.div`
    font-family: 'HyundaiSansHeadKR';
    font-size: 30px;
    font-weight: 400;
    line-height: 44px;
    letter-spacing: -0.4px;

    font-size: 21px;
    line-height: 15px;
  `,
  Link: styled(Link)`
    position: absolute;
    left: 40px;
    top: 200px;
    font-size: 16px;
    line-height: 21px;
    color: #012d5e;

    position: static;

    font-size: 14px;

    &:before {
      margin: 0 15px;
      display: inline-block;
      content: '';
      width: 1px;
      height: 12px;
      background: #999;
      vertical-align: middle;
    }

    &:after {
      content: '';
      display: inline-block;
      width: 15px;
      height: 15px;
      vertical-align: middle;
      background-image: url(/images/ico_btn.png);
      background-repeat: no-repeat;
      background-position: 0 -18px;
      margin-left: 6px;
      position: relative;
      bottom: 1px;
    }
  `,
  Text: styled.div`
    margin-top: 2px;
    font-family: 'HyundaiSansTextKR';
    font-size: 16px;
    line-height: 30px;
    letter-spacing: -0.4px;
    color: #666;

    font-size: 14px;
    line-height: 22px;
  `,
};
