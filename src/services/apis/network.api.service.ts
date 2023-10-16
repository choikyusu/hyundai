import { callWrapper } from './base/base.api.service';
import { $getSaleNetworkList } from '@/src/apis/network.api';

export const getSaleNetworkList = async (
  pageNo: number,
  latitude: number,
  longitude: number,
  point: string | undefined,
  space: string | undefined,
  cb: (loading: boolean, success: boolean, result?: NetworkResponse) => void,
) => {
  cb(true, false);
  const callApi = async () => {
    const result = await $getSaleNetworkList(
      pageNo,
      latitude,
      longitude,
      point,
      space,
    );
    if (result) cb(false, true, result);
    else cb(false, false);
  };

  const fail = () => {
    cb(false, false);
  };

  await callWrapper(callApi, fail);
};
