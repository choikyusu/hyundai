import { $getAgencyList } from '@/src/apis/agency.api';
import { callWrapper } from './base/base.api.service';

export const getAgencyList = async (
  pageSize: number,
  pageNo: number,
  latitude: number,
  longitude: number,
  agencyTypeCode: number | undefined,
  cb: (loading: boolean, success: boolean, result?: AgencyResponse) => void,
) => {
  cb(true, false);
  const callApi = async () => {
    const result = await $getAgencyList(
      pageSize,
      pageNo,
      latitude,
      longitude,
      agencyTypeCode,
    );
    if (result) cb(false, true, result);
    else cb(false, false);
  };

  const fail = () => {
    cb(false, false);
  };

  await callWrapper(callApi, fail);
};
