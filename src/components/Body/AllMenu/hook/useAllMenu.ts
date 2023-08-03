import { lnbMenuTreeList } from '@/src/components/Header/MainHeader/Gnb/LnbList/data/data';
import { useState } from 'react';

export const useAllMenu = () => {
  const [keyword, setKeyword] = useState('');
  const [filteredTreeList, setTreeList] = useState(lnbMenuTreeList);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { value } = event.target;
    setKeyword(value);
    filteringTreeList(value);
  };

  return {
    keyword,
    onChange,
    filteredTreeList,
  };

  function filteringTreeList(value: string) {
    setTreeList(lnbMenuTreeList);
  }
};
