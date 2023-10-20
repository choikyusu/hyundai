import Link from 'next/link';
import { styled } from 'styled-components';

interface BreadCrumbsProps {
  list: string[];
}
export const BreadCrumbs = ({ list }: BreadCrumbsProps) => {
  return (
    <Styled.TopBreadCrumb>
      <Styled.MenuList>
        {list.map((item, index) => (
          <Styled.MenuItem key={index}>
            <Styled.MenuLink href="">{item}</Styled.MenuLink>
          </Styled.MenuItem>
        ))}
      </Styled.MenuList>
    </Styled.TopBreadCrumb>
  );
};

const Styled = {
  TopBreadCrumb: styled.div`
    display: block;
    width: calc(100% - 120px);
    max-width: 1120px;
    margin: 0 auto;
  `,
  MenuList: styled.ul`
    display: flex;
  `,
  MenuItem: styled.li`
    display: flex;

    position: relative;
    justify-content: flex-start;
    align-items: center;
    padding: 0 14px;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      a {
        color: #007fa8;
        font-weight: 500;
      }
    }

    &:after {
      content: '';
      position: absolute;
      top: 42px;
      right: 0;
      display: inline-block;
      width: 5px;
      height: 5px;
      border-top: 1px solid #000;
      border-right: 1px solid #000;
      transform: rotate(45deg);
    }
  `,
  MenuLink: styled(Link)`
    position: relative;
    display: flex;
    align-items: center;
    height: 90px;
    font-family: 'HyundaiSansTextKR';
    font-size: 14px;
    letter-spacing: -0.4px;
    color: #000;
    line-height: 24px;
  `,
};
