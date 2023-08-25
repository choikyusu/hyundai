import { ElCarousel } from '@/src/components/common/ElCarousel/ElCarousel';
import { CarListProps, Styled } from '../CarList';
import { Car } from './Car/Car';
import { useState } from 'react';

export const PCCarListStrategy = ({ isShow, subList }: CarListProps) => {
  const config: ElCarouselConfigType = {
    showArrow: { small: true, medium: true, large: true },
    contentCountBySlide: {
      small: { total: 6, cols: 3 },
      medium: { total: 6, cols: 3 },
      large: { total: 6, cols: 3 },
    },
    style: {
      grid: {
        templateColumns: {
          small: 'repeat(3, 1fr)',
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

  const [openedIndex, setOpenedIndex] = useState<number | undefined>();

  return (
    <Styled.ElCarouselWrapper $isShow={isShow}>
      <ElCarousel type="CarList" config={config}>
        {subList.map((item, index) => (
          <Car
            key={index}
            {...item}
            index={index}
            openedIndex={openedIndex}
            setOpenedIndex={setOpenedIndex}
          />
        ))}
      </ElCarousel>
    </Styled.ElCarouselWrapper>
  );
};
