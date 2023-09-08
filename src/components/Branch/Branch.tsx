import { CommonStyled } from '@/src/styles/CommonStyled';
import Link from 'next/link';
import { styled } from 'styled-components';
import { Map } from '../map/Map';
import { useBranch } from './useBranch';
import { ContentArea } from '../common/ContentArea/ContentArea';
import { Pagination } from '../common/Pagination/Pagination';

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
                  {/* <Styled.OptionList>
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
                        </Styled.OptionList> */}
                </Styled.Option>
              </Styled.TabMenu>
              <Styled.TabContents>
                <Styled.Branch>
                  <Styled.SelectArea>asas</Styled.SelectArea>
                  <Styled.SelectWrap>
                    <Styled.TitleInfo>
                      <Styled.H3>
                        검색결과 총
                        <Styled.H3Span>{agencyList?.total}</Styled.H3Span>건
                      </Styled.H3>
                      <Styled.RadioGroupWrap>
                        <Styled.RadioGroup>
                          <Styled.RadioArea
                            onClick={() => setAgencyTypeCode(undefined)}
                          >
                            <Styled.Radio type="radio" id="all" name="type" />
                            <Styled.RadioLabel htmlFor="all">
                              전체({agencyList?.total})
                            </Styled.RadioLabel>
                          </Styled.RadioArea>
                          <Styled.RadioArea
                            onClick={() => setAgencyTypeCode(1)}
                          >
                            <Styled.Radio
                              type="radio"
                              id="branch"
                              name="type"
                            />
                            <Styled.RadioLabel htmlFor="branch">
                              지점({agencyList?.branchCount})
                            </Styled.RadioLabel>
                          </Styled.RadioArea>
                          <Styled.RadioArea
                            onClick={() => setAgencyTypeCode(2)}
                          >
                            <Styled.Radio
                              type="radio"
                              id="agency"
                              name="type"
                            />
                            <Styled.RadioLabel htmlFor="agency">
                              대리점({agencyList?.agencyCount})
                            </Styled.RadioLabel>
                          </Styled.RadioArea>
                        </Styled.RadioGroup>
                      </Styled.RadioGroupWrap>
                    </Styled.TitleInfo>
                    <Styled.ScrollWrap>
                      <Styled.ResultList>
                        {agencyList?.list.map((agency, index) => (
                          <Styled.ResultItem
                            ref={(el: HTMLLIElement) => el && itemList.push(el)}
                          >
                            <Styled.Marker>{index + 1}</Styled.Marker>
                            <Styled.Link href="">
                              {agency.agencyName}
                              <Styled.Span>{`(${agency.distance}km)`}</Styled.Span>
                            </Styled.Link>
                            <Styled.LinkAdress>
                              {agency.agencyAddress}
                            </Styled.LinkAdress>
                            <Styled.P>
                              <Styled.Span>{agency.agencyTel}</Styled.Span>
                              <Styled.BlueButton>
                                구매 상담 신청
                              </Styled.BlueButton>
                            </Styled.P>
                          </Styled.ResultItem>
                        ))}
                      </Styled.ResultList>
                      <Pagination
                        isSelectedPage={isSelectedPage}
                        onClickArrow={onClickArrow}
                        onClickPageNo={onClickPageNo}
                        pageIndexList={pageIndexList}
                      />
                    </Styled.ScrollWrap>
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
  TitleInfo: styled.div`
    @media screen and (min-width: 768px) {
      padding: 30px;
      text-align: center;
      border-top: 1px solid #e4dcd3;
    }

    @media screen and (max-width: 1024px) and (min-width: 768px) {
      padding: 15px;
    }
  `,
  H3: styled.h3`
    @media screen and (min-width: 768px) {
      margin-bottom: 30px;
      font-family: 'HyundaiSansHeadKR';
      font-size: 20px;
      font-weight: 400;
      line-height: 34px;
      letter-spacing: -0.4px;
    }
  `,
  H3Span: styled.span`
    @media screen and (min-width: 768px) {
      color: #007fa8;
    }
  `,
  RadioGroupWrap: styled.div`
    font-weight: 500;
    font-size: 14px;
    margin-right: 30px;

    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;

    @media screen and (min-width: 768px) {
      width: 100%;
    }

    @media screen and (min-width: 768px) {
      margin-right: 0;
    }
  `,
  RadioGroup: styled.div`
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
    font-size: 0;

    @media screen and (min-width: 768px) {
      display: flex;
    }
  `,
  RadioArea: styled.div`
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;

    @media screen and (max-width: 1024px) and (min-width: 768px) {
      margin-right: 15px;
    }

    @media screen and (min-width: 768px) {
      flex: 1 1;
      text-align: left;
      margin-right: 0;
    }
  `,
  Radio: styled.input`
    width: 15px;
    height: 15px;
  `,
  RadioLabel: styled.label`
    font-family: 'HyundaiSansTextKR' !important;
    font-size: 16px !important;
    letter-spacing: -0.4px;
    color: inherit;
    line-height: 100%;
    padding-left: 10px !important;

    @media screen and (max-width: 1024px) and (min-width: 768px) {
      padding-left: 4px !important;
      font-size: 14px !important;
    }

    @media screen and (min-width: 768px) {
      font-family: 'HyundaiSansHeadKRR' !important;
      color: #000 !important;
    }
  `,
  ScrollWrap: styled.div`
    height: 306px;

    @media screen and (min-width: 768px) {
      overflow: hidden;
      overflow-y: auto;
      min-height: 287px;
      border-top: 1px solid #e4dcd3;
    }
  `,
  ResultList: styled.ul``,
  ResultItem: styled.li`
    @media screen and (min-width: 768px) {
      position: relative;
      padding: 20px 30px 20px 64px !important;
      border-bottom: 1px solid #ededed;
    }

    @media screen and (max-width: 1024px) and (min-width: 768px) {
      padding: 20px 20px 20px 44px !important;
    }

    &:hover {
      a {
        color: #409eff;
      }
    }
  `,
  Marker: styled.i`
    @media screen and (min-width: 768px) {
      position: absolute;
      display: flex;
      justify-content: center;
      top: 22px;
      left: 30px;
      width: 24px;
      height: 32px;
      font-style: normal;
      font-weight: 700;
      color: #fff;
      background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIzMiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjNzY3Njc2IiBkPSJNMjAuNzM3IDIwLjIwN2wuMDUuMDA1TDEyIDMxLjk5OSAzLjIxMyAyMC4yMTJsLjA1LS4wMDVBMTEuOTQ1IDExLjk0NSAwIDAxMCAxMS45OTljMC02LjYyNyA1LjM3Mi0xMiAxMi0xMiA2LjYyNyAwIDEyIDUuMzczIDEyIDEyIDAgMy4xNzktMS4yNDUgNi4wNjEtMy4yNjMgOC4yMDh6Ii8+PC9zdmc+)
        no-repeat;
    }

    @media screen and (max-width: 1024px) and (min-width: 768px) {
      left: 20px;
      width: 20px;
      height: 27px;
      line-height: 24px;
      background-size: 100% !important;
    }
  `,
  Link: styled(Link)`
    @media screen and (min-width: 768px) {
      display: block;
      position: relative;
      text-align: left;
      font-family: 'HyundaiSansTextKR';
      font-size: 16px;
      line-height: 30px;
      letter-spacing: -0.4px;
      color: #000;
    }
  `,
  LinkAdress: styled.span`
    @media screen and (min-width: 768px) {
      margin-top: 24px;
      font-family: 'HyundaiSansTextKRR';
      font-size: 14px;
      line-height: 28px;
      letter-spacing: -0.4px;
      color: #666;
      line-height: 1;
    }

    @media screen and (min-width: 768px) {
      display: block;
      margin-top: 24px;
      line-height: 1.285;
    }
  `,
  P: styled.p`
    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: space-between;
    }

    @media screen and (min-width: 768px) {
      margin-top: 24px;
      font-family: 'HyundaiSansTextKRR';
      font-size: 14px;
      line-height: 28px;
      letter-spacing: -0.4px;
      color: #666;
      line-height: 1;
    }

    @media screen and (max-width: 1024px) and (min-width: 768px) {
      display: block;
    }
  `,
  Span: styled.span`
    @media screen and (max-width: 1024px) and (min-width: 768px) {
      display: block;
      margin-bottom: 10px;
    }
  `,
  BlueButton: styled(CommonStyled.Button)`
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
      color: #000;
      background-color: transparent;
    }

    @media screen and (min-width: 768px) {
      color: #002c5f;
    }

    @media screen and (min-width: 768px) {
      font-size: 14px;
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
