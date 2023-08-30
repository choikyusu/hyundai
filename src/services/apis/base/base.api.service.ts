import { AxiosError } from 'axios';

export const callWrapper = async (
  callApi: () => Promise<void>,
  fail: () => void,
) => {
  try {
    await callApi();
  } catch (err: any) {
    if (err instanceof AxiosError) {
      fail();
    }
  }
};
