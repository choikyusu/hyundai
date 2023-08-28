import { Car } from './Car/Car';
import { CarListProps, Styled } from '../CarList';

export const MobileCarListStrategy = ({ isShow, subList }: CarListProps) => {
  return (
    <Styled.CarList $isShow={isShow}>
      {subList.map((item, index) => (
        <Car key={index} index={index} {...item} />
      ))}
    </Styled.CarList>
  );
};
