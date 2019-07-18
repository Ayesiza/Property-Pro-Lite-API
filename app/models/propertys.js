import client from '../services/database';

export class Property {
  static postPropertyAdvert(values) {
    const propertyQuery = `INSERT INTO property(owner, price, state, city, address, type, imageurl) 
VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
    return client.query(propertyQuery, values);
  }


  static updatepropertyAdvert(price,id) {
    const queryUpdate = `UPDATE property SET price=$1 WHERE id= $2 RETURNING *`;
    return client.query(queryUpdate, [price,id]);
  }

  static markSold(id) {
    const markSold = `UPDATE property SET status='sold' WHERE id= $1 RETURNING *`;
    return client.query(markSold, [id]);
  }

  static deleteProp(id) {
    const ad = `DELETE FROM property  WHERE id= $1 RETURNING *`;
    return client.query(ad, [id]);
  }

  static allPropertyInDb() {
    const ad = `SELECT * FROM property`;
    return client.query(ad);
  }  

  static propById(id) {
    const ad = `SELECT * FROM property WHERE id = $1`;
    return client.query(ad,[id]);
  }  

  static propertyTypes(type){
    const query = `SELECT * FROM property WHERE type=$1`;
    return client.query(query,[type]);
  }
}

