import client from '../services/database';

export class User {

  static signUp(values) {
    const userQuery = 'INSERT INTO users(firstName,lastName,email,address,phoneNumber,password,isadmin) VALUES($1,$2,$3,$4,$5,$6,$7) returning *';
    return client.query(userQuery, values);
  }
  
  // get user by email in database
  static findOneUserEmail(email) {
    const query = 'SELECT * FROM users WHERE email=$1';
    return client.query(query, [email]);
  }
}
