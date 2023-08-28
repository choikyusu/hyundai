import Link from 'next/link';
import { styled } from 'styled-components';

interface MenuProps {
  name: string;
  pageUrl: string;
}

export const Menu = ({ name, pageUrl }: MenuProps) => {
  return (
    <Stlyed.Menu>
      <Stlyed.Link href={pageUrl}>{name}</Stlyed.Link>
    </Stlyed.Menu>
  );
};

const Stlyed = {
  Menu: styled.li`
    @media screen and (max-width: 767px) {
      background-color: #f6f3f2;
    }

    @media screen and (min-width: 768px) {
      list-style: none;
    }

    @media screen and (min-width: 768px) {
      text-align: left;
    }
  `,
  Link: styled(Link)`
    @media screen and (min-width: 768px) {
      outline: none;
      text-decoration: none;
      color: #666;
    }

    @media screen and (min-width: 768px) {
      position: relative;
      display: block;
      margin-right: -1em;
      padding: 10px 0;
      font-family: 'HyundaiSansHeadKRR';
      font-size: 14px;
      line-height: 30px;
      letter-spacing: -0.4px;
      line-height: 1.4;
      font-size: 15px;
      color: #666;
      word-break: keep-all;
      cursor: pointer;
    }

    @media screen and (max-width: 767px) {
      width: auto;
      text-align: left;
      color: #000;
      display: block;
    }

    @media screen and (max-width: 767px) {
      position: relative;
      display: block;
      height: auto;
      padding: 0 15px 0 45px;
      background-color: #f6f3f2;
      border-bottom: 1px solid #e5e5e5;
      font-family: 'HyundaiSansHeadKRR';
      font-size: 15px;
      line-height: 23px;
      letter-spacing: -0.4px;
      line-height: 39px;
      color: #666;
    }

    @media screen and (min-width: 768px) {
      &:hover {
        color: #007fa8;
      }
    }
  `,
};
