 import { propertys }from '../models/propertys';

// export const findProperty=(req, res) =>{
//     res.send(req.params.id)
// }
// export const propertyAdvertPost =(req, res) =>{
    

// }
export const propertType =(req, res ,next) =>{
    if (req.query.type){
        const property = propertys.filter(a => a.type === req.query.type)
       return res.status(200).send({status:200, property});
    }
    next();
}