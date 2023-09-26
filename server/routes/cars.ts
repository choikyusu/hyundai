import express from 'express';
import { carList } from '../data/car.data';

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

  let resultCarData = carList;

  if (typeof carTypeCode === 'string' && carTypeCode !== '') {
    resultCarData = resultCarData.filter(data =>
      carTypeCode.includes(data.carTypeCode),
    );
  }

  if (typeof carEngineCode === 'string' && carEngineCode !== '') {
    resultCarData = resultCarData.filter(data =>
      carEngineCode.includes(data.carEngineCode),
    );
  }

  if (
    typeof fromCarPrice === 'string' &&
    fromCarPrice !== '' &&
    typeof toCarPrice === 'string' &&
    toCarPrice !== ''
  ) {
    resultCarData = resultCarData.filter(
      data =>
        data.carPrice >= Number(fromCarPrice) * 10000 &&
        data.carPrice <= Number(toCarPrice) * 10000,
    );
  }

  res.status(200).json({
    data: { list: resultCarData },
    rspStatus: {
      rspCode: '0000',
      rspMessage: '성공',
      uri: '',
    },
  });
});
export default router;
