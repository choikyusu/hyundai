import axios from 'axios';
import { API_HOST } from '../constants/env.constants';
import { ApiResponse } from '../types/base';
import { treatUndefinedAsEmpty } from '../utils/string.util';

export const $getSaleNetworkList = async (
  pageNo: number,
  latitude: number,
  longitude: number,
  point: string | undefined,
  space: string | undefined,
) => {
  try {
    const messageResponse: ApiResponse<NetworkResponse> = await axios.get(
      `/api/v1/network?latitude=${latitude}&longitude=${longitude}&pageNo=${pageNo}&point=${treatUndefinedAsEmpty(
        point,
      )}&is_xcientspace=${treatUndefinedAsEmpty(space)}`,
    );
    return messageResponse.data.data;
  } catch (e: any) {
    console.log(e);
  }
  return null;
};
