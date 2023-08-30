import axios from 'axios';
import { API_HOST } from '../constants/env.constants';
import { ApiResponse } from '../types/base';

export const $getAgencyList = async (
  pageSize: number,
  pageNo: number,
  latitude: number,
  longitude: number,
) => {
  try {
    const messageResponse: ApiResponse<AgencyResponse> = await axios.get(
      `${API_HOST}/v1/agencies?latitude=${latitude}&longitude=${longitude}&pageNo=${pageNo}&pageSize=${pageSize}`,
    );
    return messageResponse.data.data;
  } catch (e: any) {
    console.log(e);
  }
  return null;
};
