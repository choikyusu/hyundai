import { $getCarList } from '@/src/apis/car.api';
import { callWrapper } from './base/base.api.service';

export const getCarList = async (
  cb: (success: boolean, result?: CarResponse) => void,
) => {
  const callApi = async () => {
    const result = await $getCarList();
    if (result) cb(true, result);
    else cb(false);
  };

  const fail = () => {
    cb(false);
  };

  await callWrapper(callApi, fail);
};
