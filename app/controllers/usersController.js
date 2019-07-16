import { users,User } from '../models/users';
const appSecreteKey = 'hckjdsjsdadnbqdkjdqxbjkqwkn'
import jwt from 'jsonwebtoken';
export class userController{
    
signUp(req, res){
    const userData = (req.body.firstName, req.body.lastName, req.body.email, req.body.address, req.body.phoneNumber, req.body.password, req.body.isadmin);
    User.signUp(userData)
    const token = jwt.sign({email:req.body.email}, appSecreteKey, { expiresIn: '1hr' });
     res.status(201).send({status:201,message:'successfuly signedUp', token})
};

signIn(req, res){
    const user = users.find(user => {
        return user.email === req.body.email && user.password === req.body.password
    });
    // check if user doesnt exist
    if (!user) {
        return res.status(404).send({message: 'wrong email or password'})
    }
    const token = jwt.sign({email:req.body.email}, appSecreteKey, { expiresIn: '1hr' });
    user.token = token;
    // airbnb style guides for removing password in the body
    const {password, ...noA} = user;
    res.send({status:200,message:'success',user:noA})
};
};