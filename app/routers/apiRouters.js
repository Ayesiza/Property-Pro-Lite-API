import express from 'express';
import { signUp,signIn } from '../controllers/usersController';
import {checkIfUserExists } from '../middlewares/auth';
import { propertyAdvert } from '../controllers/propertysController';
import { updateProperty } from '../controllers/propertysController';


const router = express.Router();

router.post('/users/auth/signup',checkIfUserExists,signUp )

router.post('/users/auth/signin',signIn )

router.post('/property',propertyAdvert )

router.patch('/property/:id', updateProperty)

export default router;