import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { users, User } from '../models/users';

dotenv.config();

export class UserController {
  async signUp(req, res) {
    const {
      firstName, lastName, email, address, phoneNumber, isadmin,
    } = req.body;
    const userData = [firstName, lastName, email, address, phoneNumber, req.body.password, isadmin];
    const newUser = await User.signUp(userData);
    const token = jwt.sign({ email: req.body.email }, process.env.appSecretKey, { expiresIn: '24hr' });
    const { password, ...noA } = newUser.rows[0];
    res.status(201).send({
      status: 201, message: 'account created', data: noA, token
    });
  }

  async signIn(req, res) {
    const finduser = await User.findOneUserEmail(req.body.email);
    if (!finduser.rows[0]) return res.status(404).send({ message: 'user doesnt exist' });
    if (finduser.rows[0].password === req.body.email) return res.status(404).send({ message: 'wrong password' });
    const token = jwt.sign({ email: req.body.email }, process.env.appSecretKey, { expiresIn: '24hr' });
    finduser.rows[0].token = token;
    // airbnb style guides for removing password in the body
    const { password, ...noA } = finduser.rows[0];
    res.send({ status: 200, message: 'success', user: noA });
  }
}
