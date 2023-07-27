import { ElCarousel } from '@/src/components/common/ElCarousel/ElCarousel';
import { CarListProps, Styled } from '../CarList';
import { Car } from './Car/Car';

export const PCCarListStrategy = ({ isShow, subList }: CarListProps) => {
  return (
    <Styled.ElCarouselWrapper $isShow={isShow}>
      <ElCarousel type="CarList" isAutoSlide={false} isArrowShow>
        <Styled.CarList>
          {subList.map((item, index) => (
            <Car key={index} {...item} />
          ))}
        </Styled.CarList>
      </ElCarousel>
    </Styled.ElCarouselWrapper>
  );
};
