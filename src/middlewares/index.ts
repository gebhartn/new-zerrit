import { Application } from 'express';

import { common } from './common';

const applyMiddleware = (middlewares: Array<Function>) => (
  app: Application,
): void => {
  middlewares.forEach((middleware) => {
    middleware(app);
  });
};

// todo: actually add error handling middelwares
const error = [() => {}];
export const applyErrorMiddleware = applyMiddleware(error);

export const applyCommonMiddleware = applyMiddleware(common);
