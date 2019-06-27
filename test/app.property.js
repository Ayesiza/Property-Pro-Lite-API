import express from 'express';
import request from 'supertest';
import should from 'should';
import apiRouter from '../app/routers/apiRouters';
const app = express()

app.use(express.json());

app.use('/api/v1/', apiRouter)

describe('Tests property routes', () => {
    it('tests propertyAdvert', (done) => {
        request(app)
            .post('/api/v1/property')
            .send({
                id:1,
                owner: 'ahmad nuru',
                status: 'available',
                price: '$ 768.90',
                state: 'kampala',
                city: 'kampala',
                address: 'avema park',
                type: 'mini flat',
                createdOn: '20/9/2019'
            })
            .end((err, res) => {
                res.status.should.equal(201);
                done();
            });
        });

        it('tests updateProperty', (done) => {
            request(app)
                .patch('/api/v1/property/1')
                .send({
                    price: '968.90',
                    type: 'mini flat',  
                })
                .end((err, res) => {
                    res.status.should.equal(201);
                    done();
                });
            });
            it('tests updateProperty', (done) => {
                request(app)
                    .patch('/api/v1/property/22')
                    .send({
                        price: '968.90',
                        type: 'mini flat',  
                    })
                    .end((err, res) => {
                        res.status.should.equal(404);
                        done();
                    });
                });
        });