import Link from 'next/link';
import { styled } from 'styled-components';
import { CommonSection } from '../CommonSection';

export const EVSection = () => {
  return (
    <CommonSection
      title="전기차"
      titleTailList={[
        '지구 환경을 품은 현대자동차의',
        '미래형 모빌리티를 경험해보세요.',
      ]}
    >
      <Styled.ElectricCar>
        <Styled.ElectricCarImgWrap>
          <Styled.ElctricCarImage
            src="/images/ev_ioniq6.jpg"
            alt="아이오닉6 차량 이미지"
          />
        </Styled.ElectricCarImgWrap>
        <Styled.ElectricCarInfo>
          <Styled.ElectricCarInner>
            <Styled.BadgeRect>NEW</Styled.BadgeRect>
            <Styled.CarName>아이오닉 6</Styled.CarName>
            <Styled.SubText>내가 만드는 세상</Styled.SubText>
            <Styled.ModelDetailButton href="/kr/ko/e/vehicles/ioniq6/intro">
              자세히 보기
            </Styled.ModelDetailButton>
          </Styled.ElectricCarInner>
          <Styled.Network>
            <Styled.NetworkTitle>충전소&서비스 네트워크</Styled.NetworkTitle>
            <Styled.NetworkSubText>
              고객님의 계신 곳 근처의 충전소 및 <Styled.Br />
              서비스 네트워크를 안내해드립니다.
            </Styled.NetworkSubText>
            <Styled.ButtonWrap>
              <Styled.MoreBlueButton href="/kr/ko/customer-support/service-network/ev-service-network">
                전기차
              </Styled.MoreBlueButton>
              <Styled.MoreBlueButton href="/kr/ko/customer-support/service-network/fcev-service-network">
                수소전기차
              </Styled.MoreBlueButton>
            </Styled.ButtonWrap>
          </Styled.Network>
        </Styled.ElectricCarInfo>
      </Styled.ElectricCar>
    </CommonSection>
  );
};

const Styled = {
  Br: styled.br`
    display: block;
  `,
  SectionWrapper: styled.div`
    max-width: 1640px;
    margin: 0 auto;
    padding: 140px 0 0 !important;
    text-align: center;

    padding: 70px 0 0 !important;

    text-align: center;
  `,
  Title: styled.h2`
    font-family: 'HyundaiSansHeadKR';
    font-size: 27px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: -0.4px;
  `,
  TitleTail: styled.p`
    color: #666;

    margin: 12px 0 0;
    font-family: 'HyundaiSansTextKR';
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.4px;
  `,

  ElectricCar: styled.div`
    display: flex;
    justify-content: space-between;
    margin: 51px 0 0;

    display: block;
    margin: 20px 0 0;
  `,
  ElectricCarImgWrap: styled.div`
    width: 100%;
    font-size: 0;
  `,
  ElctricCarImage: styled.img`
    width: 100%;
    height: 100%;
  `,
  ElectricCarInfo: styled.div`
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-line-pack: justify;
    align-content: space-between;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 34.15%;
    padding: 3.1vw 2.61vw 6.36vw 3.1vw;
    background: #f7f3f2;
    text-align: left;

    width: 100%;

    padding: 30px 15px;
  `,
  ElectricCarInner: styled.div`
    font-size: 0;
  `,
  BadgeRect: styled.div`
    display: inline-block;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0.02em;
    line-height: 1;

    border: 1px solid #007fa8;
    background-color: #fff;
    font-family: 'HyundaiSansHeadKR';
    color: #007fa8;
    z-index: 2;

    margin-right: 5px;

    background: #007fa8;
    color: #fff;

    width: 32px;
    height: 15px;
    padding: 1px 0 0;
    line-height: 15px;
    font-size: 10px;
    text-align: center;
  `,
  CarName: styled.h3`
    font-family: 'HyundaiSansHeadKR';
    font-size: 44px;
    font-weight: 400;
    line-height: 58px;
    letter-spacing: -0.4px;
    margin: 8px 0 6px;

    margin: 14px 0 13px;
    font-size: 27px;
    line-height: 1;
  `,
  SubText: styled.div`
    font-family: 'HyundaiSansTextKR';
    font-size: 16px;
    line-height: 30px;
    letter-spacing: -0.4px;

    font-family: 'HyundaiSansTextKR';
    font-size: 16px;
    line-height: 30px;
    letter-spacing: -0.4px;

    font-size: 14px;
    line-height: 15px;
  `,
  ModelDetailButton: styled(Link)`
    text-align: center;

    display: inline-block;
    vertical-align: middle;

    width: 280px;
    line-height: 40px;
    height: 40px;
    border: 0;
    background: #002c5f;
    font-family: 'HyundaiSansTextKR';
    font-size: 15px;
    font-weight: 500;
    letter-spacing: -0.4px;
    color: #fff;
    cursor: pointer;

    height: 40px;
    font-family: 'HyundaiSansHeadKR';

    width: 100%;

    margin-top: 28px;
  `,

  Network: styled.div``,
  NetworkTitle: styled.h3`
    font-family: 'HyundaiSansHeadKR';
    font-size: 24px;
    letter-spacing: -0.24px;
    color: #000;
    line-height: 34px;

    margin: 35px 0 0;

    font-size: 18px;
    line-height: 25px;
  `,
  NetworkSubText: styled.div`
    font-family: 'HyundaiSansTextKR';
    font-size: 16px;
    line-height: 30px;
    letter-spacing: -0.4px;
    color: #666;
    margin: 6px 0 30px;

    position: relative;
    margin-bottom: 23px;
    font-size: 14px;
    line-height: 22px;
    z-index: 1;
  `,

  MoreBlueButton: styled(Link)`
    text-align: center;

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
    color: #000;
    background-color: transparent;

    color: #002c5f;

    font-family: 'HyundaiSansHeadKR';

    position: relative;
    font-size: 14px;
    margin-left: 30px;

    margin-left: 0;
  `,

  ButtonWrap: styled.div`
    display: flex;
    gap: 30px;
  `,
};
