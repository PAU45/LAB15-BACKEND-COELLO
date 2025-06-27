const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Especialidad = sequelize.define('Especialidad', {
  CodEspec: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descripcionEsp: DataTypes.STRING
}, {
  tableName: 'Especialidad',
  timestamps: false
});

module.exports = Especialidad;
