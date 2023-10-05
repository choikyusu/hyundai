import { $getCarList } from '@/src/apis/car.api';
import { callWrapper } from './base/base.api.service';

export const getCarList = async (
  carTypeCode: string | undefined,
  carEngineCode: string | undefined,
  filterOptionCodeM: string | undefined,
  fromCarPrice: string | undefined,
  toCarPrice: string | undefined,
  cb: (loading: boolean, success: boolean, result?: CarResponse) => void,
) => {
  cb(true, false);
  const callApi = async () => {
    const result = await $getCarList(
      carTypeCode,
      carEngineCode,
      filterOptionCodeM,
      fromCarPrice,
      toCarPrice,
    );
    if (result) cb(false, true, result);
    else cb(false, false);
  };

  const fail = () => {
    cb(false, false);
  };

  await callWrapper(callApi, fail);
};
