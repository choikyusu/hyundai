import Link from 'next/link';
import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface SelectButtonProps {
  children: ReactNode;
  list: DropdownListType;
  isOpen: boolean;
}

export const SelectButton = ({ children, list, isOpen }: SelectButtonProps) => {
  return (
    <>
      {children}
      <Styled.ListWrap $isOpen={isOpen}>
        <Styled.DropdownList>
          {list.map((item, index) => (
            <Styled.DropdownItem key={index}>
              <Styled.Link href={item.pageUrl}>{item.name}</Styled.Link>
            </Styled.DropdownItem>
          ))}
        </Styled.DropdownList>
      </Styled.ListWrap>
    </>
  );
};

const Styled = {
  ListWrap: styled.div<{ $isOpen: boolean }>`
    display: ${props => (props.$isOpen ? 'block' : 'none')};

    @media screen and (max-width: 767px) {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      z-index: 11;
      width: 100% !important;
      padding: 10px 0;
      background: #f6f3f2;
      color: #002c5f;
      box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
    }

    @media screen and (min-width: 768px) {
      position: absolute;
      top: 55px;
      left: 50%;
      z-index: 999;
      width: 108px;
      min-height: 1em;
      background: #fff;
      border: 1px solid #eee;
      border-top: 0;
      transform: translateX(-50%);
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      top: 47px;
    }
  `,
  DropdownList: styled.ul`
    @media screen and (min-width: 768px) {
      padding: 10px 0 8px;
    }
  `,
  DropdownItem: styled.li`
    @media screen and (max-width: 767px) {
      display: block;
    }

    @media screen and (min-width: 768px) {
      padding: 8px 0;
      text-align: center;
    }
  `,
  Link: styled(Link)`
    @media screen and (max-width: 767px) {
      margin: 0 auto;
      display: block;
      color: #002c5f;
      font-family: 'HyundaiSansTextKR';
      font-size: 12px;
      line-height: 20px;
      letter-spacing: -0.4px;
      letter-spacing: 0;
      line-height: 48px;
    }

    @media screen and (max-width: 767px) {
      padding: 6px 0;
      width: 100%;
      height: auto;
      text-align: center;
      vertical-align: middle;
      line-height: unset;
    }

    @media screen and (min-width: 768px) {
      outline: none;
      text-decoration: none;
      color: #666;
    }

    @media screen and (min-width: 768px) {
      position: relative;
      display: inline-block;
      padding: 0;
      vertical-align: middle;
      font-size: 15px;
    }
  `,
};
