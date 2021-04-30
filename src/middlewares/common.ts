import { urlencoded, json, Application } from 'express';
import cors from 'cors';
import compression from 'compression';
import morgan, { StreamOptions } from 'morgan';

import { logger } from '../utils';

const stream: StreamOptions = {
    write: (msg: string) => logger.http(msg),
};
const skip = (): boolean => {
    const env = process.env.NODE_ENV || 'development';
    return env !== 'development';
};

const morganConfig = morgan(':method :url :status :res[content-length] - :response-time ms', { stream, skip });

export const handleCors = (app: Application): void => {
    app.use(cors({ credentials: true, origin: true }));
};
export const handleParsing = (app: Application): void => {
    app.use(urlencoded({ extended: true }));
    app.use(json());
};
export const handleCompression = (app: Application): void => {
    app.use(compression());
};
export const handleMorgan = (app: Application): void => {
    app.use(morganConfig);
};

export const common = [handleCors, handleParsing, handleMorgan, handleCompression];
