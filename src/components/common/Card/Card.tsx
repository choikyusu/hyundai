import { isLastIndex } from '@/src/utils/array.utils';
import Link from 'next/link';
import React from 'react';
import { styled } from 'styled-components';

interface CardProps {
  title: string;
  linkText: string;
  linkUrl: string;
  descriptionList: string[];
}

export const Card = ({
  title,
  linkText,
  linkUrl,
  descriptionList,
}: CardProps) => {
  return (
    <>
      <Styled.Title>
        {title}
        <Styled.Link href={linkUrl}>{linkText}</Styled.Link>
      </Styled.Title>
      <Styled.Text>
        {descriptionList.map((desc, index) => (
          <React.Fragment key={index}>
            {desc}
            {!isLastIndex(index).at(descriptionList) && <br />}
          </React.Fragment>
        ))}
      </Styled.Text>
    </>
  );
};

const Styled = {
  AppWrap: styled.div`
    position: relative;
    width: 288px;
    height: 440px;
    padding: 33px 0 0 40px;
    text-align: left;
    background-color: #f6f3f2;

    width: calc(100% - 56px);
    height: auto;
    margin: 40px auto 0;
    padding-bottom: 31px px;

    width: calc(100% - 30px);
    margin: 30px 15px 0;
    padding: 30px 15px 25px;

    &:before {
      position: absolute;
      right: 40px;
      bottom: 36px;
      display: block;
      content: '';
      width: 120px;
      height: 120px;
      background: url(/images/re_hyundaishop_app.png) no-repeat;

      width: 60px;
      height: 60px;
      right: 40px px;
      bottom: 30px;
      background-size: 100%;

      right: 16px;
      bottom: 30px;
    }
  `,
  Title: styled.div`
    font-family: 'HyundaiSansHeadKR';
    font-size: 30px;
    font-weight: 400;
    line-height: 44px;
    letter-spacing: -0.4px;

    font-size: 21px;
    line-height: 15px;
  `,
  Link: styled(Link)`
    position: absolute;
    left: 40px;
    top: 200px;
    font-size: 16px;
    line-height: 21px;
    color: #012d5e;

    position: static;

    font-size: 14px;

    &:before {
      margin: 0 15px;
      display: inline-block;
      content: '';
      width: 1px;
      height: 12px;
      background: #999;
      vertical-align: middle;
    }

    &:after {
      content: '';
      display: inline-block;
      width: 15px;
      height: 15px;
      vertical-align: middle;
      background-image: url(/images/ico_btn.png);
      background-repeat: no-repeat;
      background-position: 0 -18px;
      margin-left: 6px;
      position: relative;
      bottom: 1px;
    }
  `,
  Text: styled.div`
    margin-top: 2px;
    font-family: 'HyundaiSansTextKR';
    font-size: 16px;
    line-height: 30px;
    letter-spacing: -0.4px;
    color: #666;

    font-size: 14px;
    line-height: 22px;
  `,
};
