const { Sequelize } = require('sequelize');

const {config} = require('./../config/config');
const setupModels = require('./../db/models');

// Database connection URI
// Using encodeURIComponent to handle special characters in username and password
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true, // Disable logging; default: console.log
});

setupModels(sequelize);

sequelize.sync(); // Sync models with the database

module.exports = sequelize;
