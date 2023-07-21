import { isLastIndex } from '@/src/utils/array.utils';
import React from 'react';
import { styled } from 'styled-components';

interface CommonSectionProps {
  children: React.ReactNode;
  title: string;
  titleTailList: string[];
}

export const CommonSection = ({
  children,
  title,
  titleTailList,
}: CommonSectionProps) => {
  return (
    <Styled.SectionWrapper>
      <Styled.Title>{title}</Styled.Title>
      <Styled.TitleTail>
        {titleTailList.map((titleTail, index) => (
          <React.Fragment key={index}>
            {titleTail}
            {!isLastIndex(index).at(titleTailList) && <br />}
          </React.Fragment>
        ))}
      </Styled.TitleTail>
      {children}
    </Styled.SectionWrapper>
  );
};

const Styled = {
  SectionWrapper: styled.div`
    max-width: 1640px;
    margin: 0 auto;
    text-align: center;
    width: 100%;
  `,
  Title: styled.h2`
    font-family: 'HyundaiSansHeadKR';
    font-size: 27px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: -0.4px;
  `,
  TitleTail: styled.p`
    color: #666;

    margin: 12px 0 0;
    font-family: 'HyundaiSansTextKR';
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.4px;
  `,
};
