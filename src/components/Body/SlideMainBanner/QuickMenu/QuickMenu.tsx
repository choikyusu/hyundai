import Link from 'next/link';
import styled from 'styled-components';
import { quickMenuList } from './data/data';
import { useViewportSize } from '@/src/hooks/useViewportSize';
import { ElCarousel } from '@/src/components/common/ElCarousel/ElCarousel';

export const QuickMenu = () => {
  const { isMobile } = useViewportSize();

  const config: ElCarouselConfigType = {
    showArrow: { small: false, medium: true, large: true },
    contentCountBySlide: {
      small: { total: 1, cols: 1 },
      medium: { total: 6, cols: 6 },
      large: { total: 6, cols: 6 },
    },
    style: {
      grid: {
        templateColumns: {
          small: 'repeat(1, 1fr)',
          medium: 'repeat(6, 1fr)',
          large: 'repeat(6, 1fr)',
        },
        gap: {
          small: '2.55%',
          medium: '2.55%',
          large: '2.55%',
        },
      },
      arrow: {
        background: 'transparent',
        size: '18px',
        color: 'black',
      },
    },
  };

  return (
    <Styled.QuickMenu>
      {isMobile() ? (
        <Styled.ElCarouselItem>
          <Styled.ItemsWrap>
            {quickMenuList.map((menu, index) => (
              <Styled.Icon key={index}>
                <Styled.TextButton
                  $imageUrl={menu.imageUrl}
                  href={menu.pageUrl}
                >
                  <span>{menu.name}</span>
                </Styled.TextButton>
              </Styled.Icon>
            ))}
          </Styled.ItemsWrap>
        </Styled.ElCarouselItem>
      ) : (
        <ElCarousel type="QuickMenu" config={config}>
          {quickMenuList.map((menu, index) => (
            <Styled.Icon key={index}>
              <Styled.TextButton $imageUrl={menu.imageUrl} href={menu.pageUrl}>
                <span>{menu.name}</span>
              </Styled.TextButton>
            </Styled.Icon>
          ))}
        </ElCarousel>
      )}
    </Styled.QuickMenu>
  );
};

const Styled = {
  ElCarouselItem: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    overflow: hidden;
    z-index: 0;

    text-align: center;

    height: 100px;

    @media screen and (max-width: 767px) {
      height: 177px;
    }

    @media screen and (max-width: 767px) {
      position: static;
      overflow-x: auto;
      padding: 20px 0 0 7px;
    }
  `,

  TextButton: styled(Link)<{ $imageUrl: string }>`
    @media screen and (max-width: 767px) {
      text-align: center;
    }

    @media screen and (max-width: 767px) {
      display: inline-block;
      vertical-align: middle;
    }

    @media screen and (max-width: 767px) {
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
    }

    @media screen and (max-width: 767px) {
      width: auto;
      height: auto;
      border-radius: 0;
      color: #002c5f;
      background-color: transparent;
    }

    @media screen and (max-width: 9999px) {
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
    }

    @media screen and (max-width: 767px) {
      padding-top: 0;
      font-size: 12px;
    }

    @media screen and (min-width: 768px) {
      text-align: center;
    }

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
      color: #002c5f;
      background-color: transparent;
    }

    @media screen and (min-width: 768px) {
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
    }

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

      @media screen and (max-width: 767px) {
        position: static;
        width: 28px;
        height: 28px;
        margin: 0 auto 10px;
      }

      background: url(${props => props.$imageUrl}) no-repeat;
      background-size: 100%;
    }
  `,

  Image: styled.img`
    width: 100%;
    margin: 0;
    object-fit: cover;
    height: auto !important;
    margin-top: -19px;
  `,
  QuickMenu: styled.div`
    @media screen and (max-width: 9999px) {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0 auto;
    }

    @media screen and (max-width: 767px) {
      position: absolute;
      width: auto;
      height: 177px;
      z-index: 99;
    }

    @media screen and (max-width: 9999px) {
      background: rgba(246, 243, 242, 0.5);
      z-index: 5;
    }
  `,
  ItemsWrap: styled.ul`
    display: flex;
    height: 100%;
    justify-content: center;

    @media screen and (max-width: 767px) {
      width: 129vw;
      height: 100%;
      display: block;
      overflow: hidden;
    }

    @media screen and (min-width: 768px) {
      display: flex;
      height: 100%;
      justify-content: center;
    }
  `,
  Icon: styled.div`
    position: relative;

    @media screen and (max-width: 767px) {
      width: 21.5vw;
      float: left;
      margin-bottom: 65px;
    }

    @media screen and (min-width: 768px) {
      position: relative;
      width: 100%;
    }
  `,
};
