const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Libro = sequelize.define('libro', {
  ISBN: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  titulo: DataTypes.STRING,
  editorial: DataTypes.STRING,
  añoPublicacion: DataTypes.DATE,
  idAutor: DataTypes.INTEGER
}, {
  timestamps: false,
  tableName: 'libro'
});

module.exports = Libro;
