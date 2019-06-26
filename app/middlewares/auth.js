import { users }from '../models/users';

export const checkIfUserExists = (req, res, next) => {
    const finduser = users.find(user => user.email === req.body.email);
    if (finduser) {
        return res.status(409).send({
            error: 409,
            message: 'user already exists'
        })
    } else {
        next()
    }
};
