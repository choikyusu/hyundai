import Link from 'next/link';
import { styled } from 'styled-components';

interface EventProps {
  event: EventType;
}

export const Event = ({ event }: EventProps) => {
  return (
    <Styled.Link href={event.pageUrl}>
      <Styled.ElImage>
        <Styled.Image src={event.imageUrl} />
      </Styled.ElImage>
      <Styled.Title>{event.title}</Styled.Title>
      <Styled.SubTitle>{event.subTitle}</Styled.SubTitle>
      <Styled.Information>
        <Styled.Date>{event.date}</Styled.Date>
      </Styled.Information>
    </Styled.Link>
  );
};

const Styled = {
  Link: styled(Link)`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,
  ElImage: styled.div`
    position: relative;
    display: inline-block;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
  `,
  Image: styled.img`
    display: block;
    width: 100%;
  `,
  Title: styled.h3`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    margin-top: 28px;
    font-family: 'HyundaiSansHeadKR';
    font-size: 18px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.4px;
    text-align: left;
  `,
  SubTitle: styled.p`
    color: #666;

    margin-top: 18px;
    font-family: 'HyundaiSansHeadKR';
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.4px;

    margin-top: 10px;
    text-align: left;
  `,
  Information: styled.p`
    color: #666;

    margin-top: 18px;
    font-family: 'HyundaiSansHeadKR';
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.4px;

    display: flex;
    grid-gap: 0 10px;
    gap: 0 10px;
    line-height: 1;
  `,
  Date: styled.span`
    max-width: 280px;
    margin-right: 35px;
  `,
};
