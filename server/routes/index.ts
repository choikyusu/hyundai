import express, { NextFunction, Request, Response } from 'express';
import authRouter from './auth';
import agencyRouter from './agency';

import { errorHandler } from '../errorHandler/errorHandler';

const router = express.Router();

router.use('/api/auth', authRouter);
router.use('/api/v1/agencies', agencyRouter);
router.use('/api/v1/product', agencyRouter);

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  errorHandler(err, req, res, next);
});

export default router;
