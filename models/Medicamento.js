const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Medicamento = sequelize.define('Medicamento', {
  CodMedicamento: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descripcionMed: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fechaFabricacion: {
    type: DataTypes.DATE,
    allowNull: false
  },
  fechaVencimiento: {
    type: DataTypes.DATE,
    allowNull: false
  },
  Presentacion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  precioVentaUni: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  },
  precioVentaPres: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  },
  CodTipoMed: { 
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'TipoMedic', 
      key: 'CodTipoMed'
    }
  },
  CodEspec: { 
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'Especialidad', 
      key: 'CodEspec'
    }
  },
  Marca: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'Medicamento',
  timestamps: false
});

module.exports = Medicamento;