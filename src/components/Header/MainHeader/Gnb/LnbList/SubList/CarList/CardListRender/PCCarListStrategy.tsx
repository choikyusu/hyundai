import { ElCarousel } from '@/src/components/common/ElCarousel/ElCarousel';
import { CarListProps, Styled } from '../CarList';
import { Car } from './Car/Car';

export const PCCarListStrategy = ({ isShow, subList }: CarListProps) => {
  return (
    <Styled.ElCarouselWrapper $isShow={isShow}>
      <ElCarousel
        type="CarList"
        config={{
          showArrow: true,
          contentCountBySlide: { small: 6, medium: 6, large: 6 },
          style: { gridRowCount: { small: 3, medium: 3, large: 3 } },
        }}
      >
        {subList.map((item, index) => (
          <Car key={index} {...item} />
        ))}
      </ElCarousel>
    </Styled.ElCarouselWrapper>
  );
};
