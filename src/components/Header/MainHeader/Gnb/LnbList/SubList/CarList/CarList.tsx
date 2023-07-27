import { styled } from 'styled-components';
import { useViewportSize } from '@/src/hooks/useViewportSize';
import { PCCarListStrategy } from './CardListRender/PCCarListStrategy';
import { MobileCarListStrategy } from './CardListRender/MobileCarListStrategy';

export interface CarListProps {
  isShow: boolean;
  subList: CarType[];
}

export const CarList = ({ isShow, subList }: CarListProps) => {
  const { isMobile } = useViewportSize();

  if (isMobile())
    return <MobileCarListStrategy isShow={isShow} subList={subList} />;
  return <PCCarListStrategy isShow={isShow} subList={subList} />;
};

export const Styled = {
  CarList: styled.ul<{ $isShow?: boolean }>`
    @media screen and (max-width: 767px) {
      display: ${props => (props.$isShow ? 'flex' : 'none')};
      padding: 0;
      background-color: #fff !important;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }

    @media screen and (max-width: 767px) {
      padding: 0 15px;
    }

    @media screen and (min-width: 768px) {
      display: none;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 30px clamp(10px, 5.6%, calc(33.33333% - 226.66667px));
      gap: 30px clamp(10px, 5.6%, calc(33.33333% - 226.66667px));
      position: absolute;
      top: 0;
      left: 18.29%;
      margin: 14px 0 0 6.43%;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      left: 176px;
      padding: 0;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 40px clamp(10px, 5.6%, calc(33.33333% - 170px));
      gap: 40px clamp(10px, 5.6%, calc(33.33333% - 170px));
      left: 165px;
      margin-left: 30px;
      padding: 0;
    }

    @media screen and (min-width: 768px) {
      position: static;
      left: 0;
      margin: 0;
    }

    @media screen and (min-width: 768px) {
      display: grid;
    }
  `,
  ElCarouselWrapper: styled.div<{ $isShow: boolean }>`
    overflow-y: hidden;
    height: ${props => (props.$isShow ? '100%' : '0')};

    position: absolute;
    top: 0;
    left: 18.29%;
    margin: 18px 0 0;
    padding: 0 4% 0 6.43%;
    width: 80%;

    left: 165px;
    padding: 0 2% 0 4%;
    width: calc(100% - 152px);
  `,
};
