import logger from './logger';
import { Server as HTTP } from 'http';
import { Server as HTTPS } from 'https';

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

export { default as logger } from './logger';
