import { styled } from 'styled-components';
import { ElCarouselItem } from './ElCarouselItem/ElCarouselItem';
import { useRef, useState } from 'react';
import { eventList } from '../data/data';
import { Indicator } from './Indicator/Indicator';

export const ElCarousel = () => {
  const carouselContainerRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onClickDot = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <Styled.ElCarousel>
      <Styled.ElCarouselContainer ref={carouselContainerRef}>
        <Styled.ElCarouselLayer>
          {eventList.map((event, index) => (
            <ElCarouselItem
              event={event}
              index={index}
              selectedIndex={selectedIndex}
              carouselContainerRef={carouselContainerRef}
            />
          ))}
        </Styled.ElCarouselLayer>
      </Styled.ElCarouselContainer>
      <Indicator
        eventList={eventList}
        onClickDot={onClickDot}
        selectedIndex={selectedIndex}
      />
    </Styled.ElCarousel>
  );
};

const Styled = {
  ElCarousel: styled.div`
    overflow-x: hidden;
    position: relative;
  `,
  ElCarouselContainer: styled.div`
    height: calc(23.64vw + 40px) !important;
    padding-bottom: 40px;
    position: relative;
  `,
  ElCarouselLayer: styled.div`
    width: 100%;
    height: 100%;
  `,
};
