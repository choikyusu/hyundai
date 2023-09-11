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

  const [keywordType, setKeywordType] = useState<number>(1);
  const [searchKeyword, setSearchKeyword] = useState<string>('');

  const onClickKeyword = (selectedKeyword: number) => {
    setKeywordType(selectedKeyword);
  };

  const onClickDeleteKeyword = () => {
    setRecentList([]);
  };

  const onChangeKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { value } = event.target;
    setSearchKeyword(value);
  };

  return {
    keywordType,
    recentList,
    topList,
    searchKeyword,
    onChangeKeyword,
    setKeywordType,
    onClickKeyword,
    onClickDeleteKeyword,
  };
};
