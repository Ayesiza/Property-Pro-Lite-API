import { Client } from 'pg';
import dotenv from 'dotenv';

 dotenv.config();

const client = new Client({
    connectionString:process.env.DATABASE_STRING
    
});

const users = `create table if not exists
      users (
        id serial primary key,
        firstName varchar (50) not null,
        lastName varchar (50) not null,
        email varchar (50)  not null,
        address varchar (50) not null,
        phoneNumber varchar (50) not null,
        password varchar(255) not null,
        isadmin boolean default false not null
       )`;

const property = `create table if not exists
    property(
        id serial primary key,
        createdOn timestamp without time zone default now() not null,
        owner int not null,
        price float not null,
        address varchar (150)  not null,
        city varchar (100)  not null,
        state varchar (100)  not null,
        type varchar (50)  not null,
        imageUrl varchar (500)  not null,
        status varchar (50) default 'available' not null
    )`;

client.connect()
.then(() => console.log('connected . . .'))
.then(() => client.query(users))
.then(() => client.query(property))
.catch(e => console.log(e.message))


export default client;
