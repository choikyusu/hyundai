import React from 'react';
import { styled } from 'styled-components';

interface VisualHeadProps {
  title: string;
  descList: string[];
  children: React.ReactNode;
}

export const VisualHead = ({ title, descList, children }: VisualHeadProps) => {
  return (
    <Styled.VisualWrap>
      {children}
      <Styled.VisualHeadWrap>
        <Styled.VisualTitle>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Description>
            {descList.map((desc, index) => (
              <React.Fragment key={index}>
                {index !== 0 && <br />}
                {desc}
              </React.Fragment>
            ))}
          </Styled.Description>
        </Styled.VisualTitle>
      </Styled.VisualHeadWrap>
    </Styled.VisualWrap>
  );
};

const Styled = {
  VisualWrap: styled.section`
    width: 100%;

    min-height: 360px;
    padding: 0;
    background-image: url(/images/bg/bg_visual_cloud.png);
    background-position: 50%;
    background-repeat: no-repeat;
  `,

  VisualHeadWrap: styled.div`
    display: block;
    height: 270px;
    margin: 0 60px;
    padding-top: 80px;
    background-color: hsla(0, 0%, 100%, 0.7);
  `,
  VisualTitle: styled.div`
    display: block;
    margin: 0 auto;
    text-align: center;
    opacity: 1;
  `,
  Title: styled.h2`
    margin: 0;
    font-family: 'HyundaiSansHeadKR';
    font-size: 58px;
    letter-spacing: -0.4px;
    color: #000;
    line-height: 51px;
    font-weight: 400;

    @media screen and (max-width: 767px) {
      font-family: 'HyundaiSansHeadKR';
      font-size: 28px;
      line-height: 34px;
      letter-spacing: -0.4px;
    }
  `,
  Description: styled.p`
    margin-top: 40px;
    font-family: 'HyundaiSansTextKR';
    font-size: 16px;
    letter-spacing: -0.4px;
    color: #000;
    line-height: normal;
    font-weight: 500;

    @media screen and (max-width: 767px) {
      margin: 15px auto 0;
      font-family: 'HyundaiSansTextKR';
      font-size: 14px;
      line-height: 22px;
      letter-spacing: -0.4px;
      word-break: keep-all;
    }
  `,
};
