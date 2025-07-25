const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

/* const getConnection = require('../libs/postgres'); */
/* const pool = require('../libs/postgres.pool'); */
/* const sequelize = require('../libs/sequelize'); */
const { models } = require('../libs/sequelize');

class ProductsService {

  constructor(){
    this.products = [];
    /* this.generate(); */
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    /* const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }a
    this.products.push(newProduct);
    return newProduct; */
    return data;
  }

 /*  async find() {
    const client = await getConnection();
    const rta = await client.query('SELECT * FROM products');
    return rta.rows;
  } */

 /*  async find() {
    const query = 'SELECT * FROM products';
    const rta = await this.pool.query(query);
    return rta.rows;
  } */

 /*    async find() {
      const query = 'SELECT * FROM products';
      const [data, metadata] = await sequelize.query(query);
      return {
        data,
        metadata
      };
    } */
      /* async find() {

      const [data] = await sequelize.query(query);
      return {data};
    } */
    async find() {
      const rta = await models.Product.findAll();
      return rta;
    }

  async findOne(id) {
    /* const product = this.products.find(item => item.id === id);
    if (!product) {
      throw boom.notFound('product not found');
    }
    if (product.isBlock) {
      throw boom.conflict('product is block');
    }
    return product; */
    return id;
  }

  async update(id, changes) {
    /* const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index]; */
    return { id, changes  };
  }

  async delete(id) {
    /* const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    this.products.splice(index, 1); */
    return { id };
  }

}

module.exports = ProductsService;
