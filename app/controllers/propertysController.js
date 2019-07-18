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
    const findproperty = await property.findById(req.params.id);
    const property = propertys.find(ad => ad.id === parseInt(req.params.id));
    if (!property) return res.status(404).send({ error: 404, message: 'property not found' });
    property.price = req.body.price,
    property.type = req.body.type;
    res.status(201).send({ message: 'success', property });
  }

  // find (a)property id then mark as sold
  markAsSold(req, res) {
    const property = propertys.find(a => a.id === parseInt(req.params.id));
    if (!property) return res.status(404).send({ error: 404, message: 'property of that id not found' });
    property.status = 'sold',
    res.status(201).send({ message: 'success', property });
  }

  // find (d)property id
  deleteAdvert(req, res) {
    const property = propertys.find(d => d.id === parseInt(req.params.id));
    if (!property) return res.status(404).send({ status: 404, message: 'property of given id not found' });
    // delete
    const index = propertys.indexOf(property);
    propertys.splice(index, 1);
    res.status(200).send({ status: 200, message: 'successfuly deleted' });
  }

  // get all property adverts
  allProperty(req, res) {
    res.status(200).send({ status: 200, propertys });
  }

  // get a specific s(property) by id
  specificProperty(req, res) {
    const property = propertys.find(s => s.id === parseInt(req.params.id));
    const checkInput = req.params.id.match(/^[0-9]+$/);
    if (!checkInput) return res.status(400).send({ error: 400, message: 'parameter should be a valid number' });
    if (!property) return res.status(404).send({ error: 404, message: 'specific property not found' });
    res.status(200).send({ status: 200, property });
  }
}
