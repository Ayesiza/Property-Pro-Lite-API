import { propertys } from '../models/propertys';

    export const propertyAdvert = (req,res)=>{ 
    const property = {
        id: propertys.length +1,
        owner: req.body.owner ,
        status: 'available',
        price: req.body.price,
        state: req.body.state,
        city: req.body.city,
        address: req.body.address,
        type: req.body.type,
        createdOn: Date.now(),
        image : req.body.image
    }

propertys.push(property);
res.status(201).send({message: 'success', property})

};

export const updateProperty = (req,res)=>{
    const property = propertys.find(ad => ad.id === parseInt(req.params.id))
    if(!property) return res.status(404).send({error:404, message:'property not found'})
    property.price = req.body.price,
    property.type = req.body.type,
    res.status(201).send({message: 'success', property})

};
