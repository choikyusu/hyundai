import React from 'react';
import { styled } from 'styled-components';

interface DetailBoxProps {
  src: string;
  questionList: string[];
  children: React.ReactNode;
}

export const DetailBox = ({ src, questionList, children }: DetailBoxProps) => {
  return (
    <Styled.DetailBox>
      <Styled.QuestionBox>
        <Styled.H2>
          <Styled.Anipic>
            <Styled.Image src={src} />
          </Styled.Anipic>
          <Styled.Question>
            {questionList.map((question, index) => (
              <React.Fragment key={index}>
                {question}
                {index < questionList.length - 1 && <br />}
              </React.Fragment>
            ))}
          </Styled.Question>
        </Styled.H2>
      </Styled.QuestionBox>
      {children}
    </Styled.DetailBox>
  );
};

const Styled = {
  DetailBox: styled.article`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 767px) {
      display: block;
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    }

    @media screen and (min-width: 767px) and (max-width: 1200px) {
      display: block;
    }
  `,
  QuestionBox: styled.div`
    width: 50%;
    height: 580px;

    @media screen and (max-width: 767px) {
      width: 100%;
    }

    @media screen and (min-width: 767px) and (max-width: 1200px) {
      width: 100%;
      height: 500px;
    }

    @media screen and (max-width: 767px) {
      min-height: 280px;
      height: auto;
    }

    background: #fff;
    text-align: center;
  `,
  H2: styled.h2`
    font-family: 'HyundaiSansHeadKR';
    font-size: 36px;
    letter-spacing: -0.4px;
    color: #000;
    line-height: 50px;
    font-weight: 500;

    @media screen and (max-width: 767px) {
      padding: 65px 0 30px;
      font-family: 'HyundaiSansHeadKR';
      font-size: 16px;
      letter-spacing: -0.4px;
      color: #000;
      line-height: 22px;
    }
  `,

  Anipic: styled.div`
    display: block;
    width: 450px;
    margin: 30px auto 50px;

    @media screen and (max-width: 767px) {
      width: 180px;
      margin: 0 auto 20px;
      line-height: normal;
    }

    @media screen and (min-width: 767px) and (max-width: 1200px) {
      margin: 0 auto 20px;
    }
  `,
  Image: styled.img`
    @media screen and (max-width: 767px) {
      width: 100%;
    }
  `,
  Question: styled.div`
    @media screen and (max-width: 767px) {
      margin-top: 20px;
    }
  `,
};
