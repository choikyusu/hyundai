import { CommonStyled } from '@/src/styles/CommonStyled';
import { styled } from 'styled-components';
import Link from 'next/link';
import { footerDataList } from '../../Footer/data/data';
import { useAllMenu } from './hook/useAllMenu';

export const AllMenu = () => {
  const { keyword, treeList, filteredTreeList, onChange } = useAllMenu();
  return (
    <Styled.AllMenu>
      <Styled.Container>
        <Styled.TitleWrap>
          <Styled.InputWrap>
            <Styled.SearchInput>
              <Styled.ElInput
                placeholder="검색어를 입력해 주세요."
                onChange={onChange}
              />
              <Styled.SearchButton />
            </Styled.SearchInput>
          </Styled.InputWrap>
        </Styled.TitleWrap>
        <Styled.ContentWrap>
          <Styled.TabMenuList>
            {treeList.map(menu => (
              <Styled.TabMenu>
                <Styled.MenuButton>{menu.name}</Styled.MenuButton>
              </Styled.TabMenu>
            ))}
          </Styled.TabMenuList>
          <Styled.TabContentList>
            {filteredTreeList.map(level1 => (
              <Styled.TabContent>
                <Styled.TabTitle>{level1.name}</Styled.TabTitle>
                <Styled.Depth1>
                  {level1.level2List.map(level2 => (
                    <Styled.MoreButton>
                      <Styled.GnbTitle href="">{level2.name}</Styled.GnbTitle>
                      <Styled.Depth2>
                        {level2.type === 'Car' &&
                          level2.level3List.map(
                            level3 =>
                              level3.carName.indexOf(keyword) > -1 && (
                                <Styled.Depth2Item>
                                  <Styled.Depth2ItemLink href="">
                                    {level3.carName}
                                  </Styled.Depth2ItemLink>
                                </Styled.Depth2Item>
                              ),
                          )}
                        {level2.type === 'Menu' &&
                          level2.level3List.map(
                            level3 =>
                              level3.name.indexOf(keyword) > -1 && (
                                <Styled.Depth2Item>
                                  <Styled.Depth2ItemLink href="">
                                    {level3.name}
                                  </Styled.Depth2ItemLink>
                                </Styled.Depth2Item>
                              ),
                          )}
                        {level2.type === 'Footer' &&
                          level2.subMenuList.map(
                            level3 =>
                              level3.subTitle.indexOf(keyword) > -1 && (
                                <Styled.Depth2Item>
                                  <Styled.Depth2ItemLink href="">
                                    {level3.subTitle}
                                  </Styled.Depth2ItemLink>
                                </Styled.Depth2Item>
                              ),
                          )}
                      </Styled.Depth2>
                    </Styled.MoreButton>
                  ))}
                </Styled.Depth1>
              </Styled.TabContent>
            ))}
          </Styled.TabContentList>
        </Styled.ContentWrap>
      </Styled.Container>
    </Styled.AllMenu>
  );
};

const Styled = {
  AllMenu: styled.div`
    min-width: 768px;
    padding: 0 30px;
    background-color: #f6f3f2;
  `,
  Container: styled.div`
    position: relative;
    margin: 0 auto;
    max-width: 1400px;
  `,
  TitleWrap: styled.section`
    width: 100%;
    height: 248px;
    background-color: transparent;
  `,
  InputWrap: styled.div`
    margin: 0 auto;
    padding: 80px 0 0;
    width: 48.58%;
    min-width: 480px;
    -webkit-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
  `,
  SearchInput: styled.div`
    position: relative;
    display: inline-block;
    width: 100%;

    font-family: 'HyundaiSansTextKR';
  `,
  ElInput: styled.input`
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;

    height: 40px;
    padding: 0 20px;
    border: 1px solid #e4dcd3;
    background: #fff;
    box-sizing: border-box;
    border-radius: 0;
    font-family: 'HyundaiSansTextKR';
    font-size: 14px;
    letter-spacing: -0.4px;
    color: #000;
    line-height: 100%;

    padding: 0 20px;
    width: 100%;
    height: 60px;
    font-family: 'HyundaiSansHeadKRR';
    font-size: 21px;
    font-weight: 400;
    line-height: 1;
    font-size: 20px;
    letter-spacing: -0.4px;
    color: #767676;
    text-align: center;
    border: 0;
    border-bottom: 1px solid #000;
    box-sizing: border-box;
    background-color: transparent;
  `,
  SearchButton: styled(CommonStyled.Button)`
    @media screen and (min-width: 768px) {
      display: inline-block;
      vertical-align: middle;
    }

    @media screen and (min-width: 768px) {
      width: 180px;
      height: 50px;
      border: 0;
      background: #002c5f;
      font-family: 'HyundaiSansTextKR';
      font-size: 16px;
      font-weight: 500;
      letter-spacing: -0.4px;
      color: #fff;
      cursor: pointer;
    }

    @media screen and (min-width: 768px) {
      width: auto;
      height: auto;
      border-radius: 0;
      color: #000;
      background-color: transparent;
    }

    position: absolute;
    right: 0;
    bottom: 12px;
    padding: 0;
    font-family: 'HyundaiSansTextKR';
    font-size: 12px;
    line-height: 0;
    letter-spacing: 0.288px;
    color: #fff;
  `,
  ContentWrap: styled.section``,
  TabMenuList: styled.ul`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  `,
  TabMenu: styled.li`
    width: 100%;
    height: 60px;
    background: #444;
  `,
  MenuButton: styled(CommonStyled.Button)`
    @media screen and (min-width: 768px) {
      display: inline-block;
      vertical-align: middle;
    }

    @media screen and (min-width: 768px) {
      width: 180px;
      height: 50px;
      border: 0;
      background: #002c5f;
      font-family: 'HyundaiSansTextKR';
      font-size: 16px;
      font-weight: 500;
      letter-spacing: -0.4px;
      color: #fff;
      cursor: pointer;
    }

    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 1em;
      width: 100%;
      height: 100%;
      font-family: 'HyundaiSansTextKR';
      font-size: 16px;
      line-height: 30px;
      letter-spacing: -0.4px;
      font-size: 15px;
      color: #fff;
      background-color: #444;
    }
  `,
  TabContentList: styled.div`
    margin: 0 auto;
    width: 100%;
  `,
  TabContent: styled.div`
    display: block;
    padding: 75px 0;
    border-bottom: 1px solid #e4dcd3;
  `,
  TabTitle: styled.h2`
    font-family: 'HyundaiSansHeadKR';
    font-size: 30px;
    font-weight: 400;
    line-height: 44px;
    letter-spacing: -0.4px;
    color: #222;
  `,
  Depth1: styled.ul`
    margin-top: 45px;
  `,
  MoreButton: styled.li`
    margin-top: 35px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    grid-gap: 0 clamp(20px, 4vw, 57px);
    gap: 0 clamp(20px, 4vw, 57px);

    &:first-child {
      margin-top: 0;
    }
  `,
  GnbTitle: styled(Link)`
    display: flex;
    align-self: flex-start;
    width: 12.9%;
    min-width: 96px;
    font-family: 'HyundaiSansHeadKR';
    font-size: 18px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0;
    color: #222;
    word-break: keep-all;
  `,
  Depth2: styled.ul`
    display: grid;
    flex: 1;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 35px 10px;
    gap: 35px 10px;

    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  `,
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
