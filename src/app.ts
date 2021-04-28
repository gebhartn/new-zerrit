import express from 'express';
import { applyCommonMiddleware } from './middlewares';

const app = express();

applyCommonMiddleware(app);

app.get('/', (req, res) => {
  res.status(200).json({ hello: 'world' });
});

export default app;
