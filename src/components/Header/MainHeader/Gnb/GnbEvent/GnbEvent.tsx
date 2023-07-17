import { styled } from 'styled-components';
import { ElCarousel } from '../../../../common/ElCarousel/ElCarousel';
import { eventList } from './data/data';
import { Event } from './Event/Event';

export const GnbEvent = () => {
  return (
    <Styled.GnbEvent>
      <Styled.EventContent>
        <ElCarousel type="GnbEvent" isAutoSlide={false}>
          {eventList.map(event => (
            <Event event={event} />
          ))}
        </ElCarousel>
      </Styled.EventContent>
    </Styled.GnbEvent>
  );
};

const Styled = {
  GnbEvent: styled.div`
    position: relative;
    padding: 25px 15px 10px;
    background: #fff;
  `,
  EventContent: styled.div``,
};
