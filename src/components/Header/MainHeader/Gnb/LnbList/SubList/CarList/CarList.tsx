import { styled } from 'styled-components';
import { Car } from './Car/Car';
import { useEffect, useState } from 'react';
import { ElCarousel } from '@/src/components/common/ElCarousel/ElCarousel';

interface CarListProps {
  isShow: boolean;
  subList: CarType[];
}

export const CarList = ({ isShow, subList }: CarListProps) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 767);
  };

  useEffect(() => {
    setIsMobile(window.innerWidth <= 767);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile ? (
    <Styled.CarList $isShow={isShow}>
      {subList.map((item, index) => (
        <Car key={index} {...item} />
      ))}
    </Styled.CarList>
  ) : (
    <ElCarousel type="Events" isAutoSlide={false} isArrowShow>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
      <div>aaaa</div>
    </ElCarousel>
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
