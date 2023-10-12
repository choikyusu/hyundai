import axios from 'axios';
import { API_HOST } from '../constants/env.constants';
import { ApiResponse } from '../types/base';
import { treatUndefinedAsEmpty } from '../utils/string.util';

export const $getSaleNetworkList = async (
  pageNo: number,
  latitude: number,
  longitude: number,
  point: string | undefined,
) => {
  try {
    const messageResponse: ApiResponse<NetworkResponse> = await axios.get(
      `${API_HOST}/v1/network?latitude=${latitude}&longitude=${longitude}&pageNo=${pageNo}&point=${treatUndefinedAsEmpty(
        point,
      )}`,
    );
    return messageResponse.data.data;
  } catch (e: any) {
    console.log(e);
  }
  return null;
};
