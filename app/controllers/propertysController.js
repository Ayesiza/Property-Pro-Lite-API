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
// find (ad)property id then update details
export const updateProperty = (req,res)=>{
    const property = propertys.find(ad => ad.id === parseInt(req.params.id))
    if(!property) return res.status(404).send({error:404, message:'property not found'})
    property.price = req.body.price,
    property.type = req.body.type,
    res.status(201).send({message: 'success', property})

};
// find (a)property id then mark as sold 
export const markAsSold =(req,res) =>{
    const property = propertys.find(a => a.id === parseInt(req.params.id))
    if(!property) return res.status(404).send({error:404, message:'property of that id not found'})
    property.status = 'sold',
    res.status(201).send({message: 'success', property})
};
// find (d)property id
export const deleteAdvert = (req, res) => {
    const property = propertys.find(d => d.id === parseInt(req.params.id))
    if(!property) return res.status(404).send({status:404, message:'property of given id not found'})
     // delete
    const index = propertys.indexOf(property)
    propertys.splice(index, 1)

    res.status(200).send({status:200, message:'successfuly deleted'});
};
// get all property adverts
export const allProperty =(req , res) => {
    res.status(200).send({status:200, propertys});
};

