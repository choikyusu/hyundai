import Link from 'next/link';
import { CSSProp, css, styled } from 'styled-components';

const BACKGROUND_IMAGE_STYLE = {
  Estimation: css`
    background-image: url(/images/gnb/icon_mycar_gnb_mo.png);
  `,
  Purchase: css`
    background-image: url(/images/gnb/icon_purchase_gnb_mo.png);
  `,
  TestDriving: css`
    background-image: url(/images/gnb/icon_drive_gnb_mo.png);
  `,
  Benefit: css`
    background-image: url(/images/gnb/icon_gift_gnb_mo.png);
  `,
};

export const LnbBottomList = () => {
  return (
    <Styled.LnbBottomList>
      <Styled.List>
        <Styled.Item>
          <p>
            <Styled.Link
              href="/kr/ko/e/vehicles/estimation"
              title="내 차 만들기(견적)"
              $backgroundImage={BACKGROUND_IMAGE_STYLE.Estimation}
            >
              내 차 만들기(견적)
            </Styled.Link>
          </p>
        </Styled.Item>
        <Styled.Item>
          <p>
            <Styled.Link
              href="/vehicles/purchase-consult"
              title="구매상담신청"
              $backgroundImage={BACKGROUND_IMAGE_STYLE.Purchase}
            >
              구매상담신청
            </Styled.Link>
          </p>
        </Styled.Item>
        <Styled.Item>
          <p>
            <Styled.Link
              href="/kr/ko/e/vehicles/test-driving"
              title="시승신청"
              $backgroundImage={BACKGROUND_IMAGE_STYLE.TestDriving}
            >
              시승신청
            </Styled.Link>
          </p>
        </Styled.Item>
        <Styled.Item>
          <p>
            <Styled.Link
              href="/kr/ko/e/vehicles/monthly-benefit"
              title="이달의 구매혜택"
              $backgroundImage={BACKGROUND_IMAGE_STYLE.Benefit}
            >
              이달의 구매혜택
            </Styled.Link>
          </p>
        </Styled.Item>
      </Styled.List>
    </Styled.LnbBottomList>
  );
};

const Styled = {
  LnbBottomList: styled.div`
    @media screen and (max-width: 767px) {
      margin-top: auto;
      order: 4;
    }

    @media screen and (min-width: 768px) {
      display: none;
    }
  `,
  List: styled.ul`
    @media screen and (max-width: 767px) {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      margin-top: auto;
    }
  `,
  Item: styled.li`
    @media screen and (max-width: 767px) {
      width: 50%;
      text-align: center;
      border-top: 1px solid #cac6c4;
    }
  `,
  Link: styled(Link)<{ $backgroundImage: CSSProp }>`
    @media screen and (max-width: 767px) {
      ${props => props.$backgroundImage}
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 60px;
      padding-left: 33px;
      border-top: 1px solid #fff;
      background-color: #f6f3f2;
      font-family: 'HyundaiSansTextKR';
      font-size: 13px;
      line-height: 21px;
      letter-spacing: -0.4px;
      color: #444;
      background-repeat: no-repeat;
      background-position: calc(50% - 53px) 50%;
      background-size: 22px;
    }
  `,
};
