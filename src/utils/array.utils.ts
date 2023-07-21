export const isLastIndex = (index: number) => {
  return {
    at(array: any[] | undefined) {
      return array && array.length - 1 === index;
    },
  };
};
