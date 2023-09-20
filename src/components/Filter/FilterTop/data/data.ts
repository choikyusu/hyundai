export const PRICE_LIST = Array.from(
  { length: 15 },
  (v, i) => `${(i + 3) * 500}만원`,
);

export const CAR_TYPE_LIST = {
  type: 'CarTypeList',
  title: '차종',
  list: [
    {
      name: '수소/전기차',
    },
    {
      name: 'N',
    },
    {
      name: '승용',
    },
    {
      name: 'SUV',
    },
    {
      name: 'MPV',
    },
    {
      name: '소형트럭&택시',
    },
  ],
};

export const ENGINE_TYPE_LIST = {
  type: 'EngineTypeList',
  title: '엔진',
  list: [
    {
      name: '디젤',
    },
    {
      name: '전기',
    },
    {
      name: '가솔린',
    },
    {
      name: '하이브리드',
    },
    {
      name: '수소',
    },
    {
      name: 'LPG',
    },
  ],
};
