'use strict';
const { productSchema, PRODUCT_TABLE } = require('./../models/product.model');
const { categorySchema, CATEGORY_TABLE } = require('./../models/category.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(PRODUCT_TABLE, productSchema);
    await queryInterface.createTable(CATEGORY_TABLE, categorySchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);
  }
};
