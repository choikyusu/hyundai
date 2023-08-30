import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import expressSession from 'express-session';
import path from 'path';
import { logRequest } from '../logger/logRequest/logRequest';
import router from '../routes';

const rootDir = path.resolve('./');

const createApp = () => {
  const app = express();

  app.use(
    express.json({
      limit: '5mb',
    }),
  );
  app.use(
    expressSession({
      secret: 'keyboard cat',
      resave: true,
      saveUninitialized: true,
    }),
  );
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());

  app.use(express.static(`${__dirname}/build`));
  app.use('/public', express.static(path.join(rootDir, 'src/public')));

  // app.use(logRequest);

  app.use(router);

  return app;
};

export default createApp;
