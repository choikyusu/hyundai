import axios from 'axios';
import { API_HOST } from '../constants/env.constants';
import { ApiResponse } from '../types/base';
import { treatUndefinedAsEmpty } from '../utils/string.util';

export const $getAgencyList = async (
  pageSize: number,
  pageNo: number,
  latitude: number,
  longitude: number,
  agencyTypeCode: number | undefined,
) => {
  try {
    const messageResponse: ApiResponse<AgencyResponse> = await axios.get(
      `/api/v1/agencies?latitude=${latitude}&longitude=${longitude}&pageNo=${pageNo}&pageSize=${pageSize}&agencyTypeCode=${treatUndefinedAsEmpty(
        agencyTypeCode,
      )}`,
    );
    return messageResponse.data.data;
  } catch (e: any) {
    console.log(e);
  }
  return null;
};
