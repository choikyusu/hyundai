import { CommonStyled } from '@/src/styles/CommonStyled';
import { styled } from 'styled-components';
import { Pagination } from '../../common/Pagination/Pagination';
import Link from 'next/link';

interface ScrollWrapProps {
  agencyList: AgencyResponse | null;
  pageIndexList: number[];
  itemList: HTMLLIElement[];
  isSelectedPage: (index: number) => boolean;
  onClickArrow: (arrowType: ArrowType) => void;
  onClickPageNo: (number: number) => void;
}

export const ScrollWrap = ({
  agencyList,
  pageIndexList,
  itemList,
  isSelectedPage,
  onClickArrow,
  onClickPageNo,
}: ScrollWrapProps) => {
  return (
    <Styled.ScrollWrap>
      <Styled.ResultList>
        {agencyList?.list.map((agency, index) => (
          <Styled.ResultItem
            key={index}
            ref={(el: HTMLLIElement) => el && itemList.push(el)}
          >
            <Styled.Marker>{index + 1}</Styled.Marker>
            <Styled.Link href="">
              {agency.agencyName}
              <Styled.Span>{`(${agency.distance}km)`}</Styled.Span>
            </Styled.Link>
            <Styled.LinkAdress>{agency.agencyAddress}</Styled.LinkAdress>
            <Styled.P>
              <Styled.Span>{agency.agencyTel}</Styled.Span>
              <Styled.BlueButton>구매 상담 신청</Styled.BlueButton>
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
  );
};

const Styled = {
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
};
