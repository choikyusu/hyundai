import Link from 'next/link';
import { styled } from 'styled-components';

interface MovePageLinkProps {
  url: string;
  text: string;
}

export const MovePageLink = ({ url, text }: MovePageLinkProps) => {
  return (
    <Styled.MovePageLink href={url}>
      <Styled.MovePageSpan>{text}</Styled.MovePageSpan>
    </Styled.MovePageLink>
  );
};

const Styled = {
  MovePageLink: styled(Link)`
    position: relative;
    display: block;
    width: 44px;
    height: 44px;
    font-family: 'HyundaiSansTextKR';
    font-size: 24px;
    letter-spacing: -0.4px;
    color: #666;
    line-height: 1;
    font-weight: 500;
    background-color: rgba(0, 0, 0, 0.2);

    @media screen and (max-width: 767px) {
      width: 74px;
      background-color: transparent !important;
    }
  `,
  MovePageSpan: styled.span`
    position: absolute;
    top: 50%;
    display: inline-block;
    white-space: nowrap;
    transform: translateY(-50%);
    right: 60px;

    @media screen and (max-width: 767px) {
      font-size: 14px;
    }

    @media screen and (max-width: 767px) {
      right: 20px;
    }
  `,
};
