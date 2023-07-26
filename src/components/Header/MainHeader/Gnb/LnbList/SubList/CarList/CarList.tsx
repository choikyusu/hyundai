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
    <Styled.ElCarouselWrapper>
      <ElCarousel type="CarList" isAutoSlide={false} isArrowShow>
        <Styled.CarList $isShow={isShow}>
          {subList.map((item, index) => (
            <Car key={index} {...item} />
          ))}
        </Styled.CarList>
      </ElCarousel>
    </Styled.ElCarouselWrapper>
  );
};

const Styled = {
  CarList: styled.ul<{ $isShow: boolean }>`
    display: ${props => (props.$isShow ? 'flex' : 'none')};
    padding: 0 15px;
    background-color: #fff !important;
    flex-wrap: wrap;
  `,
  ElCarouselWrapper: styled.div`
    overflow-y: hidden;
    height: 0;

    position: absolute;
    top: 0;
    left: 18.29%;
    margin: 18px 0 0;
    padding: 0 4% 0 6.43%;
    width: 80%;
    height: 100%;

    left: 165px;
    padding: 0 2% 0 4%;
    width: calc(100% - 152px);
  `,
};
