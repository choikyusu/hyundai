import { useState } from 'react';

export const useHeader = () => {
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const onSearchClick = () => {
    setIsSearchClicked(prev => !prev);
  };

  return { isSearchClicked, onSearchClick };
};
