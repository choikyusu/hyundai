import { CommonStyled } from '@/src/styles/CommonStyled';
import Link from 'next/link';
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai';
import { styled } from 'styled-components';
import { FooterMenuList, footerDataList } from './data/data';
import { useState } from 'react';

export const Footer = () => {
  const [isShow, setIsShow] = useState(false);
  const onClickMenuHide = () => {
    setIsShow(prev => !prev);
  };

  return (
    <Styled.Footer>
      <Styled.FooterInner>
        <Styled.AreaMenuToggle>
          <Styled.WrapMenuToggle>
            <Styled.Title>
              기업정보 · IR정보 · 지속가능경영
              <Styled.ArrowWrapper onClick={onClickMenuHide}>
                {isShow ? <AiOutlineUp /> : <AiOutlineDown />}
              </Styled.ArrowWrapper>
            </Styled.Title>
            {isShow && (
              <Styled.MenuListCompany>
                {footerDataList.map((footerData, index) => (
                  <Styled.WrapCategory key={index}>
                    <Styled.MenuCategory>
                      {footerData.Title}
                    </Styled.MenuCategory>
                    <Styled.WrapMenu>
                      {footerData.subMenuList.map(subMenu => (
                        <Styled.MenuCompany>
                          <Styled.Link href={subMenu.pageUrl}>
                            {subMenu.subTitle}
                          </Styled.Link>
                        </Styled.MenuCompany>
                      ))}
                    </Styled.WrapMenu>
                  </Styled.WrapCategory>
                ))}
              </Styled.MenuListCompany>
            )}
          </Styled.WrapMenuToggle>
        </Styled.AreaMenuToggle>
        <Styled.BottomArea>
          <Styled.InnerWrap>
            <Styled.FooterTop>
              <Styled.FooterLogo>
                <Styled.LogoImage src="/images/logo_footer.png" />
              </Styled.FooterLogo>
              <Styled.Menu>
                <Styled.SubMenuList>
                  {FooterMenuList.map((menu, index) => (
                    <Styled.SubMenuItem key={index}>
                      <Styled.Link href="" $color={menu.title.color}>
                        {menu.title.text}
                      </Styled.Link>
                    </Styled.SubMenuItem>
                  ))}
                </Styled.SubMenuList>
                <Styled.Copyright>
                  COPYRIGHT ⓒ HYUNDAI MOTOR COMPANY.
                  <br />
                  ALL RIGHTS RESERVED.
                </Styled.Copyright>
              </Styled.Menu>
            </Styled.FooterTop>
          </Styled.InnerWrap>
        </Styled.BottomArea>
      </Styled.FooterInner>
    </Styled.Footer>
  );
};

const Styled = {
  Footer: styled.footer`
    z-index: 0;

    position: relative;
  `,
  FooterInner: styled.div``,
  AreaMenuToggle: styled.div`
    background: #f6f3f2;
    padding: 15px 15px 0;
  `,
  WrapMenuToggle: styled.h3`
    max-width: 1120px;
    margin: 0 auto;
    border: 1px solid #e4dcd3;
    background-color: #fff;
    border-radius: 20px 20px 0 0;
  `,
  Title: styled(CommonStyled.Button)`
    cursor: pointer;
    background-color: transparent;
    border: none;

    display: flex;
    align-items: center;
    width: 100%;
    border-bottom: none;
    line-height: 1;

    padding: 18px 15px 15px;
    font-family: 'HyundaiSansHeadKR';
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.4px;
  `,
  ArrowWrapper: styled.i`
    margin-left: auto;
  `,
  MenuListCompany: styled.dl`
    padding: 0 15px 20px;
  `,
  WrapCategory: styled.div`
    padding: 25px 0;
    border-bottom: 1px solid #e5e5e5;

    padding-top: 10px;
  `,
  MenuCategory: styled.dt`
    color: #002c5f;

    margin-bottom: 10px;
    font-family: 'HyundaiSansHeadKR';
    font-size: 15px;
    line-height: 23px;
    letter-spacing: -0.4px;
    line-height: 1;
  `,
  WrapMenu: styled.div`
    display: flex;
    flex-wrap: wrap;
  `,
  MenuCompany: styled.dd`
    width: 50%;
  `,
  Link: styled(Link)<{ $color?: string }>`
    display: block;
    color: ${props => props.$color || '#444'};

    padding: 10px 0;
    font-family: 'HyundaiSansHeadKR';
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.4px;
    line-height: 1;
  `,
  BottomArea: styled.div`
    padding: 0;
    min-width: 320px;
    background-color: #1c1b1b;
    color: #999;
    font-family: 'HyundaiSansTextKRR';
    font-size: 13px;
    line-height: 21px;
    letter-spacing: -0.4px;
  `,
  InnerWrap: styled.div``,
  FooterTop: styled.div`
    position: relative;
  `,
  FooterLogo: styled.div`
    position: absolute;
    top: auto;
    bottom: 30px;
    left: 30px;
  `,
  LogoImage: styled.img`
    width: 45px;
  `,
  Menu: styled.div`
    padding: 0 15px 1px;
    width: 100%;
    margin-left: 0;
  `,
  SubMenuList: styled.ul`
    padding: 23px 0 0;
    overflow: hidden;
  `,
  SubMenuItem: styled.li`
    padding-bottom: 20px;

    float: left;
    width: 50%;
    margin: 7px 0;
  `,
  Copyright: styled.p`
    color: #999;
    font-family: 'HyundaiSansTextKR';
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.4px;

    padding: 26px 0 26px 80px;
    border-top: 1px solid #2a2a2a;
    border-bottom: 1px solid #2a2a2a;
  `,
  FooterMenuButton: styled.button``,
  FooterBottom: styled.div`
    padding: 130px 0 0;
    display: none;
  `,
};
