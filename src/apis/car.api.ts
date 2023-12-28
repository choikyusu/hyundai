import axios from 'axios';
import { API_HOST } from '../constants/env.constants';
import { ApiResponse } from '../types/base';
import { treatUndefinedAsEmpty } from '../utils/string.util';

export const $getCarList = async (
  carTypeCode: string | undefined,
  carEngineCode: string | undefined,
  filterOptionCodeM: string | undefined,
  fromCarPrice: string | undefined,
  toCarPrice: string | undefined,
) => {
  try {
    const messageResponse: ApiResponse<CarResponse> = await axios.get(
      `/api/v1/product/cars?carTypeCode=${treatUndefinedAsEmpty(
        carTypeCode,
      )}&carEngineCode=${treatUndefinedAsEmpty(
        carEngineCode,
      )}&filterOptionCodeM=${treatUndefinedAsEmpty(
        filterOptionCodeM,
      )}&fromCarPrice=${treatUndefinedAsEmpty(
        fromCarPrice,
      )}&toCarPrice=${treatUndefinedAsEmpty(toCarPrice)}`,
    );
    return messageResponse.data.data;
  } catch (e: any) {
    console.log(e);
  }
  return null;
};
