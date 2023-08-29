import express, {
  NextFunction,
  Request,
  RequestHandler,
  Response,
} from 'express';
import authRouter from './auth';
import kakaoUserRouter from './user';

import { authJwt as authKakaoJwt } from '../auth/authJwt';
import { errorHandler } from '../errorHandler/errorHandler';

const router = express.Router();

router.use('/api/auth', authRouter);
router.use('/api/user', authKakaoJwt as RequestHandler, kakaoUserRouter);

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  errorHandler(err, req, res, next);
});

export default router;
