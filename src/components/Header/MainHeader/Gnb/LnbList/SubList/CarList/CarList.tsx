import { styled } from 'styled-components';
import { Car } from './Car/Car';

interface CarListProps {
  isShow: boolean;
  subList: CarType[];
}

export const CarList = ({ isShow, subList }: CarListProps) => {
  return (
    <Styled.CarList $isShow={isShow}>
      {subList.map((item, index) => (
        <Car key={index} {...item} />
      ))}
    </Styled.CarList>
  );
};

const Styled = {
  CarList: styled.ul<{ $isShow: boolean }>`
    display: ${props => (props.$isShow ? 'flex' : 'none')};
    padding: 0 15px;
    background-color: #fff !important;
    flex-wrap: wrap;
  `,
};
