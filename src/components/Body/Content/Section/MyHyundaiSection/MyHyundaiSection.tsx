import { styled } from 'styled-components';
import { CommonSection } from '../CommonSection';
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
              <Styled.Item>
                <Styled.TextWrapper>
                  <Styled.Title>홈</Styled.Title>
                  <Styled.Text>
                    보유 차량 정보에 따른 맞춤 정보형 UI 통해 제공
                  </Styled.Text>
                  <Styled.MoreLink>자세히 보기</Styled.MoreLink>
                </Styled.TextWrapper>
              </Styled.Item>
            </Styled.List>
          </Styled.ListWrapper>
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
  Item: styled.li`
    flex: none;
    width: calc(100% - 21vw);
    border: 1px solid #ccc;
    margin: 0 0 0 32px;
    padding: 32px 40px 36vw;
    background-size: auto 56% !important;

    margin-left: 16px;
    padding: 33px 2px 33vw 20px;

    margin-left: 15px;
  `,
  TextWrapper: styled.div`
    text-align: left;
  `,
  Title: styled.h3`
    font-family: 'HyundaiSansHeadKR';
    font-size: 30px;
    font-weight: 400;
    line-height: 44px;
    letter-spacing: -0.4px;

    font-size: 21px;
    line-height: 15px;
  `,
  Text: styled.div`
    margin-top: 2px;
    font-family: 'HyundaiSansTextKR';
    font-size: 16px;
    line-height: 30px;
    letter-spacing: -0.4px;
    line-height: 26px;
    color: #666;

    margin: 12px 0 0;
    font-size: 14px;
    line-height: 22px;
  `,
  MoreLink: styled.a`
    margin: 30px;
  `,
};
