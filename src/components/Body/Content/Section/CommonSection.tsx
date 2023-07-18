import { styled } from 'styled-components';

interface CommonSectionProps {
  children: React.ReactNode;
  title: string;
  titleTail: string[];
}

export const CommonSection = ({
  children,
  title,
  titleTail,
}: CommonSectionProps) => {
  return (
    <Styled.SectionWrapper>
      <Styled.Title>{title}</Styled.Title>
      <Styled.TitleTail>{titleTail}</Styled.TitleTail>
      {children}
    </Styled.SectionWrapper>
  );
};

const Styled = {
  SectionWrapper: styled.div`
    max-width: 1640px;
    margin: 0 auto;
    padding: 140px 0 0 !important;
    text-align: center;

    padding: 70px 0 0 !important;

    text-align: center;
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
  Br: styled.br`
    display: block;
  `,
};
