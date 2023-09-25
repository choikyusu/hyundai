import axios from 'axios';
import { API_HOST } from '../constants/env.constants';
import { ApiResponse } from '../types/base';

export const $getCarList = async () => {
  try {
    const messageResponse: ApiResponse<CarResponse> = await axios.get(
      `${API_HOST}/v1/product/cars`,
    );
    return messageResponse.data.data;
  } catch (e: any) {
    console.log(e);
  }
  return null;
};
