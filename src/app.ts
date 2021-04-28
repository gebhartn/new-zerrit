import express from 'express';
import { applyCommonMiddleware, applyErrorMiddleware } from './middlewares';
import routes from './routes';

const app = express();
app.disable('x-powered-by');

applyCommonMiddleware(app);

app.use('/api', routes);

applyErrorMiddleware(app);

export default app;
