interface AgencyResponse {
  endRow: number;
  firstPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
  lastPage: number;
  list: AgencyDataType[];
  navigateFirstPage: number;
  navigateLastPage: number;
  navigatePages: number;
  navigatepageNums: number[];
  nextPage: number;
  pageNum: number;
  pageSize: number;
  pages: number;
  prePage: number;
  startRow: number;
  total: number;
  branchCount: number;
  agencyCount: number;
}

interface CarResponse {
  list: {
    carCode: string;
    carEngName: string;
    carImgPath: string;
    carName: string;
    carPrice: number;
    carTypeCode: string;
    carTypeName: string;
    mobileCarImgPath: string;
    ranking: string;
  }[];
}

interface NetworkResponse {
  pageNo: number;
  pageSize: number;
  rowSize: number;
  totalCount: number;
  list: NetworkDataType[];
}
