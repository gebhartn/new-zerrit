import { Router } from 'express';
import * as Hello from './hello';

const router = Router();

router.get('/hello', Hello.sayHello);
router.post('/hello', Hello.sayName);

export default router;
