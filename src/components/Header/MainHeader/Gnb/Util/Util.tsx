import { CommonStyled } from '@/src/styles/CommonStyled';
import Link from 'next/link';
import { styled } from 'styled-components';
import { BUTTON_STYLE } from './styles/buttonStyle';
import { useState } from 'react';
import { UnifiedSearch } from '../../../../common/UnifiedSearch/UnifiedSearch';
import { MdOutlineCancel } from 'react-icons/md';
import { useMenuProvider } from '@/src/contexts/MenuContext';
import { Login } from './Login/Login';
import { useHeaderMenu } from '@/src/hooks/useHeaderMenu';

export const Util = () => {
  const { headerType } = useMenuProvider();
  const { onClickType } = useHeaderMenu();
  const [language, setLanguage] = useState('KR');
  const [openType, setOpenType] = useState<PCSideMenuType | ''>('');
  const onClickButton = (type: PCSideMenuType) => {
    setOpenType(prev => (prev === type ? '' : type));
  };

  const [keyword, setKeyword] = useState('');

  const onChangeKeyword = () => {
    setKeyword('');
  };

  const onClickClose = () => onClickType('None');

  return (
    <Styled.UtilWrapper>
      <Styled.Util>
        <Login
          openType={openType}
          language={language}
          onClickButton={onClickButton}
        />
      </Styled.Util>
      <Styled.SearchWrap $isOpen={headerType === 'Search'}>
        <Styled.SearchInnerWrap>
          <Styled.Vsearch>
            <UnifiedSearch
              searchKeyword={keyword}
              onChangeKeyword={onChangeKeyword}
            />
            <Styled.RecentSearch>
              <ul>
                <Styled.RecentSearchItem>
                  <Styled.DefinitionList>
                    <Styled.DefinitionTerm>최근 검색어</Styled.DefinitionTerm>
                    <Styled.DefinitionDescrption>
                      <Styled.RecentItemButton>
                        ㅁㄴㅇㄻㄴㅇㄹ
                      </Styled.RecentItemButton>
                      <Styled.DeleteButton type="button">
                        <MdOutlineCancel />
                      </Styled.DeleteButton>
                    </Styled.DefinitionDescrption>
                  </Styled.DefinitionList>
                  <Styled.DeleteHistoryButton>
                    검색기록 삭제
                  </Styled.DeleteHistoryButton>
                </Styled.RecentSearchItem>
                <Styled.RecentSearchItem>
                  <Styled.DefinitionList>
                    <Styled.DefinitionTerm>
                      인기 검색어 Top10
                    </Styled.DefinitionTerm>
                    <Styled.DefinitionDescrption>
                      <Styled.RecentItemButton>
                        1위.네비게이션 업데이트
                      </Styled.RecentItemButton>
                    </Styled.DefinitionDescrption>
                    <Styled.DefinitionDescrption>
                      <Styled.RecentItemButton>
                        2위.사양조회
                      </Styled.RecentItemButton>
                    </Styled.DefinitionDescrption>
                    <Styled.DefinitionDescrption>
                      <Styled.RecentItemButton>
                        3위.가격표
                      </Styled.RecentItemButton>
                    </Styled.DefinitionDescrption>
                  </Styled.DefinitionList>
                </Styled.RecentSearchItem>
              </ul>
            </Styled.RecentSearch>
          </Styled.Vsearch>
          <Styled.VSearchButtonWrap>
            <Styled.CloseButton onClick={onClickClose} />
          </Styled.VSearchButtonWrap>
        </Styled.SearchInnerWrap>
      </Styled.SearchWrap>
    </Styled.UtilWrapper>
  );
};

export const Styled = {
  UtilWrapper: styled.div`
    @media screen and (max-width: 767px) {
      order: 1;
      margin-left: 0 !important;
      height: 48px;
      background: #f6f3f2;
      text-align: center;
      box-sizing: border-box;
    }

    @media screen and (min-width: 768px) {
      width: 29.8%;
      min-width: 250px;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      width: 30%;
      min-width: 250px;
    }
  `,
  Util: styled.div`
    @media screen and (max-width: 767px) {
      height: 48px;
      width: 100%;
      display: table;
      table-layout: fixed;
    }

    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
    }
  `,
  ItemUtil: styled.div`
    @media screen and (max-width: 767px) {
      display: table-cell;
      position: relative;
      vertical-align: middle;
      padding: 0 3px;
    }

    @media screen and (min-width: 768px) {
      position: relative;
      flex-shrink: 0;
    }
  `,
  MobileLoginButton: styled(Link)`
    ${BUTTON_STYLE}
  `,
  Divide: styled.div`
    width: 1px;
    height: 0.9em em;
    background: #999;
  `,
  SelectButton: styled(CommonStyled.Button)`
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
      width: 100%;
    }

    @media screen and (min-width: 768px) {
      outline: none;
      border: none;
    }
    @media screen and (min-width: 768px) {
      color: #000;
      height: 100%;
    }

    @media screen and (min-width: 768px) {
      font-family: 'HyundaiSansHeadKRR';
      font-size: 16px;
      line-height: 30px;
      letter-spacing: -0.4px;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 15px;
    }
  `,
  LoginButton: styled(CommonStyled.Button)`
    outline: none;
    border: none;

    color: #000;
    height: 100%;

    position: relative;

    &:after {
      content: '';
      display: inline-block;
      vertical-align: middle;
      width: 20px;
      height: 20px;
      background: url(/images/w_mypage.png) no-repeat;
      background-position: 0 0;
      background-size: 100%;
    }

    @media screen and (min-width: 768px) {
      &:after {
        content: '';
        display: inline-block;
        vertical-align: middle;
        width: 26px;
        height: 26px;
        background: url(/images/w_mypage.png) no-repeat;
        background-position: 0 0;
        background-size: 100%;
      }
    }
  `,
  SearchButton: styled(CommonStyled.Button)`
    @media screen and (max-width: 767px) {
      display: inline-block;
      width: 20px;
      height: 20px;

      svg {
        width: 20px;
        height: 20px;
      }
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      svg {
        width: 20px;
        height: 20px;
      }
    }

    @media screen and (min-width: 768px) {
      svg {
        color: #fff;
        width: 26px;
        height: 26px;
      }
    }
  `,
  MenuButton: styled(CommonStyled.Button)`
    @media screen and (max-width: 767px) {
      display: inline-block;
      width: 20px;
      height: 20px;

      svg {
        width: 20px;
        height: 20px;
      }
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      svg {
        width: 20px;
        height: 20px;
      }
    }

    @media screen and (min-width: 768px) {
      svg {
        color: #fff;
        width: 26px;
        height: 26px;
      }
    }
  `,
  SearchWrap: styled.div<{ $isOpen: boolean }>`
    display: none;
    @media screen and (min-width: 768px) {
      display: ${props => (props.$isOpen ? 'block' : 'none')};
      position: absolute;
      top: 80px;
      left: 0;
      width: 100%;
      padding: 0 30px;
      z-index: 999;
      background-color: #f2f2f2;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      top: 64px;
    }
  `,
  SearchInnerWrap: styled.div`
    @media screen and (min-width: 768px) {
      max-width: 1400px;
      margin: 0 auto;
    }

    @media screen and (min-width: 768px) {
      display: flex;
      height: 80px;
      justify-content: space-between;
      align-items: center;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      max-width: 100%;
      height: 64px;
    }

    @media screen and (min-width: 768px) {
      position: relative;
    }
  `,
  Vsearch: styled.fieldset`
    @media screen and (min-width: 768px) {
      width: 570px;
      margin: 20px auto;
    }

    @media screen and (min-width: 768px) {
      position: relative;
    }
    @media screen and (min-width: 768px) {
      padding: 0 !important;
      border: none;
    }
  `,
  VSearchButtonWrap: styled.div`
    display: inline-block;
    width: 100%;
    height: auto;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  `,
  CloseButton: styled(CommonStyled.Button)`
    @media screen and (min-width: 768px) {
      outline: none;
      border: none;
    }

    @media screen and (min-width: 768px) {
      position: relative;
      display: block;
      width: 50px;
      height: 50px;
      box-sizing: border-box;
      transition: 0.3s;
      z-index: 10;
      cursor: pointer;
    }

    @media screen and (min-width: 768px) {
      margin-right: -15px;
    }

    @media screen and (min-width: 768px) {
      position: absolute !important;
      right: 0 !important;
      top: -25px !important;
    }

    @media screen and (max-width: 767px) {
      display: none;
    }

    &:before {
      transform: rotate(-45deg);

      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 24px;
      height: 1px;
      margin: -0.5px 0 0 -12px;
      background-color: #000;
    }

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 24px;
      height: 1px;
      margin: -0.5px 0 0 -12px;
      background-color: #000;

      transform: rotate(45deg);
    }
  `,
  RecentSearch: styled.div`
    position: absolute;
    top: 73px;
    left: 0;
    z-index: 100;
    width: 100%;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    box-shadow:
      3px 3px 3px rgba(0, 0, 0, 0.026),
      -3px 3px 3px rgba(0, 0, 0, 0.026);
  `,
  RecentSearchItem: styled.li`
    position: relative;
    float: left;
    width: 50%;
    min-height: 578px;
  `,
  DefinitionList: styled.dl`
    padding: 30px 20px 12px;
  `,
  DefinitionTerm: styled.dt`
    padding-bottom: 18px;
    font-size: 16px;
    font-weight: 500;
    color: #000;
  `,
  DefinitionDescrption: styled.dd`
    padding: 0 22px 0 0;
    overflow: hidden;

    position: relative;
  `,
  RecentItemButton: styled(CommonStyled.Button)`
    @media screen and (min-width: 768px) {
      outline: none;
      border: none;
    }

    @media screen and (min-width: 768px) {
      display: block;
      height: 50px;
      line-height: 50px;
      font-family: 'HyundaiSansTextKR';
      font-size: 16px;
      line-height: 30px;
      letter-spacing: -0.4px;
      color: #666;
    }

    @media screen and (min-width: 768px) {
      line-height: 24px;
    }
  `,
  DeleteButton: styled(CommonStyled.Button)`
    @media screen and (min-width: 768px) {
      right: 0 !important;

      display: block;
      height: 50px;
      line-height: 50px;
      font-family: 'HyundaiSansTextKR';
      font-size: 16px;
      line-height: 30px;
      letter-spacing: -0.4px;
      color: #666;

      position: absolute;
      top: 50%;
      right: 55px;
      margin: -8px 0 0;

      position: absolute;
      top: 50%;
      right: 55px;
      width: 18px;
      height: 18px;
      margin: -9px 0 0;
      background-color: #cdcdcd;
      border-radius: 100%;

      svg {
        width: 20px;
        height: 20px;
      }
    }
  `,

  DeleteHistoryButton: styled(CommonStyled.Button)`
    @media screen and (min-width: 768px) {
      outline: none;
      border: none;
    }

    @media screen and (min-width: 768px) {
      position: absolute;
      top: 29px;
      right: 20px;
      margin-top: 2px;
      font-size: 14px;
      color: #777674;
      font-family: 'HyundaiSansTextKR';
      font-weight: 500;
    }
  `,
};
