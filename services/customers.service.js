const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CustomersService {
  constructor() {
    this.customers = [];
  }

  async create(data) {
    return data;
  }

  async find() {
    const customers = await models.Customer.findAll();
    return customers;
  }

  async findOne(id) {
    const customer = await models.Customer.findByPk(id);
    if (!customer) {
      throw boom.notFound('Customer not found');
    }
    return customer;
  }

  async update(id, changes) {
    const customer = await this.findOne(id);
    const updatedCustomer = await customer.update(changes);
    return updatedCustomer;
  }

  async delete(id) {
    const customer = await this.findOne(id);
    await customer.destroy();
    return { rta: true};
  }
}

module.exports = CustomersService;
