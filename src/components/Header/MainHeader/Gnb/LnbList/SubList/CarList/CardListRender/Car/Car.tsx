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
    @media screen and (max-width: 767px) {
      width: 50%;
      min-width: 123px;
      min-height: 50px;
      overflow: hidden;
      box-sizing: border-box;
      padding: 20px;
      text-align: center;
    }

    @media screen and (min-width: 768px) {
      overflow: hidden;
      position: relative;
      min-width: 170px;
      padding: 10px 10px 20.5px;
      text-align: center;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      min-width: auto;
    }

    @media screen and (min-width: 768px) {
      padding: 10px 10px 15px;
      width: auto;
      height: 216px;
      max-height: 216px;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      min-height: 192px;
    }

    @media screen and (max-width: 767px) {
      width: 50%;
    }
  `,
  AreaBadge: styled(Link)`
    @media screen and (max-width: 767px) {
      width: auto;
      text-align: left;
      color: #000;
      display: block;
    }

    @media screen and (max-width: 767px) {
      position: relative;
      text-align: center;
    }

    @media screen and (min-width: 768px) {
      outline: none;
      text-decoration: none;
      color: #666;
    }

    @media screen and (min-width: 768px) {
      display: block;
    }
  `,
  BadgeRect: styled.i`
    display: inline-block;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0.02em;
    line-height: 1;

    @media screen and (max-width: 767px) {
      padding: 2px 3px 1px;
      font-size: 10px;
    }

    @media screen and (min-width: 768px) {
      padding: 4px 5px 2px;
      font-size: 11px;
    }

    border: 1px solid #007fa8;
    background-color: #fff;
    font-family: 'HyundaiSansHeadKR';
    color: #007fa8;
    z-index: 2;

    position: absolute;
    top: 0;
    left: 0;
    margin: 0;

    @media screen and (max-width: 767px) &:first-child:nth-last-child(n+2) {
      margin-right: 5px;
    }

    @media screen and (max-width: 767px) {
      position: absolute;
      top: -10px;
      left: -10px;
      z-index: 2;
      padding: 2px 6px;
      background-color: #fff;
    }

    @media screen and (max-width: 767px) {
      color: #007fa8;
      border: 1px solid #007fa8;
    }

    @media screen and (min-width: 768px) {
      margin-right: 8px;
    }
  `,
  ElImage: styled.div`
    text-align: center;
    box-sizing: border-box;
    overflow: hidden;

    @media screen and (max-width: 767px) {
      display: block;
    }

    @media screen and (min-width: 768px) {
      overflow: visible;
      display: flex;
      justify-content: center;
    }
  `,
  CarImage: styled.img`
    width: 100%;
    object-fit: contain;
  `,
  Title: styled.span`
    @media screen and (min-width: 768px) {
      display: block;
    }

    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 120%;
      margin: 12px 0 8px -10%;
      font-family: 'HyundaiSansTextKR';
      font-size: 16px;
      line-height: 30px;
      letter-spacing: -0.4px;
      line-height: 100%;
      color: #000;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 14px;
    }

    @media screen and (max-width: 767px) {
      display: block;
      width: 140%;
      margin-left: -20%;
      text-align: center;
      font-family: 'HyundaiSansTextKR';
      font-size: 14px;
      line-height: 22px;
      letter-spacing: -0.4px;
    }
  `,
  Info: styled.span`
    @media screen and (min-width: 768px) {
      display: block;
    }

    @media screen and (min-width: 768px) {
      margin-bottom: 5px;
      font-family: 'HyundaiSansTextKRR';
      font-size: 14px;
      line-height: 28px;
      letter-spacing: -0.4px;
      font-size: 15px;
      color: #666;
      height: 30px;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 13px;
    }

    @media screen and (max-width: 767px) {
      font-family: 'HyundaiSansTextKRR';
      font-size: 14px;
      line-height: 22px;
      letter-spacing: -0.4px;
    }
  `,
};
