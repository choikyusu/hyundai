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
    width: 100%;
    flex-shrink: 1;
  `,
  Event: styled(Link)`
    display: flex;
  `,
  ImageWrapper: styled.div`
    overflow: hidden;
    width: 45%;
    height: 23.64vw;
    border: 1px solid #ddd;
  `,
  Thumbnail: styled(Image)`
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  `,
  InnerContent: styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 2px 0 2px 20px;
    width: 55%;
    box-sizing: border-box;
    background-color: #fff;
  `,
  Title: styled.strong`
    font-family: 'HyundaiSansTextKR';
    font-size: 15px;
    line-height: 23px;
    letter-spacing: -0.4px;
    text-align: left;
    color: #000;
  `,
  Date: styled.span`
    font-family: 'HyundaiSansTextKRR';
    font-size: 13px;
    line-height: 21px;
    letter-spacing: -0.4px;
    color: #666;
    text-align: left;
    max-width: 280px;
  `,
};