import { propertys } from '../models/propertys';

    export const propertyAdvert = (req,res)=>{ 
    const property = {
        id: propertys.length +1,
        owner: req.body.owner ,
        status: 'available',
        price: req.body.price,
        state: req.body.state,
        city: req.body.city,
        address: req.body.addres,
        type: req.body.type,
        createdOn: Date.now(),
        image : req.body.image
    }

propertys.push(property);
res.status(201).send({message: 'success', propertys})

};