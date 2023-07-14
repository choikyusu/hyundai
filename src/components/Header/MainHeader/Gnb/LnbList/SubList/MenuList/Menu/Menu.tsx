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
    background-color: #f6f3f2;
  `,
  Link: styled(Link)`
    width: auto;
    text-align: left;
    color: #000;
    display: block;
    position: relative;
    display: block;
    height: auto;
    padding: 0 15px 0 45px;
    background-color: #f6f3f2;
    border-bottom: 1px solid #e5e5e5;
    font-family: 'HyundaiSansHeadKR';
    font-size: 15px;
    line-height: 23px;
    letter-spacing: -0.4px;
    line-height: 39px;
    color: #666;
  `,
};
