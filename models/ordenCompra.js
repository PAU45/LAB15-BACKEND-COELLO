const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const OrdenCompra = sequelize.define('OrdenCompra', {
  NroOrdenC: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fechaEmision: DataTypes.DATE,
  Situacion: DataTypes.STRING,
  Total: DataTypes.DECIMAL(10,2),
  CodLab: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Laboratorio', // nombre del modelo (tabla)
      key: 'CodLab'
    }
  },
  NrofacturaProv: DataTypes.STRING
}, {
  tableName: 'OrdenCompra',
  timestamps: false
});

module.exports = OrdenCompra;