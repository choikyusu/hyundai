import Link from 'next/link';
import { styled } from 'styled-components';
import { useCarImage } from './useCarImage';
import { useViewportSize } from '@/src/hooks/useViewportSize';

interface CarImageProps {
  pageUrl: string;
  imageUrl?: {
    mobile: string;
    wide: string;
  };
  selected?: boolean;
}

export const CarImage = ({ pageUrl, imageUrl, selected }: CarImageProps) => {
  const { imageMoveAnimation } = useCarImage({ selected });
  const { isMobile } = useViewportSize();

  if (!imageUrl) return null;
  return (
    <Styled.TextButton href={pageUrl}>
      <Styled.Span>
        <Styled.Image
          ref={imageMoveAnimation}
          src={isMobile() ? imageUrl.mobile : imageUrl.wide}
          alt="차량 이미지"
        />
      </Styled.Span>
    </Styled.TextButton>
  );
};

const Styled = {
  TextButton: styled(Link)`
    @media screen and (max-width: 767px) {
      text-align: center;
    }

    @media screen and (max-width: 767px) {
      display: inline-block;
      vertical-align: middle;
    }

    @media screen and (max-width: 767px) {
      width: 280px;
      height: 40px;
      border: 0;
      background: #002c5f;
      font-family: 'HyundaiSansTextKR';
      font-size: 15px;
      font-weight: 500;
      letter-spacing: -0.4px;
      color: #fff;
      cursor: pointer;
    }

    @media screen and (max-width: 767px) {
      width: auto;
      height: auto;
      border-radius: 0;
      color: #002c5f;
      background-color: transparent;
    }

    @media screen and (min-width: 768px) {
      text-align: center;
    }

    @media screen and (min-width: 768px) {
      display: inline-block;
      vertical-align: middle;
    }

    @media screen and (min-width: 768px) {
      width: 180px;
      height: 50px;
      border: 0;
      background: #002c5f;
      font-family: 'HyundaiSansTextKR';
      font-size: 16px;
      font-weight: 500;
      letter-spacing: -0.4px;
      color: #fff;
      cursor: pointer;
    }

    @media screen and (min-width: 768px) {
      width: auto;
      height: auto;
      border-radius: 0;
      color: #002c5f;
      background-color: transparent;
    }
  `,
  Span: styled.span`
    display: inline-block;
    vertical-align: middle;
  `,

  Image: styled.img`
    position: relative;

    @media screen and (max-width: 767px) {
      width: 100%;
      margin: 0;
    }

    @media screen and (max-width: 9999px) {
      max-width: 100%;
      height: 380px !important;
      object-fit: cover;
      margin-top: 6vw;
    }

    @media screen and (max-width: 767px) {
      height: auto !important;
    }

    @media screen and (max-width: 767px) {
      margin-top: -19px;
    }

    @media screen and (min-width: 767px) and (max-width: 1200px) {
      width: 90%;
      height: auto !important;
    }

    @keyframes car_animation {
      0% {
        left: calc(100% - 50px);
      }
      100% {
        left: 0;
      }
    }
  `,
};
