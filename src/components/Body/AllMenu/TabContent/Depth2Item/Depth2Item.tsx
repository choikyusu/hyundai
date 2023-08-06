import Link from 'next/link';
import { styled } from 'styled-components';

interface Depth2ItemProps {
  name: string;
}

export const Depth2Item = ({ name }: Depth2ItemProps) => {
  return (
    <Styled.Depth2Item>
      <Styled.Depth2ItemLink href="">{name}</Styled.Depth2ItemLink>
    </Styled.Depth2Item>
  );
};

const Styled = {
  Depth2Item: styled.li``,
  Depth2ItemLink: styled(Link)`
    display: block;
    font-family: 'HyundaiSansHeadKRR';
    font-size: 16px;
    line-height: 30px;
    letter-spacing: -0.4px;
    color: #666;
    word-break: keep-all;
  `,
};
