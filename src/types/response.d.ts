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
}
