import { ElCarousel } from '@/src/components/common/ElCarousel/ElCarousel';
import { styled } from 'styled-components';
import { CommonSection } from '../CommonSection';
import { eventList } from './data/data';
import { Event } from './Event/Event';

export const EventSection = () => {
  return (
    <CommonSection
      title="Events"
      titleTailList={[
        '고객님을 위한 스페셜한 이벤트를 통해',
        '즐거운 행운과 경품을 만나보세요.',
      ]}
    >
      <Styled.SectionBody>
        <ElCarousel type="Events" config={{ showArrow: true }}>
          {eventList.map((event, index) => (
            <Event key={index} event={event} />
          ))}
        </ElCarousel>
      </Styled.SectionBody>
    </CommonSection>
  );
};

const Styled = {
  SectionBody: styled.div`
    margin-top: 30px;
    padding: 0 15px;
  `,
};
