import { CommonStyled } from '@/src/styles/CommonStyled';
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md';
import { styled } from 'styled-components';
import { usePagination } from './usePagination';

interface PaginationProps {
  onClickArrow: (arrowType: ArrowType) => void;
  pageIndexList: number[];
  isSelectedPage: (index: number) => boolean;
  onClickPageNo: (number: number) => void;
}

export const Pagination = ({
  onClickArrow,
  pageIndexList,
  isSelectedPage,
  onClickPageNo,
}: PaginationProps) => {
  const {
    onClickFirstPage,
    onClickPreviousPage,
    onClickNextPage,
    onClickLastPage,
  } = usePagination({
    onClickArrow,
  });

  return (
    <Styled.Paging>
      <Styled.Pagination>
        <Styled.ButtonPreAll>
          <MdKeyboardDoubleArrowLeft onClick={onClickFirstPage} />
        </Styled.ButtonPreAll>
        <Styled.ButtonPrev onClick={onClickPreviousPage}>
          <MdKeyboardArrowLeft />
        </Styled.ButtonPrev>
        <Styled.ElPagination>
          <Styled.ElPager>
            {pageIndexList.map((pageIndex, index) => (
              <Styled.Number
                key={index}
                $isSelected={isSelectedPage(pageIndex)}
                onClick={() => onClickPageNo(pageIndex)}
              >
                {pageIndex}
              </Styled.Number>
            ))}
          </Styled.ElPager>
        </Styled.ElPagination>
        <Styled.ButtonNext onClick={onClickNextPage}>
          <MdKeyboardArrowRight />
        </Styled.ButtonNext>
        <Styled.ButtonNextAll onClick={onClickLastPage}>
          <MdKeyboardDoubleArrowRight />
        </Styled.ButtonNextAll>
      </Styled.Pagination>
    </Styled.Paging>
  );
};

const Styled = {
  Paging: styled.div`
    @media screen and (max-width: 767px) {
      margin: 40px 0;
      text-align: center;
    }
  `,
  Pagination: styled.div`
    text-align: center;
  `,
  ButtonPreAll: styled(CommonStyled.Button)`
    svg {
      width: 20px;
      height: 20px;
    }

    @media screen and (max-width: 767px) {
      display: inline-block;
      vertical-align: middle;
    }

    @media screen and (max-width: 767px) {
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
    }

    @media screen and (max-width: 767px) {
      width: auto;
      height: auto;
      border-radius: 0;
      color: #000;
      background-color: transparent;
    }
  `,
  ButtonPrev: styled(CommonStyled.Button)`
    svg {
      width: 20px;
      height: 20px;
    }

    @media screen and (max-width: 767px) {
      display: inline-block;
      vertical-align: middle;
    }

    @media screen and (max-width: 767px) {
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
    }

    @media screen and (max-width: 767px) {
      width: auto;
      height: auto;
      border-radius: 0;
      color: #000;
      background-color: transparent;
    }

    @media screen and (max-width: 640px) {
      margin-left: 10px;
    }
  `,
  ButtonNextAll: styled(CommonStyled.Button)`
    svg {
      width: 20px;
      height: 20px;
    }

    @media screen and (max-width: 767px) {
      display: inline-block;
      vertical-align: middle;
    }

    @media screen and (max-width: 767px) {
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
    }

    @media screen and (max-width: 767px) {
      width: auto;
      height: auto;
      border-radius: 0;
      color: #000;
      background-color: transparent;
    }

    @media screen and (max-width: 640px) {
      margin-right: 10px;
    }
  `,
  ButtonNext: styled(CommonStyled.Button)`
    svg {
      width: 20px;
      height: 20px;
    }

    @media screen and (max-width: 767px) {
      display: inline-block;
      vertical-align: middle;
    }

    @media screen and (max-width: 767px) {
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
    }

    @media screen and (max-width: 767px) {
      width: auto;
      height: auto;
      border-radius: 0;
      color: #000;
      background-color: transparent;
    }
  `,
  ElPagination: styled.div`
    white-space: nowrap;
    padding: 2px 5px;
    color: #303133;
    font-weight: 700;

    vertical-align: middle;
    display: inline-block;
    white-space: nowrap;

    display: inline-block;
    vertical-align: middle;
  `,
  ElPager: styled.ul`
    user-select: none;
    list-style: none;
    display: inline-block;
    vertical-align: top;
    font-size: 0;
    padding: 0;
    margin: 0;
  `,
  Number: styled.li<{ $isSelected: boolean }>`
    padding: 0 4px;
    background: #fff;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: ${props => (props.$isSelected ? 'default' : 'pointer')};
    color: ${props => (props.$isSelected ? '#409eff' : '#303133')};
    box-sizing: border-box;
    text-align: center;
    margin: 0;

    &:hover {
      color: #409eff;
    }

    @media screen and (max-width: 640px) {
      min-width: auto !important;
      margin: 0 8px !important;
      padding: 0 !important;
    }

    @media screen and (max-width: 9999px) {
      position: relative;

      padding: 0;

      position: relative;
    }

    @media screen and (max-width: 640px) {
      &:first-child {
        margin-left: 25px;
      }
    }
  `,
};
