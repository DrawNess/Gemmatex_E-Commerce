/* const { Product } = require('./product.model'); */
const {User, UserSchema} = require('./user.model');
const {Product, ProductSchema} = require('./product.model');
const {Category, CategorySchema} = require('./category.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  // Add other models initialization here
  /* User.init(productsSchema, Products.config(sequelize)); */
  Product.init(ProductSchema, Product.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
}

module.exports = setupModels;
