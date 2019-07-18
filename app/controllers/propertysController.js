import dotenv from 'dotenv';
import { Property } from '../models/propertys';

dotenv.config();

export class PropertyController {
  postPropertyAdvert(req, res) {
    const {
      owner, price, state, city, address, type, imageurl
    } = req.body;
    const data = [owner, price, state, city, address, type, imageurl];
    const newAdvert = Property.postPropertyAdvert(data);
    newAdvert.then(ad => res.status(201).send({ status: 201, message: 'success', data: ad.rows[0] }));
  }

  // find (ad)property id then update details
  async updateProperty(req, res) {
    const findproperty = await Property.updatepropertyAdvert(req.body.price,req.params.id);
    if (!findproperty.rows[0]) return res.status(404).send({ error: 404, message: 'property not found' });
    res.status(201).send({ status: 200, data:findproperty.rows[0] });
  }

  // find (a)property id then mark as sold
  async markAsSold(req, res) {
    const findproperty = await Property.markSold(req.params.id);
    if (!findproperty.rows[0]) return res.status(404).send({ error: 404, message: 'property not found' });
    res.status(201).send({ status: 200, data:findproperty.rows[0] });
  }

  // find (d)property id
  async deleteAdvert(req, res) {
    const findproperty = await Property.deleteProp(req.params.id);
    console.log(findproperty.rows[0])
    if (!findproperty.rows[0]) return res.status(404).send({ status: 404, message: 'property deleted' });
  }

  // get all property adverts
  async allProperty(req, res) {
    const all = await Property.allPropertyInDb()
    return res.status(200).send({status:200, data:all.rows})
  }

  // get a specific s(property) by id
  async specificProperty(req, res) {
    const checkInput = req.params.id.match(/^[0-9]+$/);
    if (!checkInput) return res.status(400).send({ error: 400, message: 'parameter should be a valid number' });
    const property = await Property.propById(req.params.id)
    if (!property.rows[0]) return res.status(404).send({ error: 404, message: 'specific property not found' });
    res.status(200).send({ status: 200, data:property.rows[0] });
  }

  
}
