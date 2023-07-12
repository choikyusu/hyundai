import { useState } from 'react';

export const useMobileSearch = () => {
  const [recentList, setRecentList] = useState<string[]>([
    'test',
    'test2',
    'test3',
  ]);
  const [topList, setTopList] = useState<string[]>([
    '사양조회',
    '네비게이션 업데이트',
    '케스퍼',
    '블루링크',
    '고객서비스',
    '가격표',
  ]);

  const [keyword, setKeyword] = useState<'recent' | 'top'>('recent');

  const onClickKeyword = (selectedKeyword: 'recent' | 'top') => {
    setKeyword(selectedKeyword);
  };

  const onClickDeleteKeyword = () => {
    setRecentList([]);
  };

  return {
    keyword,
    recentList,
    topList,
    setKeyword,
    onClickKeyword,
    onClickDeleteKeyword,
  };
};
