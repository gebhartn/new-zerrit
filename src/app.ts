import express from 'express';
import { applyCommonMiddleware, applyErrorMiddleware } from './middlewares';
import routes from './routes';

const app = express();

applyCommonMiddleware(app);

app.use('/', routes);

applyErrorMiddleware(app);

app.get('/', (req, res) => {
    res.status(200).json({ hello: 'world' });
});

export default app;
