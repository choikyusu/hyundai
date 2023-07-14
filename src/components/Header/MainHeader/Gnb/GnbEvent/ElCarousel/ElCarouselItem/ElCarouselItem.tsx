import { styled } from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { RefObject, useEffect, useState } from 'react';

interface ElCarouselProps {
  index: number;
  selectedIndex: number;
  event: EventType;
  carouselContainerRef: RefObject<HTMLDivElement>;
}

export const ElCarouselItem = ({
  index,
  selectedIndex,
  event,
  carouselContainerRef,
}: ElCarouselProps) => {
  const [x, setX] = useState(0);

  useEffect(() => {
    console.log('??');
    if (carouselContainerRef.current) {
      console.log(
        index,
        selectedIndex,
        carouselContainerRef.current.offsetWidth,
      );
      setX((index - selectedIndex) * carouselContainerRef.current.offsetWidth);
    }
  }, [selectedIndex, index]);

  return (
    <Styled.ElCarouselItem
      style={{ transform: `translateX(${x}px) scale(1);` }}
    >
      <Styled.ElCarouselGroupList>
        <Styled.ElCarouselUnit>
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
        </Styled.ElCarouselUnit>
      </Styled.ElCarouselGroupList>
    </Styled.ElCarouselItem>
  );
};

const Styled = {
  ElCarouselItem: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    overflow: hidden;
    z-index: 0;
    z-index: 2; // 확인
  `,
  ElCarouselGroupList: styled.ul`
    display: flex;
    flex-wrap: nowrap;
  `,
  ElCarouselUnit: styled.li`
    width: 100%;
  `,
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
