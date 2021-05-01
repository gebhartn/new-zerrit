import { PrismaClient, User, Image, Prisma } from '@prisma/client';

const client = new PrismaClient();

interface CreateUserArgs {
    username: string;
    password: string;
}
export type PrismaUser = User | null;
export type PrismaImage = Image;

export const create = async (data: CreateUserArgs): Promise<User | null> => {
    return client.user.create({ data });
};

export const findById = (
    id: number,
    select: Prisma.UserSelect = {
        id: true,
        username: true,
        password: true,
        images: true,
    }
): Promise<Partial<User> | null> => {
    return client.user.findUnique({
        where: { id },
        select,
    });
};

export const findByUsername = async (
    username: string,
    select: Prisma.UserSelect = {
        id: true,
        username: true,
        password: true,
        images: true,
    }
): Promise<Partial<User> | null> => {
    return client.user.findUnique({
        where: { username },
        select,
    });
};
