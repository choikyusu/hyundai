import Next from 'next';
import { logger } from './logger/logger';
import createApp from './express/express';

require('dotenv').config();

const { NODE_ENV } = process.env;
const dev = NODE_ENV !== 'production';

const nextJs = Next({ dev });
const nextJsRequestHandler = nextJs.getRequestHandler();

(async () => {
  try {
    await nextJs.prepare();
    const app = createApp();
    app.get('*', (req, res) => {
      return nextJsRequestHandler(req, res);
    });

    app.listen(process.env.PORT, () => {
      logger.info(`http://localhost:${process.env.PORT}`);
    });
  } catch (ex: any) {
    console.error(ex.stack);
    process.exit(1);
  }
})();
