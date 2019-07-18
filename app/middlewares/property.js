import Joi from '@hapi/joi';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { propertys } from '../models/propertys';


dotenv.config();

// verify if user token is valid
export const verifyUserToken = (req, res, next) => {
  jwt.verify(req.token, process.env.appSecretkey, (err, userFromToken) => {
    if (err) return res.status(403).json({ error: 403, message: err.message });
    next();
  });
};

export const propertyType = (req, res, next) => {
  if (req.query.type) {
    const property = propertys.filter(a => a.type === req.query.type);
    return res.status(200).send({ status: 200, property });
  }
  next();
};

// validate input on  updateProperty input
export function propertyValidate(req, res, next) {
  const schema = Joi.object().keys({
    state: Joi.string().regex(/^[a-zA-Z\-]+$/).required(),
    price: Joi.number().required(),
    city: Joi.string().regex(/^[a-zA-Z\-]+$/).required(),
    address: Joi.string().min(3).regex(/^[a-zA-Z0-9]+$/).required(),
    type: Joi.string().min(3).regex(/^[a-zA-Z0-9]+$/).required(),
    imageurl: Joi.string().required(),
    owner: Joi.number().required(),


  });
  const result = Joi.validate(req.body, schema);
  // input validation

  if (result.error) {
    const errMsg = result.error.details[0].message;
    return res.status(400).send({ error: 400, message: `${errMsg}` });
  }
  next();
}
