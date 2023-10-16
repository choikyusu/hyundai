/* eslint-disable camelcase */
import express from 'express';
import { calculateDistance } from '../utils/distance.util';
import { dataList } from '../data/network.data';

const router = express.Router();

router.get('/', async (req, res, next) => {
  const { pageNo, point, latitude, longitude, is_xcientspace } = req.query;

  const pageSize = 10;

  const newData = dataList
    .filter(network => (point ? network.point === point : true))
    .filter(network =>
      is_xcientspace ? network.is_xcientspace === is_xcientspace : true,
    )
    .map(network => {
      const { lat: networkLat, lng: networkLong } = network;

      if (typeof latitude === 'string' && typeof longitude === 'string') {
        const distance = calculateDistance(
          latitude,
          longitude,
          networkLat,
          networkLong,
        );
        return { ...network, distance: parseFloat(distance.toFixed(1)) };
      }

      return { ...network, distance: 9999999 };
    });

  newData.sort((a, b) => {
    return a.distance < b.distance ? -1 : 1;
  });

  const result = {
    data: {
      pageNo: Number(pageNo),
      totalCount: newData.length,
      rowSize: pageSize,
      pageSize: Math.ceil(newData.length / Number(pageSize)),
      list: newData.slice(
        (Number(pageNo) - 1) * Number(pageSize),
        Number(pageNo) * Number(pageSize),
      ),
    },
  };

  res.status(200).json(result);
});
export default router;
