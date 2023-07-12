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
                      <Link href="/asdf">
                        <Styled.ImageWrapper>
                          <Image src="/asdf" width={100} height={100} alt="" />
                        </Styled.ImageWrapper>
                        <Styled.InnerContent>
                          <Styled.Title>
                            아반떼, 코나 7월 특별 금융 프로그램
                          </Styled.Title>
                          <Styled.Date>2023.07.07 ~ 2023.07.31</Styled.Date>
                        </Styled.InnerContent>
                      </Link>
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
  GnbEvent: styled.div``,
  EventContent: styled.div``,
  CardWrapper: styled.div``,
  CarouselContainer: styled.div``,
  CarouselLayer: styled.div``,
  CarouselItem: styled.div``,
  CarouselGroups: styled.ul``,
  CarouselUnit: styled.li``,
  EventList: styled.div``,
  ImageWrapper: styled.div``,
  InnerContent: styled.div``,
  Title: styled.strong``,
  Date: styled.span``,
};
