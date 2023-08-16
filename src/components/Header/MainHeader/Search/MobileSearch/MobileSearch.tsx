import { CommonStyled } from '@/src/styles/CommonStyled';
import { styled } from 'styled-components';
import { useMobileSearch } from './useMobileSearch';
import { MobileTabList } from './MobileTabList/MobileTabList';
import { TabMenu } from './TabMenu/TabMenu';
import { UnifiedSearch } from './UnifiedSearch/UnifiedSearch';
import { useMenuProvider } from '@/src/contexts/MenuContext';

export const MobileSearch = () => {
  const { headerType } = useMenuProvider();

  const {
    keywordType,
    searchKeyword,
    onChangeKeyword,
    onClickKeyword,
    onClickDeleteKeyword,
    recentList,
    topList,
  } = useMobileSearch();
  return (
    <Styled.Form $isShow={headerType === 'Search'}>
      <Styled.Fieldset>
        <Styled.Legend>통합검색</Styled.Legend>
        <UnifiedSearch
          searchKeyword={searchKeyword}
          onChangeKeyword={onChangeKeyword}
        />
        <div>
          <TabMenu keywordType={keywordType} onClickKeyword={onClickKeyword} />
          <div>
            <MobileTabList
              list={keywordType === 'recent' ? recentList : topList}
              keywordType={keywordType}
            />
            <Styled.TabFooterButton
              $isShow={keywordType === 'recent' && !!recentList.length}
              type="button"
              onClick={onClickDeleteKeyword}
            >
              검색 기록 삭제
            </Styled.TabFooterButton>
          </div>
        </div>
      </Styled.Fieldset>
    </Styled.Form>
  );
};

const Styled = {
  Form: styled.form<{ $isShow: boolean }>`
    display: none;
    @media screen and (max-width: 767px) {
      display: ${props => (props.$isShow ? 'block' : 'none')};
    }
  `,
  Fieldset: styled.fieldset`
    padding: 0;
    margin: 0;
    width: 100%;
    background: #fff;
  `,
  Legend: styled.legend`
    opacity: 0;
    font-size: 0;
    position: absolute;
    left: 0;
    top: 0;
  `,

  TabFooterButton: styled(CommonStyled.Button)<{ $isShow: boolean }>`
    display: ${props => (props.$isShow ? 'block' : 'none')};
    width: 100%;
    height: 50px;
    text-align: right;
    padding: 0 15px;
    line-height: 50px;
    background: #f5f5f5;
    font-family: 'HyundaiSansTextKR';
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.4px;
    color: #666;
  `,
};
