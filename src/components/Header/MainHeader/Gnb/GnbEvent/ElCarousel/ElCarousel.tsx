import { styled } from 'styled-components';
import { ElCarouselItem } from './ElCarouselItem/ElCarouselItem';
import { useEffect, useState } from 'react';
import { eventList } from '../data/data';
import { Indicator } from './Indicator/Indicator';

export const ElCarousel = () => {
  const [width, setWidth] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const itemList: HTMLDivElement[] = [];

  const onClickDot = (index: number) => {
    setSelectedIndex(index);

    itemList.forEach((item, itemIndex) => {
      if (index === itemIndex || itemIndex === selectedIndex) {
        item.style.transition = 'transform 0.3s ease-in-out';
      } else {
        item.style.transition = '';
      }

      if (itemIndex === 0 && index === itemList.length - 1)
        item.style.transform = `translateX(${width}px) scale(1)`;
      else if (itemIndex === itemList.length - 1 && index === 0)
        item.style.transform = `translateX(${-width}px) scale(1)`;
      else {
        item.style.transform = `translateX(${
          (itemIndex - index) * width
        }px) scale(1)`;
      }
    });
  };

  useEffect(() => {
    itemList.forEach((item, itemIndex) => {
      if (itemIndex === 0 && selectedIndex === itemList.length - 1)
        item.style.transform = `translateX(${width}px) scale(1)`;
      else if (itemIndex === itemList.length - 1 && selectedIndex === 0)
        item.style.transform = `translateX(${-width}px) scale(1)`;
      else {
        item.style.transform = `translateX(${
          (itemIndex - selectedIndex) * width
        }px) scale(1)`;
      }
    });
  }, [width]);

  return (
    <Styled.ElCarousel>
      <Styled.ElCarouselContainer
        ref={(el: any) => setWidth(el?.offsetWidth || 0)}
      >
        <Styled.ElCarouselLayer>
          {eventList.map((event, index) => (
            <ElCarouselItem
              event={event}
              index={index}
              selectedIndex={selectedIndex}
              width={width}
              itemList={itemList}
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
