import client from '../services/database';

export class Property {
  static postPropertyAdvert(values) {
    const propertyQuery = `INSERT INTO property(owner, price, state, city, address, type, imageurl) 
VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
    return client.query(propertyQuery, values);
  }


  static updatepropertyAdvert(field, value) {
    const query = `UPDATE propertyAdvert SET price= $1 = $1 WHERE(id= $2) RETURNING *`;

    const update = client.query(query, [value, price]);

    return;

  }
}

