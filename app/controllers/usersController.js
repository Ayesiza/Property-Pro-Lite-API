import { users } from '../models/users';
import client from '../config/database';
const appSecreteKey = 'hckjdsjsdadnbqdkjdqxbjkqwkn'
import jwt from 'jsonwebtoken';
export class userController{
signUp(req, res){
    const userQuery = 'INSERT INTO users(firstName,lastName,email,address,phoneNumber,password,isadmin) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *';
    const values = [req.body.firstName, req.body.lastName, req.body.email, req.body.address, req.body.phoneNumber, req.body.password, req.body.isadmin];
    client.query(userQuery, values);
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