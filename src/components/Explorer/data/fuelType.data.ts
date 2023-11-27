import { PRICE_LIST } from '../SubType/BudgetRange/data/data';

export const FUEL_TYPE_LIST: BaseSubItemType[] = [
  { id: '2110000000', name: '가솔린', type: 'medium' },
  { id: '2120000000', name: '디젤', type: 'medium' },
  { id: '2130000000', name: '친환경', type: 'medium' },
  { id: '2140000000', name: 'LPG', type: 'medium' },
];

export const BUDGET_RANGE_LIST: BaseSubItemType[] = PRICE_LIST.map(
  (price, index) => ({ id: String(index), name: price, type: 'medium' }),
);

export const BODY_TYPE_LIST: BaseSubItemType[] = [
  { id: '2210000000', name: '승용', type: 'medium' },
  { id: '2220000000', name: 'SUV', type: 'medium' },
  { id: '2230000000', name: 'MPV', type: 'medium' },
];

export const PASSENGER_LIST: BaseSubItemType[] = [
  { id: '2310000000', name: '성인', type: 'medium' },
  { id: '2320000000', name: '어린이', type: 'medium' },
  { id: '2330000000', name: '아기', type: 'medium' },
];
