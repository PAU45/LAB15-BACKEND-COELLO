const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const OrdenVenta = sequelize.define('OrdenVenta', {
  NroOrdenVta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fechaEmision: DataTypes.DATE,
  Motivo: DataTypes.STRING,
  Situacion: DataTypes.STRING
}, {
  tableName: 'OrdenVenta',
  timestamps: false
});

module.exports = OrdenVenta;
