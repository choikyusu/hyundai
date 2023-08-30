import express from 'express';
import { dataList } from '../data/data';
import { calculateDistance } from '../utils/distance.util';

const router = express.Router();

router.get('/', async (req, res, next) => {
  const {
    latitude,
    longitude,
    mapLatitude,
    mapLongitude,
    radius,
    pageSize,
    pageNo,
    searchFilter,
    agencyTypeCode,
    deliveryAreaCode,
    localAreaCode,
    findType,
  } = req.query;

  const newData = dataList.map(agency => {
    const { lattitude: agencyLat, longitude: agencyLong } = agency;

    if (typeof latitude === 'string' && typeof longitude === 'string') {
      const distance = calculateDistance(
        latitude,
        longitude,
        agencyLat,
        agencyLong,
      );
      return { ...agency, distance: parseFloat(distance.toFixed(1)) };
    }

    return { ...agency, distance: 9999999 };
  });

  newData.sort((a, b) => {
    return a.distance < b.distance ? -1 : 1;
  });

  const result = {
    data: {
      total: newData.length,
      list: newData.slice(
        (Number(pageNo) - 1) * Number(pageSize),
        Number(pageNo) * Number(pageSize),
      ),
      pageNum: Number(pageNo),
      pageSize: Number(pageSize),
      startRow: 1,
      endRow: 10,
      pages: 15,
      prePage: Number(pageNo) - 1,
      nextPage: Number(pageNo) + 1,
      isFirstPage: true,
      isLastPage: false,
      hasPreviousPage: false,
      hasNextPage: true,
      navigatePages: 8,
      navigatepageNums: [1, 2, 3, 4, 5, 6, 7, 8],
      navigateFirstPage: 1,
      navigateLastPage: 8,
      firstPage: 1,
      lastPage: 8,
    },
  };

  res.status(200).json(result);
});
export default router;
