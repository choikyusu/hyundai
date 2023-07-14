import Link from 'next/link';
import { styled } from 'styled-components';

interface CarProps {
  isNew: boolean;
  imageUrl: string;
  carName: string;
  price: string;
  pageUrl: string;
}

export const Car = ({ carName, imageUrl, isNew, price, pageUrl }: CarProps) => {
  return (
    <Styled.CarInfoWrapper>
      <div>
        <Styled.AreaBadge href={pageUrl}>
          {isNew && <Styled.BadgeRect>NEW</Styled.BadgeRect>}
          <Styled.ElImage>
            <Styled.CarImage src={imageUrl} alt={carName} />
          </Styled.ElImage>
          <Styled.Title>{carName}</Styled.Title>
          <Styled.Info>{price}</Styled.Info>
        </Styled.AreaBadge>
      </div>
    </Styled.CarInfoWrapper>
  );
};

const Styled = {
  CarInfoWrapper: styled.li`
    width: 50%;
    min-width: 123px;
    min-height: 50px;
    overflow: hidden;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 20px;
    text-align: center;
  `,
  AreaBadge: styled(Link)`
    position: relative;
    text-align: center;
    width: auto;
    color: #000;
    display: block;
  `,
  BadgeRect: styled.i`
    display: inline-block;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0.02em;
    line-height: 1;
    font-size: 10px;
    font-family: 'HyundaiSansHeadKR';
    color: #007fa8;
    border: 1px solid #007fa8;
    position: absolute;
    top: -10px;
    left: -10px;
    z-index: 2;
    padding: 2px 6px;
    background-color: #fff;
  `,
  ElImage: styled.div`
    display: block;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
  `,
  CarImage: styled.img`
    width: 100%;
    object-fit: contain;
  `,
  Title: styled.span`
    display: block;
    width: 140%;
    margin-left: -20%;
    text-align: center;
    font-family: 'HyundaiSansTextKR';
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.4px;
  `,
  Info: styled.span`
    font-family: 'HyundaiSansTextKR';
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.4px;
  `,
};
