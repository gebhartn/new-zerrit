import { RequestHandler } from 'express';

export const sayHello: RequestHandler = (_req, res) => {
    return res.status(200).json({ hello: 'world' });
};

export const sayName: RequestHandler = (req, res) => {
    const { name = '' } = req.body;

    if (!name) {
        res.status(400).json({ err: 'Name is required' });
    }

    return res.status(200).json({ hello: 'hello' + name });
};
