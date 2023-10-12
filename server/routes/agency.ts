import express from 'express';
import { dataList } from '../data/agency.data';
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

  const newData = dataList
    .filter(agency =>
      agencyTypeCode ? agency.agencyTypeCode === agencyTypeCode : true,
    )
    .map(agency => {
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
      total: dataList.length,
      branchCount: dataList.filter(data => data.agencyTypeCode === '1').length,
      agencyCount: dataList.filter(data => data.agencyTypeCode === '2').length,
      list: newData.slice(
        (Number(pageNo) - 1) * Number(pageSize),
        Number(pageNo) * Number(pageSize),
      ),
      pageNum: Number(pageNo),
      pageSize: Number(pageSize),
      startRow: 1,
      endRow: 10,
      pages: Math.ceil(newData.length / Number(pageSize)),
      prePage: Number(pageNo) - 1,
      nextPage: Number(pageNo) + 1,
      isFirstPage: Number(pageNo) === 1,
      isLastPage:
        Number(pageNo) === Math.ceil(newData.length / Number(pageSize)),
      hasPreviousPage: Number(pageNo) !== 1,
      hasNextPage:
        Number(pageNo) !== Math.ceil(newData.length / Number(pageSize)),
    },
  };

  res.status(200).json(result);
});
export default router;
