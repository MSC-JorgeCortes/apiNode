const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ejercicio1', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
});

module.exports = sequelize;
