import Link from 'next/link';
import { styled } from 'styled-components';

interface TextLinkProps {
  headerType: HeaderMenuType;
}

export const TextLink = ({ headerType }: TextLinkProps) => {
  if (headerType !== 'Menu') return null;
  return (
    <Styled.TextLink
      href="/kr/ko/e/vehicles/eco-incentive?utm_source=hyundaicom&amp;utm_medium=display&amp;utm_campaign=2023_quickwin&amp;utm_content=gnb_util"
      title="전기 · 수소차 보조금 조회"
      target="_blank"
    >
      전기 · 수소차 <b>보조금 조회</b>
    </Styled.TextLink>
  );
};

const Styled = {
  TextLink: styled(Link)`
    position: relative;
    color: #fff;

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      right: -17px;
      width: 1px;
      height: 88%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      background-color: #fff;
    }
  `,
};
