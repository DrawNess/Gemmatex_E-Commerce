'use strict';

const { CustomerSquema, CUSTOMER_TABLE } = require('./../models/customer.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSquema);
  },
  async down (queryInterface) {
    await queryInterface.drop(CUSTOMER_TABLE);
  }
};
