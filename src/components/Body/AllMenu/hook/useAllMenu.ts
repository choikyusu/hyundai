import { footerDataList } from '@/src/components/Footer/data/data';
import { lnbMenuTreeList } from '@/src/components/Header/MainHeader/Gnb/LnbList/data/data';
import { useState } from 'react';

export const useAllMenu = () => {
  const [keyword, setKeyword] = useState('');
  const [treeList, setTreeList] = useState<PCMenuTreeType[]>(() => {
    return [
      ...lnbMenuTreeList,
      { name: '회사소개', level2List: footerDataList },
    ];
  });
  const [filteredTreeList, setFilteredTreeList] = useState<PCMenuTreeType[]>([
    ...lnbMenuTreeList,
    { name: '회사소개', level2List: footerDataList },
  ]);

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
    treeList,
  };

  function filteringTreeList(value: string) {
    const newList: PCMenuTreeType[] = [];

    lnbMenuTreeList.forEach(level1 => {
      const filteredLevel2List = level1.level2List.filter(level2 => {
        if (level2.type === 'Car')
          return level2.level3List.some(
            level3 => level3.carName.indexOf(value) >= 0,
          );
        if (level2.type === 'Menu')
          return level2.level3List.some(
            level3 => level3.name.indexOf(value) >= 0,
          );

        return false;
      });

      if (filteredLevel2List.length > 0) {
        newList.push({
          ...level1,
          level2List: filteredLevel2List,
        });
      }
    });

    const filteredLevel2List = footerDataList.filter(level2 => {
      return level2.subMenuList.some(
        level3 => level3.subTitle.indexOf(value) >= 0,
      );
    });

    if (filteredLevel2List.length > 0) {
      newList.push({
        name: '회사소개',
        level2List: filteredLevel2List,
      });
    }

    setFilteredTreeList(newList);
  }
};
