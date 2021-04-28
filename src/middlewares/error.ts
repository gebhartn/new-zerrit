import { Application, ErrorRequestHandler } from 'express';

export const inputError: ErrorRequestHandler = (err, _req, res, next) => {
    if (
        err instanceof SyntaxError &&
        (err as any).status === 400 &&
        'body' in err
    ) {
        return res.status(400).json({ err: (err as any).message });
    }
    return next();
};

export const handleInputError = (app: Application) => {
    app.use(inputError);
};

export const error = [handleInputError];
