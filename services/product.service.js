/* const { faker } = require('@faker-js/faker'); */
/* const getConnection = require('../libs/postgres'); */
/* const pool = require('../libs/postgres.pool'); */
/* const sequelize = require('../libs/sequelize'); */

const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ProductsService {

  constructor(){
    this.products = [];
    /* this.generate(); */
  }

  /* generate() {
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
  } */

  async create(data) {
    /* const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }a
    this.products.push(newProduct);
    return newProduct; */
    const newProduct = await models.Product.create(data);
    return newProduct;
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
    const product = await models.Product.findByPk(id);
    if (!product) {
      throw boom.notFound('product not found');
    }
    return product;
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
    const product = await this.findOne(id);
    const rta = await product.update(changes);
    return rta;
  }

  async delete(id) {
    /* const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    this.products.splice(index, 1); */
    const product = await this.findOne(id);
    await product.destroy();
    return { id };
  }
}

module.exports = ProductsService;
