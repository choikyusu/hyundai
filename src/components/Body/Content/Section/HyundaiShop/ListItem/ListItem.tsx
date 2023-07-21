import Link from 'next/link';
import React from 'react';
import { styled } from 'styled-components';

interface ListItemProps {
  imageUrl: string;
  textInImage?: string;
  pageUrl: string;
}

export const ListItem = ({ imageUrl, textInImage, pageUrl }: ListItemProps) => {
  return (
    <Styled.Item>
      <Styled.Link href={pageUrl}>
        <div>
          <Styled.Image src={imageUrl} />
        </div>
        <Styled.Text>{textInImage}</Styled.Text>
      </Styled.Link>
    </Styled.Item>
  );
};

const Styled = {
  Item: styled.li`
    position: relative;
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    margin: 0 0 0 32px;
    font-size: 0;

    width: calc(100% - 20vw);
    margin-left: 15px;
  `,
  Link: styled(Link)`
    display: block;
  `,
  Image: styled.img`
    height: 100%;
    width: 100%;
  `,
  Text: styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 9px 0 10px 20px;
    background: rgba(0, 0, 0, 0.5);
    font-family: 'HyundaiSansHeadKR';
    font-size: 18px;
    letter-spacing: -0.24px;
    color: #fff;
    line-height: 30px;
    text-align: left;

    height: 35px;
    line-height: 35px;
    padding: 0 0 0 15px;
    font-size: 15px;
  `,
};
