import { users }from '../models/users';
import Joi from '@hapi/joi';


export function getToken(req, res, next) {
  const bearerHeader = req.headers.authorization;
  if (typeof bearerHeader === 'undefined') return res.status(403).send({ error: 403, message: 'provide a token' });
  const bearer = bearerHeader.split(' ');
  // get token from array
  const bearerToken = bearer[1];
  req.token = bearerToken;
  next();
}

// check if real users trying access

export const checkIfUserExists = (req, res, next) => {
    const finduser = users.find(user => user.email === req.body.email);
    if (finduser) return res.status(409).send({ error: 409, message: 'user already exists'})
    next() 
};
export const userAgent = (req, res, next)=> {
  const user = users.find(user => user.email === req.user.email);
  if(user.isadmin === false) return res.status(403).send({error:403,message:'only agent'});

  next();
}
// validate input on signup
export function authValidate(req, res, next) {
  const schema = Joi.object().keys({
    firstName: Joi.string().min(3).regex(/^[a-zA-Z\-]+$/).required(),
    lastName: Joi.string().min(3).regex(/^[a-zA-Z\-]+$/).required(),
    address: Joi.string().min(3).regex(/^[a-zA-Z0-9]+$/).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
    phoneNumber:Joi.string().regex(/^[0-9]{10,13}$/).required(),
    isadmin:Joi.boolean().required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
});
  const result = Joi.validate(req.body, schema);
  // input validation
  if (result.error) {
    const errMsg = result.error.details[0].message
    return res.status(400).send({error:400, message: `${errMsg}` });
  }
  next();
}

