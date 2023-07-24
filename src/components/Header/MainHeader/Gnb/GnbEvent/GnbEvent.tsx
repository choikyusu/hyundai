import { styled } from 'styled-components';
import { ElCarousel } from '../../../../common/ElCarousel/ElCarousel';
import { eventList } from './data/data';
import { Event } from './Event/Event';

export const GnbEvent = () => {
  return (
    <Styled.GnbEvent>
      <Styled.EventContent>
        <ElCarousel type="GnbEvent" isAutoSlide={false} isArrowShow={false}>
          {eventList.map((event, index) => (
            <Event key={index} event={event} />
          ))}
        </ElCarousel>
      </Styled.EventContent>
    </Styled.GnbEvent>
  );
};

const Styled = {
  GnbEvent: styled.div`
    @media screen and (max-width: 767px) {
      position: relative;
      padding: 25px 15px 10px;
      background: #fff;
    }

    @media screen and (min-width: 768px) {
      display: none;
    }
  `,
  EventContent: styled.div``,
};
