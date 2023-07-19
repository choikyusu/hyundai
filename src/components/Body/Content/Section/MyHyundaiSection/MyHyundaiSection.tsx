import { styled } from 'styled-components';
import { CommonSection } from '../CommonSection';
import { Card } from './Card/Card';
import { cardList } from './data/data';

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
          <Card
            card={{
              title: '마이현대 APP',
              description: [
                '당신의 카라이프를 책임질',
                '현대자동차 대표 앱 myHyundai를',
                '만나보세요.',
              ],
              imageUrl: '',
              pageUrl: '',
            }}
          />
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
};
