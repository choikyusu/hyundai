import { $getAgencyList } from '@/src/apis/agency.api';
import { callWrapper } from './base/base.api.service';

export const getAgencyList = async (
  pageSize: number,
  pageNo: number,
  latitude: number,
  longitude: number,
  cb: (success: boolean, result?: AgencyResponse) => void,
) => {
  const callApi = async () => {
    const result = await $getAgencyList(pageSize, pageNo, latitude, longitude);
    if (result) cb(true, result);
    else cb(false);
  };

  const fail = () => {
    cb(false);
  };

  await callWrapper(callApi, fail);
};
