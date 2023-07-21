import { styled } from 'styled-components';
import { CommonSection } from '../CommonSection';
import { ListItem } from './ListItem/ListItem';
import { list } from './data/data';
import { AppCard } from '@/src/components/common/Card/AppCard/AppCard';
import { HorizontalSlide } from '@/src/components/common/HorizontalSlide/HorizontalSlide';

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
        <HorizontalSlide>
          {list.map((item, index) => (
            <ListItem key={index} {...item} />
          ))}
        </HorizontalSlide>
        <AppCard />
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
};
