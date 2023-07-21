import { isLastIndex } from '@/src/utils/array.utils';
import Link from 'next/link';
import React from 'react';
import { styled } from 'styled-components';

interface ListItemProps {
  title?: string;
  description?: string[];
  imageUrl: string;
  textInImage?: string;
  pageUrl: string;
}

export const ListItem = ({
  title,
  description,
  imageUrl,
  textInImage,
  pageUrl,
}: ListItemProps) => {
  return (
    <Styled.Item $imageUrl={imageUrl}>
      <Styled.TextWrapper>
        {title && <Styled.Title>{title}</Styled.Title>}
        {description && (
          <Styled.Text>
            {description.map((desc, index) => (
              <React.Fragment key={index}>
                {desc}
                {!isLastIndex(index).at(description) && <br />}
              </React.Fragment>
            ))}
          </Styled.Text>
        )}
        {title && <Styled.MoreLink href={pageUrl}>자세히 보기</Styled.MoreLink>}
      </Styled.TextWrapper>
    </Styled.Item>
  );
};

const Styled = {
  Item: styled.li<{ $imageUrl: string }>`
    flex: none;
    width: calc(100% - 21vw);
    border: 1px solid #ccc;
    margin: 0 0 0 32px;
    padding: 32px 40px 36vw;
    background-size: auto 56% !important;

    margin-left: 16px;
    padding: 33px 2px 33vw 20px;

    margin-left: 15px;

    background: url(${props => props.$imageUrl}) no-repeat right bottom;
  `,
  TextWrapper: styled.div`
    text-align: left;
  `,
  Title: styled.h3`
    font-family: 'HyundaiSansHeadKR';
    font-size: 30px;
    font-weight: 400;
    line-height: 44px;
    letter-spacing: -0.4px;

    font-size: 21px;
    line-height: 15px;
  `,
  Text: styled.div`
    margin-top: 2px;
    font-family: 'HyundaiSansTextKR';
    font-size: 16px;
    line-height: 30px;
    letter-spacing: -0.4px;
    line-height: 26px;
    color: #666;

    margin: 12px 0 0;
    font-size: 14px;
    line-height: 22px;

    margin-bottom: 30px;
  `,
  MoreLink: styled(Link)`
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
    color: #000;
    background-color: transparent;

    color: #002c5f;

    margin: 32px 0 0;
    font-family: 'HyundaiSansHeadKR';

    margin: 23px 0 0;
    font-size: 14px;

    &:after {
      content: '';
      display: inline-block;
      width: 6px;
      height: 6px px;
      vertical-align: middle;
      border-color: #000;
      border-style: solid;
      border-width: 0 1px 1px 0;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      -webkit-transform: translateY(-10%) rotate(-45deg);
      transform: translateY(-10%) rotate(-45deg);
      margin-left: 6px;

      border-color: #002c5f;
    }
  `,
};
