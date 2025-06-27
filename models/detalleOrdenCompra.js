const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const DetalleOrdenCompra = sequelize.define('DetalleOrdenCompra', {
  NroOrdenC: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'OrdenCompra', // nombre del modelo (tabla)
      key: 'NroOrdenC'
    }
  },
  CodMedicamento: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'Medicamento', // nombre del modelo (tabla)
      key: 'CodMedicamento'
    }
  },
  descripcion: DataTypes.STRING,
  cantidad: DataTypes.INTEGER,
  precio: DataTypes.DECIMAL(10,2),
  montouni: DataTypes.DECIMAL(10,2)
}, {
  tableName: 'DetalleOrdenCompra',
  timestamps: false
});

module.exports = DetalleOrdenCompra;