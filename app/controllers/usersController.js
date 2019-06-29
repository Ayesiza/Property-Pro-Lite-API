import { users } from '../models/users';
export const signUp = (req, res) => {
    const user = {
        id: users.length + 1,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        isadmin: false
    };
    users.push(user);
    res.status(201).send(user);
};

export const signIn = (req, res) => {
    const user = users.find(user => {
        return user.email === req.body.email && user.password === req.body.password
    });
    // check if user doesnt exist
    if (!user) {
        return res.status(409).send({
            message: 'wrong email or password'
        })
    }
    res.send({message: 'success',user})
};