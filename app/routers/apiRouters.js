import express from 'express';
import { signUp,signIn } from '../controllers/usersController';
import {checkIfUserExists} from '../middlewares/auth';
const router = express.Router();

router.post('/users/auth/signup',checkIfUserExists,signUp )

router.post('/users/auth/signin',signIn );

export default router;