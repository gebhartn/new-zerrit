import { Server as HTTP } from 'http';
import { Server as HTTPS } from 'https';
import * as bcrypt from 'bcryptjs';
import config from 'config';

import logger from './logger';

export const timeoutExit = (duration = 10): ReturnType<typeof setTimeout> => {
    const timeout = setTimeout(() => {
        logger.error({ code: process.exitCode });
        process.exit();
    }, duration * 1000);

    timeout.unref();

    return timeout;
};

export const handleUncaughtException = ({ http, https }: { http: HTTP; https: HTTPS }) => (err: Error): void => {
    logger.error(err);
    process.exitCode = 1;
    https.close(() => {
        logger.info('HTTPS server is shut down');
    });
    http.close(() => {
        logger.info('HTTP server is shut down');
    });

    timeoutExit();
};

export const comparePassword = (compare: string, hash: string): Promise<boolean> => {
    if (!compare) {
        throw new Error('Missing string to compare');
    }

    if (!hash) {
        throw new Error('Hash string is required');
    }

    return bcrypt.compare(compare, hash);
};

export const hashPassword = (password: string): Promise<string> => {
    const salt = config.get<number>('auth.salt') || 10;

    return bcrypt.hash(password, salt);
};

export { default as sign } from './sign-jwt';

export { default as logger } from './logger';
