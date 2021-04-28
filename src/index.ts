import config from 'config';

const port = config.get<number>('port');
console.log(port);
