import { styled } from 'styled-components';

interface ContentBottomProps {
  title: string;
  description: string;
}

export const ContentBottom = ({ title, description }: ContentBottomProps) => {
  return (
    <Styled.Wrap>
      <Styled.Link>
        <Styled.Title>{title}</Styled.Title>
        <Styled.ListDot>
          <Styled.ItemDot>{description}</Styled.ItemDot>
        </Styled.ListDot>
      </Styled.Link>
    </Styled.Wrap>
  );
};

const Styled = {
  Wrap: styled.div`
    padding: 60px 0;
    background-color: #f6f3f2;

    @media screen and (max-width: 767px) {
      padding: 30px 0;
    }
  `,
  Link: styled.div`
    max-width: 1150px;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;
  `,
  Title: styled.strong`
    display: block;
    margin-bottom: 15px;
    font-family: 'HyundaiSansHeadKR';
    font-size: 20px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: -0.4px;
    line-height: 1;

    @media screen and (max-width: 767px) {
      font-size: 14px;
    }
  `,
  ListDot: styled.ul`
    font-family: 'HyundaiSansHeadKRR';
    font-size: 16px;
    line-height: 30px;
    letter-spacing: -0.4px;
    color: #666;

    @media screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 20px;
    }
  `,
  ItemDot: styled.li`
    position: relative;
    padding-left: 10px;
  `,
};
