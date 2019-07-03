import express from 'express';
import request from 'supertest';
import should from 'should';
import apiRouter from '../app/routers/apiRouters';
const app = express()

app.use(express.json());

app.use('/api/v1/', apiRouter)

describe('Tests auth routes', () => {
    it('test signUp', (done) => {
        request(app)
            .post('/api/v1/users/auth/signup')
            .send({
                email: "zaria@gmail.com",
                firstName: "zariat",
                lastName: "marion",
                password: "zariat",
                phoneNumber: "25606587422",
                address: "wakiso",
                isadmin:false

            })
            .end((err, res) => {
                res.status.should.equal(201);
                done();
            });
    });
    it('test signUp userExist', (done) => {
        request(app)
            .post('/api/v1/users/auth/signup')
            .send({
                email: "zariat@gmail.com",
                firstName: "zariat",
                lastName: "marion",
                password: "zariat",
                phoneNumber: "25606587422",
                address: "wakiso",
                isadmin:false

            })
            .end((err, res) => {
                res.status.should.equal(409);
                res.body.message.should.equal('user already exists');
                done();
            });
    });

    it('signIn  useremail in existance', (done) => {
        request(app)
            .post('/api/v1/users/auth/signin')
            .send({
                email: "zari@gmail.com",
                password: "zariat"
            })
            .end((err, res) => {
                res.status.should.equal(404);
                res.body.message.should.equal('wrong email or password');
                done();
            });
    });

    it('signIn checks user successfully signined', (done) => {
        request(app)
            .post('/api/v1/users/auth/signin')
            .send({
                email: "zariat@gmail.com",
                password: "zariat"
            })
            .end((err, res) => {
                res.status.should.equal(200);
                done();
            });
    });
});

