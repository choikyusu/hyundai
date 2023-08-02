import { styled } from 'styled-components';
import { ElCarousel } from '../../../../common/ElCarousel/ElCarousel';
import { eventList } from './data/data';
import { Event } from './Event/Event';

interface GnbEventProps {
  isShow: boolean;
}

export const GnbEvent = ({ isShow }: GnbEventProps) => {
  return (
    <Styled.GnbEvent $isShow={isShow}>
      <Styled.EventContent>
        <ElCarousel
          type="GnbEvent"
          config={{ contentCountBySlide: 3, style: { gridRowCount: 3 } }}
        >
          {eventList.map((event, index) => (
            <Event key={index} event={event} />
          ))}
        </ElCarousel>
      </Styled.EventContent>
    </Styled.GnbEvent>
  );
};

const Styled = {
  GnbEvent: styled.div<{ $isShow: boolean }>`
    display: ${props => (props.$isShow ? 'block' : 'none')};

    @media screen and (max-width: 767px) {
      position: relative;
      flex: 1;
      order: 3;
      padding: 25px 15px 10px;
      background: #fff;
    }
  `,
  EventContent: styled.div``,
};
