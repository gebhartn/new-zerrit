import * as jwt from 'jsonwebtoken';
import config from 'config';

const sign = (id: number): string => {
    return jwt.sign({ id }, config.get<string>('auth.secret'), {
        expiresIn: '1h',
    });
};

export default sign;
