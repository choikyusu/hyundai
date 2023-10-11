import { CommonStyled } from '@/src/styles/CommonStyled';
import { styled } from 'styled-components';
import { Map } from '../map/Map';
import { useBranch } from './useBranch';
import { ContentArea } from '../common/ContentArea/ContentArea';
import { LoadingWrap } from '../common/LoadingWrap/LoadingWrap';
import { TitleInfo } from './TitleInfo/TitleInfo';
import { ScrollWrap } from './ScrollWrap/ScrollWrap';

export const Branch = () => {
  const {
    address,
    agencyList,
    pageIndexList,
    itemList,
    setAgencyTypeCode,
    onClickPageNo,
    setBranchMap,
    onClickArrow,
    isSelectedPage,
  } = useBranch();

  return (
    <LoadingWrap>
      <ContentArea
        descList={[
          '지점/대리점, 전시차량, 카마스터, 출고센터 조회 및 정보 안내를 도와드립니다.',
          '※ 대형 상용차량은 상용 판매 네트워크 > 에서 조회해 주시기 바랍니다.',
        ]}
        menuTreeList={[
          '홈',
          '구매/이벤트',
          '판매/시승 네트워크',
          '승용 판매/시승 네트워크',
        ]}
      >
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
                  </Styled.Option>
                </Styled.TabMenu>
                <Styled.TabContents>
                  <Styled.Branch>
                    <Styled.SelectWrap>
                      <TitleInfo
                        agencyList={agencyList}
                        setAgencyTypeCode={setAgencyTypeCode}
                      />
                      <ScrollWrap
                        pageIndexList={pageIndexList}
                        agencyList={agencyList}
                        itemList={itemList}
                        isSelectedPage={isSelectedPage}
                        onClickArrow={onClickArrow}
                        onClickPageNo={onClickPageNo}
                      />
                    </Styled.SelectWrap>
                  </Styled.Branch>
                </Styled.TabContents>
              </Styled.Tab>
            </Styled.AddressBox>
            <Styled.MapBox>
              <Map width="100%" height="100%" setMap={setBranchMap} />
            </Styled.MapBox>
          </Styled.MapWrap>
        </Styled.VehicleMap>
      </ContentArea>
    </LoadingWrap>
  );
};

const Styled = {
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
  SelectWrap: styled.section`
    @media screen and (min-width: 768px) {
      display: flex;
      flex-direction: column;
      flex: 1;
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
