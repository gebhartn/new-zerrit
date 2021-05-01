import { Router, Request, Response } from 'express';

import { UserController } from '../../controllers';

const router = Router();

// todo: error handling
const handleLogin = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    if (!username) {
        return res.status(400).json({ message: 'Username is required' });
    }
    if (!password) {
        return res.status(400).json({ message: 'Password is required' });
    }

    let user = '';

    try {
        user = await UserController.login(username, password);
        res.status(200).json({ user });
    } catch (e) {
        return res.status(500).json({ err: e.message });
    }
};

router.post('/login', handleLogin);
// router.post('/register', handleRegister);

export default router;
