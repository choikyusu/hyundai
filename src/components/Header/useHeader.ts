import { useState } from 'react';

export const useHeader = () => {
  const [headerType, setHeaderType] = useState<'None' | 'Search' | 'Menu'>(
    'None',
  );

  const onClickType = (type: 'None' | 'Search' | 'Menu') => {
    setHeaderType(prev => {
      if (prev === type) return 'None';
      return type;
    });
  };

  return { headerType, onClickType };
};
