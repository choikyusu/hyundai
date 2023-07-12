import { CommonStyled } from '@/src/styles/CommonStyled';
import { styled } from 'styled-components';

interface TabMenuProps {
  keyword: 'recent' | 'top';
  onClickKeyword: (selectedKeyword: 'recent' | 'top') => void;
}

export const TabMenu = ({ keyword, onClickKeyword }: TabMenuProps) => {
  return (
    <Styled.TabMenu>
      <Styled.TabMenuIconWrapper>
        <Styled.TabMenuIcon>
          <Styled.KeywordButton
            type="button"
            title="선택됨"
            $isActive={keyword === 'recent'}
            onClick={() => onClickKeyword('recent')}
          >
            <span>최근 검색어</span>
          </Styled.KeywordButton>
        </Styled.TabMenuIcon>
        <Styled.TabMenuIcon>
          <Styled.KeywordButton
            type="button"
            title=""
            $isActive={keyword === 'top'}
            onClick={() => onClickKeyword('top')}
          >
            <span>인기 검색어 TOP 10</span>
          </Styled.KeywordButton>
        </Styled.TabMenuIcon>
      </Styled.TabMenuIconWrapper>
    </Styled.TabMenu>
  );
};

const Styled = {
  KeywordButton: styled(CommonStyled.LiButton)<{ $isActive: boolean }>`
    height: 32px;
    font-size: 12px;
    background: ${props => (props.$isActive ? '#007fa8' : '#f6f3f2')};
    color: ${props => (props.$isActive ? '#fff' : '#666')};
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
  `,

  TabMenu: styled.div`
    margin-top: 10px;
  `,
  TabMenuIconWrapper: styled.ul`
    padding: 0 15px;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  `,
  TabMenuIcon: styled.li`
    width: 50%;
  `,
};
