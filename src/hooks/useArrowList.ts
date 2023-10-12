import { useState } from 'react';

const VISIBLE_RANGE = 2;
const ARROW_LIST_SIZE = 5;

interface useArrowListProps {
  totalPage: number;
}

export const useArrowList = ({ totalPage }: useArrowListProps) => {
  const [pageIndexList, setPageIndexList] = useState<number[]>([]);
  const [pageNo, setPageNo] = useState(1);

  const onClickPageNo = (number: number) => setPageNo(number);
  const onClickArrow = (arrowType: ArrowType) => {
    const number = getPageNo(arrowType);
    onClickPageNo(number);
  };

  const setVisibleIndex = (currentPageNo: number, totalPage: number) => {
    const { visibledLastIndex, visibledStartIndex } = calcVisibleIndex(
      currentPageNo,
      totalPage,
    );

    const indexList = Array.from(
      { length: totalPage },
      (_, index) => index + 1,
    ).slice(visibledStartIndex, visibledLastIndex);

    setPageIndexList(indexList);
  };

  return {
    pageNo,
    pageIndexList,
    onClickArrow,
    onClickPageNo,
    setVisibleIndex,
  };

  function getPageNo(arrowType: ArrowType) {
    switch (arrowType) {
      case 'First':
        return 1;
      case 'Previous':
        return pageNo > 1 ? pageNo - 1 : 1;
      case 'Last':
        return totalPage;
      case 'Next':
        return pageNo + 1 < totalPage ? pageNo + 1 : totalPage;
      default:
        return pageNo;
    }
  }

  function calcVisibleIndex(currentPageNo: number, totalPage: number) {
    let visibledStartIndex = currentPageNo - 1 - VISIBLE_RANGE;
    let visibledLastIndex = currentPageNo + VISIBLE_RANGE;

    if (totalPage <= ARROW_LIST_SIZE) {
      visibledStartIndex = 0;
      visibledLastIndex = totalPage;
    } else if (visibledStartIndex < 0) {
      visibledStartIndex = 0;
      visibledLastIndex = ARROW_LIST_SIZE;
    } else if (visibledLastIndex > totalPage) {
      visibledStartIndex = totalPage - ARROW_LIST_SIZE;
      visibledLastIndex = totalPage;
    }

    return { visibledStartIndex, visibledLastIndex };
  }
};
