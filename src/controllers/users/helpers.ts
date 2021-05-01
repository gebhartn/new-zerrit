import { User } from '@prisma/client';

export interface AuthUser {
    id: number;
    password: string;
}

export interface AuthPayload {
    id: number;
    username: string;
    createdAt: Date;
}

export const makeAuthPayload = (user: User | null): AuthPayload => {
    if (!user) {
        throw new Error('Failed to create user');
    }

    return { id: user.id, username: user.username, createdAt: new Date() };
};

export const makeUser = (user: Partial<User | null>, shouldExist = false): AuthUser => {
    if (shouldExist && !user) {
        throw new Error('Could not find user');
    }

    if (user && !user.password) {
        throw new Error('User seems to be missing a password');
    }

    if (user && !user.id) {
        throw new Error('User seems to be missing an ID');
    }

    return user as AuthUser;
};
