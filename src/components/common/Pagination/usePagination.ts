interface usePaginationProps {
  onClickArrow: (arrowType: ArrowType) => void;
}

export const usePagination = ({ onClickArrow }: usePaginationProps) => {
  const onClickFirstPage = () => onClickArrow('First');
  const onClickPreviousPage = () => onClickArrow('Previous');
  const onClickNextPage = () => onClickArrow('Next');
  const onClickLastPage = () => onClickArrow('Last');

  return {
    onClickFirstPage,
    onClickPreviousPage,
    onClickNextPage,
    onClickLastPage,
  };
};
