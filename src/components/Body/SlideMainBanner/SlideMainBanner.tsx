import { CSSProp, css, styled } from 'styled-components';
import { ElCarousel } from '../../common/ElCarousel/ElCarousel';
import Link from 'next/link';
import { fluidList } from '../data/data';
import { Fluid } from './Fluid/Fluid';

export const SlideMainBanner = () => {
  return (
    <Styled.KeyVisualWrapper>
      <ElCarousel type="Main" config={{ autoSlide: true }}>
        {fluidList.map((fluid, index) => (
          <Fluid key={index} fluid={fluid} />
        ))}
      </ElCarousel>
      <Styled.QuickMenu>
        <Styled.ElCarouselItem $quickStyle={QUICK_MENU.ElCarouselItem}>
          <Styled.ItemsWrap>
            <Styled.Icon>
              <Styled.TextButton
                href="/kr/ko/e/vehicles/estimation"
                $quickStyle={QUICK_MENU.TextButton}
              >
                <span>견적내기</span>
              </Styled.TextButton>
            </Styled.Icon>
          </Styled.ItemsWrap>
        </Styled.ElCarouselItem>
      </Styled.QuickMenu>
    </Styled.KeyVisualWrapper>
  );
};

const QUICK_MENU = {
  ElCarouselItem: css`
    height: 177px;
    position: static;
    overflow-x: auto;
    padding: 20px 0 0 7px;
  `,
  TextButton: css`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    padding-top: 82px;
    font-family: 'HyundaiSansTextKR';
    font-size: 15px;
    line-height: 1;
    letter-spacing: -0.4px;
    color: #333;

    padding-top: 0;
    font-size: 12px;

    &:before {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      display: block;
      content: '';
      width: 50px;
      height: 50px;
      margin: 25px auto 10px;

      position: static;
      width: 28px;
      height: 28px;
      margin: 0 auto 10px;

      background: url(/images/common/button/ico_estimation.png) no-repeat;
      background-size: 100%;
    }
  `,
};

const Styled = {
  KeyVisualWrapper: styled.div`
    position: relative;
    margin: 0 auto;
    display: block;
    width: 100%;
    overflow: visible;
    background-color: rgb(246, 243, 242);
  `,

  ElCarouselItem: styled.div<{ $quickStyle?: CSSProp }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    overflow: hidden;
    z-index: 2;
    text-align: center;

    ${props => props.$quickStyle}
  `,

  TextButton: styled(Link)<{ $quickStyle?: CSSProp }>`
    display: inline-block;
    vertical-align: middle;

    width: 280px;
    height: 40px;
    border: 0;
    background: #002c5f;
    font-family: 'HyundaiSansTextKR';
    font-size: 15px;
    font-weight: 500;
    letter-spacing: -0.4px;
    color: #fff;
    cursor: pointer;

    width: auto;
    height: auto;
    border-radius: 0;
    color: #002c5f;
    background-color: transparent;

    ${props => props.$quickStyle}
  `,

  Image: styled.img`
    width: 100%;
    margin: 0;
    object-fit: cover;
    height: auto !important;
    margin-top: -19px;
  `,
  QuickMenu: styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;

    position: absolute;
    width: auto;
    height: 177px;
    z-index: 99;

    background: rgba(246, 243, 242, 0.5);
    z-index: 5;

    &:before {
      display: block;
      content: '';
      width: calc(100% - 30px);
      height: 1px;
      margin: 0 auto;
      background: rgba(0, 0, 0, 0.1);
    }
  `,
  ItemsWrap: styled.ul`
    display: flex;
    height: 100%;
    justify-content: center;

    width: 129vw;
    height: 100%;
    display: block;
    overflow: hidden;
  `,
  Icon: styled.li`
    position: relative;

    width: 21.5vw;
    float: left;
    margin-bottom: 65px;

    &:before {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      display: block;
      content: '';
      width: 50px;
      height: 50px;
      margin: 25px auto 10px;
    }
  `,
};
