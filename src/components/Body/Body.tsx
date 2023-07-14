import Link from 'next/link';
import { CSSProp, css, styled } from 'styled-components';
import { ContentWrap } from './Content/ContentWrap';

export const Body = () => {
  return (
    <Styled.ContantArea>
      <Styled.Container>
        <Styled.KeyVisualWrapper>
          <Styled.ElCarousel>
            <Styled.ElCarouselContainer>
              <Styled.ElCarouselLayer>
                <Styled.ElCarouselItem>
                  <Styled.ElCarouselGroupList>
                    <Styled.ElCarouselUnit>
                      <Styled.FluidContainer>
                        <Styled.TextWrap>
                          <Styled.LinkText href="/kr/ko/e/vehicles/palisade/intro">
                            <Styled.TextInner>
                              <Styled.CarName>PALISADE</Styled.CarName>
                              <Styled.SubText>당신의 모든 세상</Styled.SubText>
                            </Styled.TextInner>
                          </Styled.LinkText>
                        </Styled.TextWrap>
                        <Styled.TextButton href="/kr/ko/e/vehicles/palisade/intro">
                          <Styled.Span>
                            <Styled.Image src="/contents/mainbanner/palisade-24my-m.png" />
                          </Styled.Span>
                        </Styled.TextButton>
                      </Styled.FluidContainer>
                    </Styled.ElCarouselUnit>
                  </Styled.ElCarouselGroupList>
                </Styled.ElCarouselItem>
              </Styled.ElCarouselLayer>
            </Styled.ElCarouselContainer>
          </Styled.ElCarousel>
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
        <ContentWrap />
      </Styled.Container>
    </Styled.ContantArea>
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
  ContantArea: styled.div`
    position: relative;
  `,
  Container: styled.div``,
  KeyVisualWrapper: styled.div`
    position: relative;
    margin: 0 auto;
    display: block;
    width: 100%;
    overflow: visible;
    background-color: rgb(246, 243, 242);
  `,
  ElCarousel: styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    height: 162.5vw;
  `,
  ElCarouselContainer: styled.div`
    position: relative;
    overflow: visible;
    height: 162.5vw !important;
  `,
  ElCarouselLayer: styled.div`
    width: 100%;
    height: 100%;
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
  ElCarouselGroupList: styled.ul`
    display: flex;
    flex-wrap: nowrap;
    height: 100%;
    justify-content: center;
  `,
  ElCarouselUnit: styled.li`
    position: relative;
    width: 100%;
    flex: 1 1 1;
  `,
  FluidContainer: styled.div`
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    max-width: 2560px;
    margin: 0 auto;
    background-size: cover !important;
    background: url(/contents/mainbanner/car-bg-m.jpg) center top / auto 100%
      no-repeat;
  `,
  TextWrap: styled.div`
    position: absolute;
    left: 7vw;
    top: 152px;
    right: 0;
    z-index: 1;
    width: 1260px;
    height: auto;
    margin: 0 auto;
    text-align: left;

    left: 5vw;
    top: 26vw;
    width: auto;
  `,
  LinkText: styled(Link)`
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
    background: transparent;

    width: 100%;
    text-align: left;
  `,
  Span: styled.span`
    display: inline-block;
    vertical-align: middle;
  `,
  TextInner: styled.div``,
  CarName: styled.p`
    font-family: 'HyundaiSansHeadKR';
    font-size: 86px;
    letter-spacing: 0;
    color: #000;
    line-height: 82px;
    letter-spacing: -0.25px;
    text-align: left;

    letter-spacing: -0.25px;
    word-break: keep-all;

    font-size: 8.35vw;
    line-height: 1.27em;
  `,
  SubText: styled.p`
    margin-top: 14px;
    font-family: 'HyundaiSansHeadKR';
    font-size: 26px;
    letter-spacing: 0;
    color: #000;
    line-height: 38px;
    letter-spacing: -0.25px;
    text-align: left;

    margin-top: 2.5vw;
    font-size: 5vw;
    letter-spacing: -0.25px;
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
