import client from '../services/database';

    export class User{
        
        static signUp(u){
            const userQuery = 'INSERT INTO users(firstName,lastName,email,address,phoneNumber,password,isadmin) VALUES($1,$2,$3,$4,$5,$6,$7) returning *';
            const values = [u.firstName, u.lastName, u.email, u.address, u.phoneNumber, u.password, u.isadmin];
            client.query(userQuery, values);
        }
        // get user by email in database
        static findOneUserEmail(email) {
            const query = 'SELECT * FROM users WHERE email=$1';
            const values = [email];
            return client.query(query, values);
    }


}

 export const users = [
    {
     id:1,
     email:'maira@gmail.com',
     firstName:'maira',
     lastName:'princess',
     password:'maira7777',
     phoneNumber:'25678245441',
     address:'kampala' ,
     isadmin:true},
    
     {id:2, 
     email:'daren@gmail.com', 
     firstName:'daren', 
     lastName:'martha', 
     password:'daren7787',
     phoneNumber:'25689343661', 
     address:'entebbe' , 
     isadmin:false},
    
     { id:3, 
      email:'zariat@gmail.com', 
      firstName:'zariat', 
      lastName:'marion7777', 
      password:'zariat',
      phoneNumber:'25606587422',
      address:'wakiso' , 
      isadmin:false}
     ];