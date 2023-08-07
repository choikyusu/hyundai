export const useTabContent = () => {
  function hasKeyword(name: string, keyword: string) {
    return name.includes(keyword);
  }

  return { hasKeyword };
};
