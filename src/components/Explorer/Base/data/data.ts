export const BASE_TYPE_LIST: {
  type: 'fuelType' | 'bodyType' | 'budgetRange' | 'passenger' | 'luggage';
  title: string;
  descList: string[];
  backgroundPosition: string;
  backgroundColor: string;
  link: string;
}[] = [
  {
    type: 'fuelType',
    title: '연료타입',
    descList: ['고객님이 원하시는', '연료타입을 선택해주세요.'],
    backgroundPosition: '48.6607% 6.7059%',
    backgroundColor: '#738ba9',
    link: '/vehicles/explorer/base/fuel_type',
  },
  {
    type: 'bodyType',
    title: '바디타입',
    descList: ['고객님이 선호하는', '바디타입을 선택해주세요.'],
    backgroundPosition: '4.59643% 7.7059%',
    backgroundColor: '#528898',
    link: '/vehicles/explorer/base/body_type',
  },
  {
    type: 'budgetRange',
    title: '예산범위',
    descList: ['고객님이 생각하는', '예산범위를 선택해주세요.'],
    backgroundPosition: '69.9429% 7.7059%',
    backgroundColor: '#b38664',
    link: '/vehicles/explorer/base/budget_range',
  },
  {
    type: 'passenger',
    title: '인원수',
    descList: ['고객님이 함께 차를', '이용하실 인원수를', '선택해주세요.'],
    backgroundPosition: '92.625% 7.7059%',
    backgroundColor: '#ca5a41',
    link: '/vehicles/explorer/base/passenger',
  },
  {
    type: 'luggage',
    title: '공간활용',
    descList: ['고객님이 주로 실어다니는', '짐을 알려주세요.'],
    backgroundPosition: '4.29643% 54.902%',
    backgroundColor: '#67907f',
    link: '/vehicles/explorer/base/luggage',
  },
];
