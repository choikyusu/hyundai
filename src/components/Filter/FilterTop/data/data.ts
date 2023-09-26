export const PRICE_LIST = Array.from(
  { length: 15 },
  (v, i) => `${(i + 3) * 500}`,
);

export const CAR_TYPE_LIST = {
  data: [
    {
      carTypeCode: 'E',
      carTypeName: '수소 / 전기차',
      carTypeOrder: '4',
      carTypeCount: '6',
      carPurposes: [
        {
          carPurposeCode: '',
          carPurposeName: '자가용',
        },
      ],
    },
    {
      carTypeCode: 'N',
      carTypeName: 'N',
      carTypeOrder: '5',
      carTypeCount: '2',
      carPurposes: [
        {
          carPurposeCode: '',
          carPurposeName: '자가용',
        },
      ],
    },
    {
      carTypeCode: 'P',
      carTypeName: '승용',
      carTypeOrder: '1',
      carTypeCount: '6',
      carPurposes: [
        {
          carPurposeCode: 'J',
          carPurposeName: '자가용',
        },
        {
          carPurposeCode: 'R',
          carPurposeName: '렌터카',
        },
        {
          carPurposeCode: 'H',
          carPurposeName: '장애인',
        },
      ],
    },
    {
      carTypeCode: 'R',
      carTypeName: 'SUV',
      carTypeOrder: '2',
      carTypeCount: '8',
      carPurposes: [
        {
          carPurposeCode: '',
          carPurposeName: '자가용',
        },
      ],
    },
    {
      carTypeCode: 'S',
      carTypeName: 'MPV',
      carTypeOrder: '3',
      carTypeCount: '6',
      carPurposes: [
        {
          carPurposeCode: '',
          carPurposeName: '자가용',
        },
      ],
    },
    {
      carTypeCode: 'L',
      carTypeName: '소형트럭&택시',
      carTypeOrder: '6',
      carTypeCount: '4',
      carPurposes: [
        {
          carPurposeCode: '',
          carPurposeName: '자가용',
        },
      ],
    },
    {
      carTypeCode: 'T',
      carTypeName: '트럭',
      carTypeOrder: '3',
      carTypeCount: '5',
      carPurposes: [],
    },
    {
      carTypeCode: 'B',
      carTypeName: '버스',
      carTypeOrder: '3',
      carTypeCount: '14',
      carPurposes: [],
    },
  ],
  rspStatus: {
    rspCode: '0000',
    rspMessage: '성공',
    uri: 'http://ep-product-service/v1/product/car/type?carTypeFlag=&siteTypeCode=H',
  },
};

export const ENGINE_TYPE_LIST = {
  data: [
    {
      carEnginCode: 'DG',
      carEnginName: '디젤',
      carPurposeCode: null,
      carEnginEnableYn: null,
      displayCarYn: null,
      discountInventoryCaryn: null,
    },
    {
      carEnginCode: 'EL',
      carEnginName: '전기',
      carPurposeCode: null,
      carEnginEnableYn: null,
      displayCarYn: null,
      discountInventoryCaryn: null,
    },
    {
      carEnginCode: 'GS',
      carEnginName: '가솔린',
      carPurposeCode: null,
      carEnginEnableYn: null,
      displayCarYn: null,
      discountInventoryCaryn: null,
    },
    {
      carEnginCode: 'HB',
      carEnginName: '하이브리드',
      carPurposeCode: null,
      carEnginEnableYn: null,
      displayCarYn: null,
      discountInventoryCaryn: null,
    },
    {
      carEnginCode: 'HN',
      carEnginName: '수소',
      carPurposeCode: null,
      carEnginEnableYn: null,
      displayCarYn: null,
      discountInventoryCaryn: null,
    },
    {
      carEnginCode: 'LP',
      carEnginName: 'LPG',
      carPurposeCode: null,
      carEnginEnableYn: null,
      displayCarYn: null,
      discountInventoryCaryn: null,
    },
  ],
  rspStatus: {
    rspCode: '0000',
    rspMessage: '성공',
    uri: 'http://ep-product-service/v1/product/engins?carTypeFlag=&siteTypeCode=H',
  },
};
