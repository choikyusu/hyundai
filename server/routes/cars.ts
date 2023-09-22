import express from 'express';
import { carData } from '../data/car.data';

const router = express.Router();

router.get('/cars/', async (req, res, next) => {
  const {
    carTypeCode,
    carEngineCode,
    filterOptionCodeM,
    filterOptionCodeS,
    fromCarPrice,
    toCarPrice,
  } = req.query;

  res.status(200).json({
    data: carData,
    rspStatus: {
      rspCode: '0000',
      rspMessage: '성공',
      uri: '',
    },
  });
});
export default router;
