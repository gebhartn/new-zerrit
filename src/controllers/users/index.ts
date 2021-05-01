import { hashPassword, comparePassword, sign } from '../../utils';
import { Users } from '../../lib';

import { makeUser, makeAuthPayload, AuthPayload } from './helpers';

export const login = async (username: string, password: string): Promise<string> => {
    const user = makeUser(await Users.findByUsername(username), true);

    if (!user) {
        throw new Error('Could not find a user with with username: ' + username);
    }

    const approved = await comparePassword(password, user.password);

    if (!approved) {
        throw new Error('Invalid password');
    }

    const token = sign(user.id);

    return token;
};

export const register = async (username: string, password: string): Promise<AuthPayload> => {
    const exists = makeUser(await Users.findByUsername(username));

    console.log(exists);

    if (exists) {
        throw new Error('That user already exists');
    }

    const hash = await hashPassword(password);

    const user = makeAuthPayload(await Users.create({ username, password: hash }));

    return user;
};
