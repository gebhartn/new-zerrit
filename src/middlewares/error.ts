import { Application, ErrorRequestHandler } from 'express';

export const inputError: ErrorRequestHandler = (err, _req, res, next) => {
    if (err instanceof SyntaxError && (err as { status?: number }).status === 400 && 'body' in err) {
        return res.status(400).json({ err: (err as { message: string }).message });
    }
    return next();
};

export const handleInputError = (app: Application): void => {
    app.use(inputError);
};

export const error = [handleInputError];
