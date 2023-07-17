import Link from 'next/link';
import { styled } from 'styled-components';
import { useCarImage } from './useCarImage';

interface CarImageProps {
  pageUrl: string;
  imageUrl?: string;
  selected?: boolean;
}

export const CarImage = ({ pageUrl, imageUrl, selected }: CarImageProps) => {
  const { imageMoveAnimation } = useCarImage({ selected });

  if (!imageUrl) return null;
  return (
    <Styled.TextButton href={pageUrl}>
      <Styled.Span>
        <Styled.Image
          ref={imageMoveAnimation}
          src={imageUrl}
          alt="차량 이미지"
        />
      </Styled.Span>
    </Styled.TextButton>
  );
};

const Styled = {
  Span: styled.span`
    display: inline-block;
    vertical-align: middle;
  `,
  TextButton: styled(Link)`
    display: inline-block;
    vertical-align: middle;

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

    width: auto;
    height: auto;
    border-radius: 0;
    color: #002c5f;
    background-color: transparent;
  `,

  Image: styled.img`
    position: relative;
    width: 100%;
    margin: 0;
    object-fit: cover;
    height: auto !important;
    margin-top: -19px;

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
