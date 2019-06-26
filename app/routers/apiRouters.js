import express from 'express';
import { signUp,signIn } from '../controllers/usersController';
import {checkIfUserExists } from '../middlewares/auth';
import { propertyAdvert } from '../controllers/propertysController';
import { propertyAdvertPost } from '../middlewares/propertymiddleware';

const router = express.Router();

router.post('/users/auth/signup',checkIfUserExists,signUp )

router.post('/users/auth/signin',signIn )

router.post('/property',propertyAdvert )

export default router;