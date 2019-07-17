import { users,User } from '../models/users';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

 dotenv.config();

export class userController{   
signUp(req, res){
    const{firstName,lastName,email,address,phoneNumber,password,isadmin} = req.body
    const userData = {firstName,lastName,email,address,phoneNumber,password,isadmin};
    User.signUp(userData)
    const token = jwt.sign({email:req.body.email}, process.env.appSecretKey, { expiresIn: '24hr' });
     res.status(201).send({status:201,message:'account created',userData})
      
};

async signIn(req, res){
    const finduser = await User.findOneUserEmail(req.body.email);
  if (!finduser.rows[0]) return res.status(404).send({message: 'user doesnt exist'})
  if(finduser.rows[0].password === req.body.email)return res.status(404).send({message: 'wrong password'})
    const token = jwt.sign({email:req.body.email}, process.env.appSecretKey, { expiresIn: '24hr' });
    finduser.rows[0].token = token;
    // airbnb style guides for removing password in the body
    const {password, ...noA} = finduser.rows[0];
    res.send({status:200,message:'success',user:noA})
};
};