import { Router } from 'express';
import { default as auth } from './auth';

const router = Router();

router.use('/auth', auth);

export default router;
