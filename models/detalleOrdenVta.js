const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const DetalleOrdenVta = sequelize.define('DetalleOrdenVta', {
  NroOrdenVta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'OrdenVenta',
      key: 'NroOrdenVta'
    }
  },
  CodMedicamento: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'Medicamento',
      key: 'CodMedicamento'
    }
  },
  descripcionMed: DataTypes.STRING,
  cantidadRequerida: DataTypes.INTEGER
}, {
  tableName: 'DetalleOrdenVta',
  timestamps: false
});

module.exports = DetalleOrdenVta;