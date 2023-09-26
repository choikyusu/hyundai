import { $getCarList } from '@/src/apis/car.api';
import { callWrapper } from './base/base.api.service';

export const getCarList = async (
  carTypeCode: string | undefined,
  carEngineCode: string | undefined,
  fromCarPrice: string | undefined,
  toCarPrice: string | undefined,
  cb: (success: boolean, result?: CarResponse) => void,
) => {
  const callApi = async () => {
    const result = await $getCarList(
      carTypeCode,
      carEngineCode,
      fromCarPrice,
      toCarPrice,
    );
    if (result) cb(true, result);
    else cb(false);
  };

  const fail = () => {
    cb(false);
  };

  await callWrapper(callApi, fail);
};
