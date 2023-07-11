import { CommonStyled } from '@/src/styles/CommonStyled';
import { styled } from 'styled-components';
import { MdOutlineCancel } from 'react-icons/md';
import { RiSearchLine } from 'react-icons/ri';

interface MobileSearchProps {
  isSearchClicked: boolean;
}

export const MobileSearch = ({ isSearchClicked }: MobileSearchProps) => {
  return (
    <Styled.Form $isSearchClicked={isSearchClicked}>
      <Styled.Fieldset>
        <Styled.Legend>통합검색</Styled.Legend>
        <Styled.InputWrapper>
          <Styled.Input
            type="text"
            title="통합 검색어 입력"
            placeholder="검색어를 입력해주세요"
          />
          <Styled.DeleteButton type="button">
            <MdOutlineCancel />
          </Styled.DeleteButton>
          <Styled.SearchButton type="submit">
            <RiSearchLine />
          </Styled.SearchButton>
        </Styled.InputWrapper>
        <div>
          <Styled.TabMenu>
            <Styled.TabMenuIconWrapper>
              <Styled.TabMenuIcon>
                <Styled.KeywordButton type="button" title="선택됨" $isActive>
                  <span data-v-e91b5046="">최근 검색어</span>
                </Styled.KeywordButton>
              </Styled.TabMenuIcon>
              <Styled.TabMenuIcon>
                <Styled.KeywordButton type="button" title="" $isActive={false}>
                  <span data-v-e91b5046="">인기 검색어 TOP 10</span>
                </Styled.KeywordButton>
              </Styled.TabMenuIcon>
            </Styled.TabMenuIconWrapper>
          </Styled.TabMenu>
          <div>
            <Styled.MobileTabList data-id="recentKeyword">
              <li>
                <button type="button">
                  <span>지능형 속도 제한 보조</span>
                </button>
              </li>
            </Styled.MobileTabList>
            <Styled.MobileTabList data-id="topKeyword">
              <li>
                <button type="button">
                  <span>1위. 사양조회</span>
                </button>
              </li>
            </Styled.MobileTabList>
            <button type="button">검색 기록 삭제</button>
          </div>
        </div>
      </Styled.Fieldset>
    </Styled.Form>
  );
};

const Styled = {
  Form: styled.form<{ $isSearchClicked: boolean }>`
    display: ${props => (props.$isSearchClicked ? 'block' : 'none')};
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
  InputWrapper: styled.div`
    padding: 10px 15px;
    position: relative;
    width: 100%;
    height: 60px;
    font-size: 13px;
    line-height: 21px;
    letter-spacing: -0.4px;
    background: #007fa8;
    display: flex;
    justify-content: space-between;

    ::placeholder {
      color: #fff;
      font-size: 13px;
    }
  `,
  Input: styled(CommonStyled.Input)`
    position: relative;
    width: calc(100% - 68px);
    height: 100%;
    color: #fff;
    border: 0;
    background: none;
  `,
  DeleteButton: styled(CommonStyled.Button)`
    svg {
      width: 18px;
      height: 18px;
    }
  `,
  SearchButton: styled(CommonStyled.Button)`
    svg {
      width: 18px;
      height: 18px;
    }
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
  KeywordButton: styled(CommonStyled.LiButton)<{ $isActive: boolean }>`
    height: 32px;
    font-size: 12px;
    background: ${props => (props.$isActive ? '#007fa8' : '#f6f3f2')};
    color: ${props => (props.$isActive ? '#fff' : '#666')};
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
  `,
  MobileTabList: styled.ul``,
};
