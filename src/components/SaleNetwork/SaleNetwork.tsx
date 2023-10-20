import { useSaleNetwork } from './useSaleNetwork';
import { ContentArea } from '../common/ContentArea/ContentArea';
import { LoadingWrap } from '../common/LoadingWrap/LoadingWrap';
import { styled } from 'styled-components';
import { CommonStyled } from '@/src/styles/CommonStyled';
import Link from 'next/link';
import { Pagination } from '../common/Pagination/Pagination';
import { Map } from '../map/Map';

export const SaleNetwork = () => {
  const {
    POINT_LIST,
    networkList,
    pageIndexList,
    itemList,
    openList,
    setOpenList,
    selectedTabName,
    onClickPageNo,
    onClickArrow,
    isSelectedPage,
    setBranchMap,
    onClickTab,
    isSelectedTab,
  } = useSaleNetwork();

  return (
    <LoadingWrap>
      <ContentArea
        descList={[
          '마이티 차량 구매를 희망하시는 고객님들은',
          '승용 판매/시승 네트워크를 이용하여 주시기 바랍니다.',
        ]}
        menuTreeList={[
          '홈',
          '구매/이벤트',
          '판매/시승 네트워크',
          '상용 판매 네트워크',
        ]}
      >
        <Styled.NetworkWrap>
          <Styled.ContentRow>
            <div>
              <Styled.NetworkInfo>
                <Styled.TextWrap>
                  <div>
                    <Styled.LocationNow>
                      <Styled.LocationGuideWrap>
                        <span>
                          현재 위치와 가장 가까운 지점을 확인하시려면
                          <br />
                          현재 위치 설정 버튼을 선택해 현재 위치를 허용해
                          주세요.
                        </span>
                        <Styled.CloseButton />
                      </Styled.LocationGuideWrap>
                      <Styled.GetCurAddrLink href="/" />
                      <Styled.UiCurrentAddr>
                        위치정보 제공 확인
                      </Styled.UiCurrentAddr>
                    </Styled.LocationNow>
                    <Styled.SearchArea>
                      <Styled.SelectArea>
                        <Styled.SortingWrap>
                          <Styled.OpenButton
                            onClick={() => setOpenList(prev => !prev)}
                          >
                            {selectedTabName()}
                          </Styled.OpenButton>
                          <Styled.ItemList $openList={openList}>
                            {POINT_LIST.map((point, index) => (
                              <Styled.Item
                                key={index}
                                onClick={() => {
                                  setOpenList(false);
                                  onClickTab(point.point, point.space);
                                }}
                              >
                                <Styled.ItemButton
                                  $isSelected={isSelectedTab(
                                    point.point,
                                    point.space,
                                  )}
                                >
                                  {point.name}
                                </Styled.ItemButton>
                              </Styled.Item>
                            ))}
                          </Styled.ItemList>
                        </Styled.SortingWrap>
                      </Styled.SelectArea>
                    </Styled.SearchArea>
                    <Styled.ResultNum>
                      <Styled.Strong>
                        검색결과 총{' '}
                        <Styled.FcBlue>{networkList?.totalCount}</Styled.FcBlue>{' '}
                        건
                      </Styled.Strong>
                    </Styled.ResultNum>
                    <Styled.MapInfo>
                      <Styled.UiList>
                        {networkList?.list.map((item, index) => (
                          <Styled.BasicNetwork key={index}>
                            <Styled.ViewBranch>
                              <Styled.BranchButton />
                            </Styled.ViewBranch>
                            <Styled.Flag>
                              <Styled.Span>
                                {
                                  POINT_LIST.find(
                                    point => point.point === item.point,
                                  )?.name
                                }
                              </Styled.Span>
                            </Styled.Flag>
                            <Styled.H4Title>{item.name}</Styled.H4Title>
                            <Styled.OperatingInfo>
                              <Styled.Title>운영시간</Styled.Title>
                              <Styled.Data>
                                {`${item.start_dt}-${item.end_dt}`}
                              </Styled.Data>
                            </Styled.OperatingInfo>
                            <Styled.AddressInfo>
                              <Styled.Title>주소</Styled.Title>
                              <Styled.Data>{`${item.addr}`}</Styled.Data>
                            </Styled.AddressInfo>
                            <Styled.PhoneInfo>
                              <Styled.Title>전화</Styled.Title>
                              <Styled.Data>{`${item.phone}`}</Styled.Data>
                            </Styled.PhoneInfo>
                          </Styled.BasicNetwork>
                        ))}
                      </Styled.UiList>
                      <Pagination
                        isSelectedPage={isSelectedPage}
                        onClickArrow={onClickArrow}
                        onClickPageNo={onClickPageNo}
                        pageIndexList={pageIndexList}
                      />
                    </Styled.MapInfo>
                  </div>
                </Styled.TextWrap>
                <Styled.MapWrap>
                  <Map width="100%" height="100%" setMap={setBranchMap} />
                </Styled.MapWrap>
              </Styled.NetworkInfo>
            </div>
          </Styled.ContentRow>
        </Styled.NetworkWrap>
      </ContentArea>
    </LoadingWrap>
  );
};

const Styled = {
  NetworkWrap: styled.div`
    position: relative;
    width: 100%;
    min-height: 650px;

    @media screen and (max-width: 767px) {
      width: 100%;
      margin: 0 auto;
      padding: 0 0 50px !important;
    }

    @media only screen and (min-width: 768px) and (max-width: 1279px) {
      width: 100%;
      margin: 0;
      padding: 0 30px 60px;
    }

    @media only screen and (max-width: 9999px) {
      overflow: hidden;
      width: 100%;
      min-height: 800px;
      padding: 0;
    }
  `,
  ContentRow: styled.div`
    margin-right: auto;
    margin-left: auto;
  `,
  NetworkInfo: styled.div`
    display: flex;
    width: 100%;
    height: 800px;

    @media only screen and (max-width: 767px) {
      height: 100%;
    }
  `,
  TextWrap: styled.div`
    @media only screen and (max-width: 767px) {
      font-size: 3.733vw;
      line-height: 1.5em;
      color: #000;
    }

    @media only screen and (max-width: 9999px) {
      display: flex;
      flex-direction: column;
      width: 475px;
      height: 100%;
      background-color: #fff;
    }

    @media only screen and (max-width: 767px) {
      width: 100%;
      font-size: 14px;
    }
  `,
  LocationNow: styled.div`
    padding: 6px 30px;
    border-bottom: 1px solid #e4dcd3;
    font-size: 14px;
    line-height: 28px;
    letter-spacing: -0.4px;

    @media only screen and (max-width: 767px) {
      position: relative;
      background-color: #f7f3f2;
      padding: 25px 15px 10px 15px;
      border: none;
    }
  `,
  LocationGuideWrap: styled.div`
    display: none;
  `,
  CloseButton: styled(CommonStyled.Button)`
    font-family: 'HyundaiSansTextKR';
    font-size: 16px;

    @media only screen and (min-width: 768px) and (max-width: 1279px) {
      line-height: 24px;
    }

    @media only screen and (max-width: 767px) {
      line-height: 23px;
    }
  `,
  GetCurAddrLink: styled(Link)`
    z-index: 1;
    position: absolute;
    top: 11px;
    left: 28px;
    display: block;
    width: 14px;
    height: 18px;
    padding: 0 10px;
    background: url(/cstatic/images/new_common/ico_btn.png) center center
      no-repeat;
    background-position: -81px bottom;

    @media only screen and (max-width: 767px) {
      top: 37px;
    }
  `,
  UiCurrentAddr: styled.span`
    position: relative;
    padding-left: 23px;
    color: #666;

    @media only screen and (max-width: 767px) {
      padding: 0 15px 0 39px;
      line-height: 40px;
      display: block;
      background: #fff;
    }
  `,
  SearchArea: styled.div`
    @media only screen and (max-width: 767px) {
      background-color: #f7f3f2;
    }
  `,
  SelectArea: styled.div`
    @media only screen and (max-width: 767px) {
      padding: 0 15px 25px;
      position: relative;
    }
  `,
  SortingWrap: styled.div`
    position: relative;
  `,
  OpenButton: styled(CommonStyled.Button)`
    display: none;

    @media only screen and (max-width: 767px) {
      display: block;
      width: 100%;
      height: 40px;
      line-height: 40px;
      background: #fff;
      text-align: left;
      padding: 0 15px;
      font-family: 'HyundaiSansTextKR';
      font-size: 15px;
    }
  `,
  ItemList: styled.ul<{ $openList: boolean }>`
    display: flex;
    flex-wrap: wrap;
    list-style: none;

    @media only screen and (max-width: 767px) {
      display: ${props => (props.$openList ? 'block' : 'none')};
      position: absolute;
      z-index: 1;
      top: 50px;
      left: 0;
      right: 0;
      background: #f7f3f2;
    }
  `,
  Item: styled.li`
    width: 19%;

    @media only screen and (max-width: 767px) {
      width: 100%;
    }

    @media only screen and (min-width: 768px) and (max-width: 1279px) {
      width: 25%;
    }
  `,
  ItemButton: styled(CommonStyled.Button)<{ $isSelected: boolean }>`
    justify-content: center;
    text-align: center;
    align-items: center;
    display: block;
    width: 100%;
    height: 60px;
    padding: 0;
    white-space: nowrap;
    font-size: 15px;
    letter-spacing: 0;
    color: ${props => (props.$isSelected ? '#000' : '#fff')};
    line-height: 60px;
    font-weight: 500;
    background: ${props => (props.$isSelected ? '#fff' : '#444')};
    font-family: 'HyundaiSansHeadKRR';

    @media only screen and (max-width: 767px) {
      height: 50px;
      line-height: 50px;
    }
  `,
  ResultNum: styled.div`
    padding: 14px 30px;
    font-family: 'HyundaiSansHeadKR';
    border-top: 1px solid #fff;

    @media only screen and (max-width: 767px) {
      padding: 20px 15px;
      border-top: 1px solid #e4dcd3;
    }
  `,
  Strong: styled.strong`
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -0.4px;
  `,
  FcBlue: styled.span`
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -0.4px;

    @media only screen and (max-width: 767px) {
      font-size: 16px;
      line-height: 16px;
    }

    color: #007fa8;
  `,
  MapInfo: styled.div`
    overflow: hidden;
    overflow-y: auto;
    height: 642px;
    min-height: 287px;
    border-top: 1px solid #e4dcd3;

    @media only screen and (max-width: 767px) {
      height: 100%;
      min-width: unset;
      overflow: visible;
    }
  `,
  UiList: styled.ul``,
  BasicNetwork: styled.li`
    position: relative;
    padding: 20px 30px 30px;
    border-bottom: 1px solid #ccc;
    background: #f6f3f2;

    @media only screen and (max-width: 767px) {
      padding: 20px 15px 25px;
    }
  `,
  ViewBranch: styled.p`
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `,
  BranchButton: styled(CommonStyled.Button)`
    display: block;
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    font-size: 0;
    text-indent: -9999px;
  `,
  Flag: styled.span`
    display: inline-block;
    padding: 0 10px;
    line-height: 26px;

    background-color: #007fa8;
  `,
  Span: styled.span`
    color: #fff;
    font-size: 14px;

    @media only screen and (max-width: 767px) {
      line-height: 30px;
      font-size: 15px;
    }
  `,
  H4Title: styled.h2`
    font-size: 24px;
    line-height: 36px;

    @media only screen and (max-width: 767px) {
      font-size: 18px;
      line-height: 25px;
    }

    @media only screen and (min-width: 768px) and (max-width: 1279px) {
      font-size: 14px;
      line-height: 20px;
    }

    display: inline-block;
    margin-left: 8px;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: -0.4px;
    color: #000;
    font-family: 'HyundaiSansTextKR';

    color: #007fa8;
  `,
  OperatingInfo: styled.dl`
    display: flex;
    margin: 17px 0 0;
    font-size: 14px;
    line-height: 1.285;
    font-family: 'HyundaiSansTextKRR';
    margin-top: 20px;

    @media only screen and (max-width: 767px) {
      margin: 10px 0;
      margin-top: 19px;
    }
  `,
  Title: styled.dt`
    margin-right: 10px;
    color: #222;
    font-family: 'HyundaiSansTextKR';
  `,
  Data: styled.dd`
    color: #666;
    line-height: 1.3;
  `,
  AddressInfo: styled.dl`
    display: flex;
    margin: 17px 0 0;
    font-size: 14px;
    line-height: 1.285;
    font-family: 'HyundaiSansTextKRR';

    @media only screen and (max-width: 767px) {
      margin: 10px 0;
    }
  `,
  PhoneInfo: styled.dl`
    display: flex;
    margin: 17px 0 0;
    font-size: 14px;
    line-height: 1.285;
    font-family: 'HyundaiSansTextKRR';

    @media only screen and (max-width: 767px) {
      margin-bottom: 0;
    }

    @media only screen and (max-width: 767px) {
      margin: 10px 0;
    }
  `,
  MapWrap: styled.div`
    width: calc(100% - 400px);
    height: 100%;
    background-color: #ccc;
    overflow: hidden;

    @media only screen and (max-width: 767px) {
      display: none;
    }
  `,
};
