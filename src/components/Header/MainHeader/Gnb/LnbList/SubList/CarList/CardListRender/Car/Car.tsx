import { CommonStyled } from '@/src/styles/CommonStyled';
import Link from 'next/link';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { styled } from 'styled-components';

interface CarProps {
  isNew: boolean;
  imageUrl: string;
  carName: string;
  price: string;
  pageUrl: string;
  index: number;
  fuelEfficiency: string;
  passengerCount: number;
  displacement: string;
  openedIndex?: number | undefined;
  setOpenedIndex?: Dispatch<SetStateAction<number | undefined>>;
}

export const Car = ({
  carName,
  imageUrl,
  isNew,
  price,
  index,
  pageUrl,
  fuelEfficiency,
  passengerCount,
  displacement,
  openedIndex,
  setOpenedIndex,
}: CarProps) => {
  const [el, setEl] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (openedIndex === index) {
      if (el) {
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  }, [openedIndex]);

  return (
    <div
      style={{ paddingBottom: `${openedIndex === index ? '484px' : '0px'}` }}
    >
      <Styled.CarInfoWrapper
        onClick={() =>
          setOpenedIndex &&
          (openedIndex === index
            ? setOpenedIndex(undefined)
            : setOpenedIndex(index))
        }
      >
        <div>
          <Styled.AreaBadge>
            {isNew && <Styled.BadgeRect>NEW</Styled.BadgeRect>}
            <Styled.ElImage>
              <Styled.CarImage src={imageUrl} alt={carName} />
            </Styled.ElImage>
            <Styled.Title>{carName}</Styled.Title>
            <Styled.Info>{price}</Styled.Info>
          </Styled.AreaBadge>
        </div>
      </Styled.CarInfoWrapper>
      <Styled.ItemDetail
        ref={(el: HTMLDivElement) => setEl(el)}
        $isOpen={openedIndex === index}
      >
        <Styled.DetailWrap>
          <Styled.DetailInner>
            <Styled.DetailBox>
              <Styled.DetailInfo>
                <Styled.DetailBdge>
                  <Styled.DetailBadgeRect>NEW</Styled.DetailBadgeRect>
                </Styled.DetailBdge>
                <Styled.Description>Positive Energy, NEXO</Styled.Description>
                <Styled.DetailTitle>{carName}</Styled.DetailTitle>
                <Styled.LinkArticle>
                  <Styled.Link href="">자세히 보기</Styled.Link>
                </Styled.LinkArticle>
              </Styled.DetailInfo>
              <Styled.DetailSpec>
                <Styled.SpecList>
                  <Styled.SpecItem>
                    <Styled.SpecTitle>가격</Styled.SpecTitle>
                    <Styled.SpecValue>{price}</Styled.SpecValue>
                  </Styled.SpecItem>
                  <Styled.SpecItem>
                    <Styled.SpecTitle>연비</Styled.SpecTitle>
                    <Styled.SpecValue>{fuelEfficiency}</Styled.SpecValue>
                  </Styled.SpecItem>
                  <Styled.SpecItem>
                    <Styled.SpecTitle>승차 인원</Styled.SpecTitle>
                    <Styled.SpecValue>{passengerCount}명</Styled.SpecValue>
                  </Styled.SpecItem>
                  <Styled.SpecItem>
                    <Styled.SpecTitle>배기량</Styled.SpecTitle>
                    <Styled.SpecValue>{displacement}</Styled.SpecValue>
                  </Styled.SpecItem>
                </Styled.SpecList>
              </Styled.DetailSpec>
              <Styled.DetailImage>
                <Styled.ElImage>
                  <Styled.CarImage src="/contents/repn-car/side-45/main-ioniq6-22lc-45side.png" />
                </Styled.ElImage>
              </Styled.DetailImage>
            </Styled.DetailBox>
            <Styled.DetailButtonGroup>
              <Styled.LinkButton href="/vehicles/purchase-consult">
                구매 상담 신청
              </Styled.LinkButton>
              <Styled.LinkButton href="">내 차 만들기</Styled.LinkButton>
              <Styled.LinkButton href="">시승 신청</Styled.LinkButton>
            </Styled.DetailButtonGroup>
          </Styled.DetailInner>
        </Styled.DetailWrap>
      </Styled.ItemDetail>
    </div>
  );
};

const Styled = {
  CarInfoWrapper: styled.div`
    @media screen and (max-width: 767px) {
      width: 50%;
      min-width: 123px;
      min-height: 50px;
      overflow: hidden;
      box-sizing: border-box;
      padding: 20px;
      text-align: center;
    }

    @media screen and (min-width: 768px) {
      overflow: hidden;
      position: relative;
      min-width: 170px;
      padding: 10px 10px 20.5px;
      text-align: center;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      min-width: auto;
    }

    @media screen and (min-width: 768px) {
      padding: 10px 10px 15px;
      width: auto;
      height: 216px;
      max-height: 216px;

      display: flex;
      align-items: center;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      min-height: 192px;
    }

    @media screen and (max-width: 767px) {
      width: 50%;
    }

    @media screen and (min-width: 768px) {
      &:hover {
        border-radius: 20px;
        background: #e7e2e1;
      }
    }
  `,
  AreaBadge: styled(CommonStyled.Button)`
    @media screen and (max-width: 767px) {
      width: auto;
      text-align: left;
      color: #000;
      display: block;
    }

    @media screen and (max-width: 767px) {
      position: relative;
      text-align: center;
    }

    @media screen and (min-width: 768px) {
      outline: none;
      text-decoration: none;
      color: #666;
    }

    @media screen and (min-width: 768px) {
      display: block;
    }
  `,
  BadgeRect: styled.i`
    display: inline-block;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0.02em;
    line-height: 1;

    @media screen and (max-width: 767px) {
      padding: 2px 3px 1px;
      font-size: 10px;
    }

    @media screen and (min-width: 768px) {
      padding: 4px 5px 2px;
      font-size: 11px;
    }

    border: 1px solid #007fa8;
    background-color: #fff;
    font-family: 'HyundaiSansHeadKR';
    color: #007fa8;
    z-index: 2;

    position: absolute;
    top: 0;
    left: 0;
    margin: 0;

    @media screen and (max-width: 767px) &:first-child:nth-last-child(n+2) {
      margin-right: 5px;
    }

    @media screen and (max-width: 767px) {
      position: absolute;
      top: -10px;
      left: -10px;
      z-index: 2;
      padding: 2px 6px;
      background-color: #fff;
    }

    @media screen and (max-width: 767px) {
      color: #007fa8;
      border: 1px solid #007fa8;
    }

    @media screen and (min-width: 768px) {
      margin-right: 8px;
    }
  `,
  ElImage: styled.div`
    text-align: center;
    box-sizing: border-box;
    overflow: hidden;

    @media screen and (max-width: 767px) {
      display: block;
    }

    @media screen and (min-width: 768px) {
      overflow: visible;
      display: flex;
      justify-content: center;
    }
  `,
  CarImage: styled.img`
    width: 100%;
    object-fit: contain;
  `,
  Title: styled.span`
    @media screen and (min-width: 768px) {
      display: block;
    }

    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 120%;
      margin: 12px 0 8px -10%;
      font-family: 'HyundaiSansTextKR';
      font-size: 16px;
      line-height: 30px;
      letter-spacing: -0.4px;
      line-height: 100%;
      color: #000;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 14px;
    }

    @media screen and (max-width: 767px) {
      display: block;
      width: 140%;
      margin-left: -20%;
      text-align: center;
      font-family: 'HyundaiSansTextKR';
      font-size: 14px;
      line-height: 22px;
      letter-spacing: -0.4px;
    }
  `,
  Info: styled.span`
    @media screen and (min-width: 768px) {
      display: block;
    }

    @media screen and (min-width: 768px) {
      margin-bottom: 5px;
      font-family: 'HyundaiSansTextKRR';
      font-size: 14px;
      line-height: 28px;
      letter-spacing: -0.4px;
      font-size: 15px;
      color: #666;
      height: 30px;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 13px;
    }

    @media screen and (max-width: 767px) {
      font-family: 'HyundaiSansTextKRR';
      font-size: 14px;
      line-height: 22px;
      letter-spacing: -0.4px;
    }
  `,
  ItemDetail: styled.div<{ $isOpen: boolean }>`
    @media screen and (min-width: 768px) {
      display: ${props => (props.$isOpen ? 'block' : 'none')};
      position: absolute;
      top: auto;
      left: 0;
      width: 100%;
      z-index: 2;
    }
  `,
  DetailWrap: styled.div`
    @media screen and (min-width: 768px) {
      position: relative;
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;
    }
  `,
  DetailInner: styled.div`
    @media screen and (min-width: 768px) {
      position: relative;
      max-width: 1200px;
      padding: 31px 15px 25px;
      margin: 0 auto;
    }
  `,
  DetailBox: styled.div`
    @media screen and (min-width: 768px) {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      position: relative;
      width: 100%;
      height: 280px;
    }
  `,
  DetailInfo: styled.div`
    @media screen and (min-width: 768px) {
      position: relative;
      width: 50%;
    }
  `,
  DetailBdge: styled.div`
    @media screen and (min-width: 768px) {
      display: flex;
    }
  `,
  DetailBadgeRect: styled.i`
    display: inline-block;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0.02em;
    line-height: 1;

    @media screen and (min-width: 768px) {
      border: 1px solid #007fa8;
      background-color: #fff;
      font-family: 'HyundaiSansHeadKR';
      color: #007fa8;
      z-index: 2;
    }

    @media screen and (min-width: 768px) {
      margin-bottom: 18px;
    }

    @media screen and (min-width: 768px) {
      display: inline-block;
      width: 38px;
      height: 20px;
      padding: 0;
      font-size: 11px;
      font-family: 'HyundaiSansHeadKR';
      text-align: center;
      background: #007fa8;
      color: #fff;
      line-height: 20px;
    }
  `,

  Description: styled.p`
    @media screen and (min-width: 768px) {
      font-size: 20px;
      font-family: 'HyundaiSansHeadKR';
    }
  `,
  DetailTitle: styled.div`
    @media screen and (min-width: 768px) {
      box-sizing: border-box;
    }

    @media screen and (min-width: 768px) {
      box-sizing: border-box;
    }

    @media screen and (min-width: 768px) {
      margin-top: 10px;
      font-size: 38px;
      font-family: 'HyundaiSansHeadKR';
    }
  `,
  LinkArticle: styled.div`
    @media screen and (min-width: 768px) {
      margin-top: 22px;
    }
  `,
  Link: styled(Link)`
    @media screen and (min-width: 768px) {
      display: inline-block;
      position: relative;
      padding-right: 15px;
      color: #002c5f;
    }
  `,
  DetailSpec: styled.div`
    @media screen and (min-width: 768px) {
      width: 50%;
      margin-top: 50px;
    }
  `,
  SpecList: styled.ul`
    @media screen and (min-width: 768px) {
      display: flex;
    }
  `,
  SpecItem: styled.li`
    @media screen and (min-width: 768px) {
      position: relative;
      width: 25%;
      text-align: center;
    }
  `,
  SpecTitle: styled.span`
    @media screen and (min-width: 768px) {
      display: block;
      font-family: 'HyundaiSansHeadKR';
      color: #666;
    }

    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
  `,
  SpecValue: styled.strong`
    @media screen and (min-width: 768px) {
      display: block;
      margin-top: 12px;
      font-size: 18px;
    }

    @media screen and (min-width: 768px) {
      margin-top: 8px;
      font-size: 16px;
    }
  `,
  DetailImage: styled.div`
    @media screen and (min-width: 768px) {
      overflow: hidden;
      width: 50%;
      max-width: 520px;
      height: 100%;
      margin: 0 0 auto auto;
      line-height: 0;
    }
  `,
  DetailButtonGroup: styled.div`
    @media screen and (min-width: 768px) {
      display: flex;
      width: 100%;
      margin-top: 42px;
    }
  `,
  LinkButton: styled(Link)`
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
      line-height: 50px;
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
      width: calc(33.33333% - 26.66667px);
      margin-right: 40px;
    }
  `,
};
