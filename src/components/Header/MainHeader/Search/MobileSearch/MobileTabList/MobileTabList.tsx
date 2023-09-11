import { CommonStyled } from '@/src/styles/CommonStyled';
import { styled } from 'styled-components';
import { RECENT } from '../MobileSearch';

interface MobileTabListProps {
  keywordType: number;
  list: string[];
}

export const MobileTabList = ({ keywordType, list }: MobileTabListProps) => {
  if (keywordType === RECENT && !list.length) return <NoSearchMessage />;
  return (
    <Styled.MobileTabList>
      {list.map((item, index) => (
        <Styled.MobileTabItem key={index}>
          <Styled.ItemLink type="button">
            <span>
              {keywordType === RECENT ? item : `${index + 1}위. ${item}`}
            </span>
          </Styled.ItemLink>
        </Styled.MobileTabItem>
      ))}
    </Styled.MobileTabList>
  );
};

export const NoSearchMessage = () => {
  return (
    <Styled.MobileTabList>
      <Styled.MobileTabItem>
        <Styled.Message>최근 검색 내역이 없습니다.</Styled.Message>
      </Styled.MobileTabItem>
    </Styled.MobileTabList>
  );
};

export const Styled = {
  MobileTabList: styled.ul`
    display: block;
    padding: 0 15px;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #e5e5e5;
    vertical-align: top;
  `,
  MobileTabItem: styled.li`
    position: relative;
    color: #666;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #e5e5e5;
    font-family: 'HyundaiSansTextKR';
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.4px;
  `,
  ItemLink: styled(CommonStyled.Button)`
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    color: #666;
    text-align: left;
  `,
  Message: styled.span`
    line-height: 50px !important;
  `,
};
