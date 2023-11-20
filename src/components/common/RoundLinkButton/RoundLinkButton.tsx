import Link from 'next/link';
import { styled } from 'styled-components';

interface RoundLinkButtonProps {
  url: string;
  text: string;
  query: Record<string, string | undefined>;
}

export const RoundLinkButton = ({ text, url, query }: RoundLinkButtonProps) => {
  const queryString = Object.keys(query)
    .map(key => `${key}=${query[key]}`)
    .join('&');

  return (
    <Styled.PrevBaseLink
      href={{
        pathname: url,
        search: queryString,
      }}
    >
      <Styled.ArrowLineLeft>{text}</Styled.ArrowLineLeft>
    </Styled.PrevBaseLink>
  );
};

const Styled = {
  PrevBaseLink: styled(Link)`
    position: absolute;
    left: 50%;
    bottom: -115px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 55px;
    border-radius: 31px;
    border: 3px solid #000;
    font-family: 'HyundaiSansHeadKR';
    font-size: 18px;
    letter-spacing: -0.4px;
    color: #000;
    line-height: 1;
    opacity: 0.8;
    transform: translateX(-50%);

    @media screen and (max-width: 767px) {
      height: 40px;
      border: 2px solid #000;
    }

    @media screen and (min-width: 767px) and (max-width: 1200px) {
      position: static;
      margin: 60px auto 0;
      transform: none;
    }

    &:hover {
      background: #000;
      color: #fff;
      opacity: 1;
    }
  `,
  ArrowLineLeft: styled.span`
    position: relative;
    width: 80%;
    text-align: center;

    @media screen and (max-width: 767px) {
      font-size: 14px;
    }
  `,
};
