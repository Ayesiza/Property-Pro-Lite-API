import express from 'express';
import { signUp,signIn } from '../controllers/usersController';
import {checkIfUserExists } from '../middlewares/auth';
import { propertyAdvert,updateProperty } from '../controllers/propertysController';
import { markAsSold, deleteAdvert } from '../controllers/propertysController';
import { allProperty, specificProperty } from '../controllers/propertysController';
import { propertType } from '../middlewares/propertymiddleware';


const router = express.Router();

router.post('/users/auth/signup',checkIfUserExists,signUp )

router.post('/users/auth/signin',signIn )

router.post('/property',propertyAdvert )

router.patch('/property/:id', updateProperty)

router.patch('/property/:id/sold',markAsSold)

router.delete('/property/:id',deleteAdvert)

router.get('/property',propertType, allProperty)

router.get('/property/:id', specificProperty)

export default router;