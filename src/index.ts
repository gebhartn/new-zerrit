import config from 'config';
import app from './app';
import { logger } from './utils';

app.listen(config.get<number>('port'), () => logger.info('hello, world'));
