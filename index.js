const express = require('express')
const app = express()
const port = 3000
app.use(express.json());

const users = [
{id:1,
 email:'maira@gmail.com',
 firstName:'Maira',
 lastName:'Princess',
 password:'',
 phoneNumber:'+256782454',
 address:'Kampala' ,
 isadmin:true},

 {id:2, 
 email:'daren@gmail.com', 
 firstName:'Daren', 
 lastName:'Martha', 
 password:'',
 phoneNumber:'+256893436', 
 address:'Entebbe' , 
 isadmin:false},

 { id:3, 
    email:'zariat@gmail.com', 
    firstName:'Zariat', 
    lastName:'Marion', 
    password:'',
   phoneNumber:'+256065874',
   address:'Wakiso' , 
   isadmin:false}
 ];

app.post('/api/v1/users/auth/signup', (req, res) =>{
   const finduser = users.find(user => user.email === req.body.email);
if(req.body.email === finduser.email){
   return res.status(409).send('user already exists')
};
    const user ={
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
      res.send(users);
})

app.listen(port, () => console.log(`listening on port ${port}...!`))
