import { styled } from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

interface EventProps {
  event: EventType;
}

export const Event = ({ event }: EventProps) => {
  return (
    <Styled.EventList>
      <Styled.Event href={event.pageUrl}>
        <Styled.ImageWrapper>
          <Styled.Thumbnail
            layout="responsive"
            width={200}
            height={200}
            src={event.imageUrl}
            alt={event.title}
          />
        </Styled.ImageWrapper>
        <Styled.InnerContent>
          <Styled.Title>{event.title}</Styled.Title>
          <Styled.Date>{event.date}</Styled.Date>
        </Styled.InnerContent>
      </Styled.Event>
    </Styled.EventList>
  );
};

const Styled = {
  EventList: styled.div`
    @media screen and (max-width: 767px) {
      width: 100%;
      flex-shrink: 1;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      width: 100%;
    }
  `,
  Event: styled(Link)`
    @media screen and (max-width: 767px) {
      display: flex;
    }

    @media screen and (min-width: 768px) {
      outline: none;
      text-decoration: none;
      color: #666;
    }

    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      -webkit-transition: 0.3s ease;
      transition: 0.3s ease;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      display: block;
    }
  `,
  ImageWrapper: styled.div`
    @media screen and (max-width: 767px) {
      overflow: hidden;
      width: 45%;
      height: 23.64vw;
      border: 1px solid #ddd;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      width: 100%;
    }

    @media screen and (min-width: 768px) {
      overflow: hidden;
    }
  `,
  Thumbnail: styled(Image)`
    @media screen and (max-width: 767px) {
      width: 100% !important;
      height: 100% !important;
      object-fit: cover;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      height: auto;
      object-fit: fill;
    }

    @media screen and (min-width: 768px) {
      width: 100%;
      border: 1px solid #ddd;
    }
    @media screen and (min-width: 768px) {
      vertical-align: top;
    }
  `,
  InnerContent: styled.div`
    @media screen and (max-width: 767px) {
      position: relative;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      padding: 2px 0 2px 20px;
      width: 55%;
      box-sizing: border-box;
      background-color: #fff;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      padding: 10px 0 0;
    }

    @media screen and (min-width: 768px) {
      position: relative;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      padding: 16px 12px 12px 24px;
      text-align: left;
      box-sizing: border-box;
    }
  `,
  Title: styled.strong`
    @media screen and (max-width: 767px) {
      font-family: 'HyundaiSansTextKR';
      font-size: 15px;
      line-height: 23px;
      letter-spacing: -0.4px;
      text-align: left;
      color: #000;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      line-height: 1.4;
    }

    @media screen and (min-width: 768px) {
      font-family: 'HyundaiSansHeadKR';
      font-size: 18px;
      font-weight: 400;
      line-height: 1.5;
      letter-spacing: 0;
      line-height: 28px;
      word-break: keep-all;
      color: #000;
    }
  `,
  Date: styled.span`
    max-width: 280px;

    @media screen and (max-width: 767px) {
      font-family: 'HyundaiSansTextKRR';
      font-size: 13px;
      line-height: 21px;
      letter-spacing: -0.4px;
      color: #666;
      text-align: left;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      margin-top: 10px;
      letter-spacing: -0.4px;
    }

    @media screen and (min-width: 768px) {
      margin-top: 10px;
      font-family: 'HyundaiSansHeadKRR';
      font-size: 15px;
      color: #666;
      letter-spacing: -0.4px;
    }
  `,
};
