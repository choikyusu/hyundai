import { styled } from 'styled-components';
import { ElCarousel } from '../../../../common/ElCarousel/ElCarousel';
import { eventList } from './data/data';
import { Event } from './Event/Event';

interface GnbEventProps {
  isShow: boolean;
}

export const GnbEvent = ({ isShow }: GnbEventProps) => {
  const config: ElCarouselConfigType = {
    contentCountBySlide: {
      small: { total: 1, cols: 1 },
      medium: { total: 6, cols: 6 },
      large: { total: 6, cols: 6 },
    },
    style: {
      grid: {
        templateColumns: {
          small: 'repeat(1, 1fr)',
          medium: 'repeat(3, 1fr)',
          large: 'repeat(3, 1fr)',
        },
        gap: {
          small: '2.55%',
          medium: '2.55%',
          large: '2.55%',
        },
      },
    },
  };

  return (
    <Styled.GnbEvent $isShow={isShow}>
      <Styled.EventContent>
        <ElCarousel type="GnbEvent" config={config}>
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
