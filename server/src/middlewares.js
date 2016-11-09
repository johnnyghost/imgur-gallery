import bodyParser from 'body-parser';
import cors from 'cors';

export const createMiddlewares = (app) => {
  app.use(cors());
  app.use(bodyParser.json({}));
}
