export enum PAGE_PATHS {
  HOME = '/',
  BRANCH = '/customer/branch',
}

export const HOST =
  `${process.env.NEXT_PUBLIC_SERVICE_URL}:${process.env.NEXT_PUBLIC_PORT}${process.env.NEXT_PUBLIC_SERVICE_URL_POSTFIX}` ||
  'http://localhost:3000/kakaotalk';

export const API_HOST =
  `${process.env.NEXT_PUBLIC_SERVICE_URL}:${process.env.NEXT_PUBLIC_PORT}${process.env.NEXT_PUBLIC_SERVICE_URL_API_POSTFIX}` ||
  'http://localhost:3000/api';
