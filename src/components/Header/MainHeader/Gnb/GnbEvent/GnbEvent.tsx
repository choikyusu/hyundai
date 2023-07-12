import Image from 'next/image';
import Link from 'next/link';
import { styled } from 'styled-components';

export const GnbEvent = () => {
  return (
    <Styled.GnbEvent>
      <Styled.EventContent>
        <Styled.CardWrapper>
          <Styled.CarouselContainer>
            <Styled.CarouselLayer>
              <Styled.CarouselItem>
                <Styled.CarouselGroups>
                  <Styled.CarouselUnit>
                    <Styled.EventList>
                      <Styled.Event href="/asdf">
                        <Styled.ImageWrapper>
                          <Image src="/asdf" width={200} height={200} alt="" />
                        </Styled.ImageWrapper>
                        <Styled.InnerContent>
                          <Styled.Title>
                            아반떼, 코나 7월 특별 금융 프로그램
                          </Styled.Title>
                          <Styled.Date>2023.07.07 ~ 2023.07.31</Styled.Date>
                        </Styled.InnerContent>
                      </Styled.Event>
                    </Styled.EventList>
                  </Styled.CarouselUnit>
                </Styled.CarouselGroups>
              </Styled.CarouselItem>
            </Styled.CarouselLayer>
          </Styled.CarouselContainer>
        </Styled.CardWrapper>
      </Styled.EventContent>
    </Styled.GnbEvent>
  );
};

const Styled = {
  GnbEvent: styled.div`
    position: relative;
    padding: 25px 15px 10px;
    background: #fff;
  `,
  EventContent: styled.div``,
  CardWrapper: styled.div`
    overflow-x: hidden;
    position: relative;
  `,
  CarouselContainer: styled.div`
    height: calc(23.64vw + 40px) !important;
    padding-bottom: 40px;
    position: relative;
  `,
  CarouselLayer: styled.div`
    width: 100%;
    height: 100%;
  `,
  CarouselItem: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    overflow: hidden;
    z-index: 0;
    z-index: 2; // 확인
  `,
  CarouselGroups: styled.ul`
    display: flex;
    flex-wrap: nowrap;
  `,
  CarouselUnit: styled.li`
    width: 100%;
  `,
  EventList: styled.div`
    width: 100%;
    flex-shrink: 1;
  `,
  Event: styled(Link)`
    display: flex;
  `,
  ImageWrapper: styled.div`
    overflow: hidden;
    width: 45%;
    height: 23.64vw;
    border: 1px solid #ddd;
  `,
  InnerContent: styled.div``,
  Title: styled.strong``,
  Date: styled.span``,
};
