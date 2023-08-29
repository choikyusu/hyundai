import { Request, Response, NextFunction } from 'express';
import { logger } from '../logger/logger';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  logger.info(err);

  switch (err.constructor) {
    default:
      return res.status(500).json({ error: '서버 에러' });
  }
};
