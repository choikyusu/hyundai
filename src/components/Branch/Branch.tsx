import { CommonStyled } from '@/src/styles/CommonStyled';
import Link from 'next/link';
import { styled } from 'styled-components';
import { Map } from '../map/Map';
import { useMapProvider } from '@/src/contexts/MapContext';
import useCoords from '@/src/hooks/useCoords';
import { useEffect, useState } from 'react';

export const Branch = () => {
  const { kakaoMap } = useMapProvider();
  const [address, setAddress] = useState('');

  const { longitude, latitude } = useCoords();

  useEffect(() => {
    if (kakaoMap && latitude && longitude) {
      const geocoder = new kakaoMap.services.Geocoder();

      geocoder.coord2Address(
        longitude,
        latitude,
        (result: any, status: any) => {
          if (status === kakaoMap.services.Status.OK) {
            setAddress(result[0].address.address_name);
          }
        },
      );
    }
  }, [kakaoMap, latitude, longitude]);

  return (
    <Styled.ContentArea>
      <Styled.Container>
        <Styled.VisualWrap>
          <Styled.TopBreadCrumb>
            <Styled.MenuList>
              <Styled.MenuItem>
                <Styled.MenuLink href="">홈</Styled.MenuLink>
              </Styled.MenuItem>
              <Styled.MenuItem>
                <Styled.MenuLink href="">구매/이벤트</Styled.MenuLink>
              </Styled.MenuItem>
              <Styled.MenuItem>
                <Styled.MenuLink href="">판매/시승 네트워크</Styled.MenuLink>
              </Styled.MenuItem>
              <Styled.MenuItem>
                <Styled.MenuLink href="">
                  승용 판매/시승 네트워크
                </Styled.MenuLink>
              </Styled.MenuItem>
            </Styled.MenuList>
          </Styled.TopBreadCrumb>
          <Styled.VisualHeadWrap>
            <Styled.VisualTitle>
              <Styled.Title>승용 판매/시승 네트워크</Styled.Title>
              <Styled.Description>
                지점/대리점, 전시차량, 카마스터, 출고센터 조회 및 정보 안내를
                도와드립니다.
                <br />※ 대형 상용차량은 상용 판매 네트워크 &gt; 에서 조회해
                주시기 바랍니다.
              </Styled.Description>
            </Styled.VisualTitle>
          </Styled.VisualHeadWrap>
        </Styled.VisualWrap>
        <Styled.ContentWrap>
          <Styled.Content>
            <Styled.VehicleMap>
              <Styled.MapWrap>
                <Styled.AddressBox>
                  <Styled.Address>
                    <Styled.Pin>{address}</Styled.Pin>
                    <Styled.TextButton>위치 수정</Styled.TextButton>
                  </Styled.Address>
                  <Styled.Tab>
                    <Styled.TabMenu>
                      <Styled.Option>
                        <Styled.OptionHeader>지점/대리점</Styled.OptionHeader>
                        <Styled.OptionList>
                          <Styled.OptionItem>
                            <Styled.OptionButton>
                              지점/대리점
                            </Styled.OptionButton>
                          </Styled.OptionItem>
                          <Styled.OptionItem>
                            <Styled.OptionButton>전시차량</Styled.OptionButton>
                          </Styled.OptionItem>
                          <Styled.OptionItem>
                            <Styled.OptionButton>카마스터</Styled.OptionButton>
                          </Styled.OptionItem>
                          <Styled.OptionItem>
                            <Styled.OptionButton>출고센터</Styled.OptionButton>
                          </Styled.OptionItem>
                          <Styled.OptionItem>
                            <Styled.OptionButton>
                              드라이빙라운지
                            </Styled.OptionButton>
                          </Styled.OptionItem>
                        </Styled.OptionList>
                      </Styled.Option>
                    </Styled.TabMenu>
                  </Styled.Tab>
                </Styled.AddressBox>
                <Styled.MapBox>
                  <Map width="100%" height="100%" />
                </Styled.MapBox>
              </Styled.MapWrap>
            </Styled.VehicleMap>
          </Styled.Content>
        </Styled.ContentWrap>
      </Styled.Container>
    </Styled.ContentArea>
  );
};

const Styled = {
  ContentArea: styled.div`
    position: relative;

    @media screen and (min-width: 768px) {
      width: 100%;
    }
  `,
  Container: styled.div``,
  VisualWrap: styled.section`
    width: 100%;

    min-height: 360px;
    padding: 0;
    background-image: url(/images/bg/bg_visual_cloud.png);
    background-position: 50%;
    background-repeat: no-repeat;
  `,
  TopBreadCrumb: styled.div`
    display: block;
    width: calc(100% - 120px);
    max-width: 1120px;
    margin: 0 auto;
  `,
  MenuList: styled.ul`
    display: flex;
  `,
  MenuItem: styled.li`
    display: flex;

    position: relative;
    justify-content: flex-start;
    align-items: center;
    padding: 0 14px;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      a {
        color: #007fa8;
        font-weight: 500;
      }
    }

    &:after {
      content: '';
      position: absolute;
      top: 42px;
      right: 0;
      display: inline-block;
      width: 5px;
      height: 5px;
      border-top: 1px solid #000;
      border-right: 1px solid #000;
      transform: rotate(45deg);
    }
  `,
  MenuLink: styled(Link)`
    position: relative;
    display: flex;
    align-items: center;
    height: 90px;
    font-family: 'HyundaiSansTextKR';
    font-size: 14px;
    letter-spacing: -0.4px;
    color: #000;
    line-height: 24px;
  `,
  VisualHeadWrap: styled.div`
    display: block;
    height: 270px;
    margin: 0 60px;
    padding-top: 80px;
    background-color: hsla(0, 0%, 100%, 0.7);
  `,
  VisualTitle: styled.div`
    display: block;
    margin: 0 auto;
    text-align: center;
    opacity: 1;
  `,
  Title: styled.h2`
    margin: 0;
    font-family: 'HyundaiSansHeadKR';
    font-size: 58px;
    letter-spacing: -0.4px;
    color: #000;
    line-height: 51px;
    font-weight: 400;
  `,
  Description: styled.p`
    margin-top: 40px;
    font-family: 'HyundaiSansTextKR';
    font-size: 16px;
    letter-spacing: -0.4px;
    color: #000;
    line-height: normal;
    font-weight: 500;
  `,
  ContentWrap: styled.section``,
  Content: styled.div`
    @media screen and (min-width: 768px) {
      width: 100%;
      border-top: 1px solid #e4dcd3;
    }
  `,
  VehicleMap: styled.div``,
  MapWrap: styled.section`
    @media screen and (min-width: 768px) {
      display: flex;
      width: 100%;
      height: 800px;
    }
  `,
  AddressBox: styled.section`
    @media screen and (min-width: 768px) {
      display: flex;
      flex-direction: column;
      width: 500px;
      height: 100%;
      background-color: #fff;
    }

    @media screen and (min-width: 768px) {
      width: 36%;
    }
  `,
  Address: styled.div`
    @media screen and (min-width: 768px) {
      font-family: HyundaiSansTextKRR;
      font-size: 14px;
      line-height: 28px;
      letter-spacing: -0.4px;
    }

    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      padding: 6px 30px;
      border-bottom: 1px solid #e4dcd3;
    }

    @media screen and (max-width: 1024px) and (min-width: 768px) {
      padding: 6px 15px;
    }
  `,
  Pin: styled.span`
    @media screen and (min-width: 768px) {
      position: relative;
      padding-left: 20px;
      color: #666;
    }

    @media screen and (max-width: 1024px) and (min-width: 768px) {
      max-width: 70%;
    }

    @media screen and (min-width: 768px) {
      &:before {
        content: '';
        position: absolute;
        display: block;
        top: calc(50% - 9px);
        left: 0;
        width: 14px;
        height: 18px;
        background: url(/images/bullet_marker.png) no-repeat;
      }
    }
  `,
  TextButton: styled(CommonStyled.Button)`
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
      font-family: 'HyundaiSansTextKR';
      font-size: 14px;
      line-height: 28px;
      letter-spacing: -0.4px;
    }
  `,
  Tab: styled.div`
    @media screen and (min-width: 768px) {
      font-family: 'HyundaiSansTextKRR';
      font-size: 14px;
      line-height: 28px;
      letter-spacing: -0.4px;
    }
    @media screen and (min-width: 768px) {
      display: flex;
      flex-direction: column;
      flex: 1;
    }
  `,
  TabMenu: styled.div``,
  Option: styled.div`
    @media screen and (max-width: 1024px) {
      position: relative;
      width: 100%;
    }
  `,
  OptionHeader: styled(CommonStyled.Button)`
    @media screen and (max-width: 1024px) {
      position: relative;
      width: 100%;
    }

    @media screen and (max-width: 1024px) {
      padding: 0 15px;
      height: 50px;
      background-color: #444;
      line-height: 50px;
      font-family: 'HyundaiSansTextKR';
      font-size: 16px;
      letter-spacing: 0;
      color: #fff;
      line-height: 22px;
      text-align: left;
    }
  `,
  OptionList: styled.ul`
    @media screen and (max-width: 1024px) {
      position: absolute;
      top: 50px;
      z-index: 21;
      display: flex;
      width: 100%;
      flex-direction: column;
    }
  `,
  OptionItem: styled.li`
    @media screen and (max-width: 1024px) {
      height: 50px;
    }

    @media screen and (max-width: 1024px) {
      margin: 0;
    }
  `,
  OptionButton: styled(CommonStyled.LiButton)`
    @media screen and (max-width: 1024px) {
      margin: 0;
      padding: 0 15px;
      width: 100%;
      height: 50px;
      color: #fff;
      background: #444;
      align-items: center;
      justify-content: normal;
      text-align: center;
    }

    @media screen and (max-width: 1024px) {
      color: #000;
      background: #fff;
      border-bottom: none;
    }

    @media screen and (max-width: 1024px) and (min-width: 768px) {
      padding: 0 15px;
    }
  `,
  TabContents: styled.div`
    @media screen and (min-width: 768px) {
      display: flex;
      flex-direction: column;
      flex: 1;
    }
  `,
  Branch: styled.div`
    @media screen and (min-width: 768px) {
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    @media screen and (min-width: 768px) {
      height: 100%;
    }
  `,
  SelectArea: styled.div`
    @media screen and (min-width: 768px) {
      position: relative;
      height: auto;
      padding: 30px;
      text-align: center;
    }

    @media screen and (max-width: 1024px) and (min-width: 768px) {
      padding: 15px;
    }
  `,
  MapBox: styled.div`
    @media screen and (min-width: 768px) {
      width: calc(100% - 400px);
      height: 100%;
      background-color: #ccc;
      overflow: hidden;
    }

    @media screen and (max-width: 1024px) and (min-width: 768px) {
      width: 64%;
    }
  `,
};
