import { Application } from 'express';

import { common } from './common';
import { error } from './error';

const applyMiddleware = (middlewares: Array<Function>) => (
    app: Application,
): void => {
    middlewares.forEach(middleware => {
        middleware(app);
    });
};

// todo: actually add error handling middelwares
export const applyErrorMiddleware = applyMiddleware(error);

export const applyCommonMiddleware = applyMiddleware(common);
