const express = require('express');
const cors = require('cors');
const medicamentoRoutes = require('./routes/MedicamentoRoutes');
const laboratorioRoutes = require('./routes/laboratorioRoutes');
const especialidadRoutes = require('./routes/especialidadRoutes');
const tipoMedicRoutes = require('./routes/tipoMedicRoutes');
const ordenCompraRoutes = require('./routes/ordenCompraRoutes');
const detalleOrdenCompraRoutes = require('./routes/detalleOrdenCompraRoutes');
const ordenVentaRoutes = require('./routes/ordenVentaRoutes');
const detalleOrdenVtaRoutes = require('./routes/detalleOrdenVtaRoutes');
const sequelize = require('./db');

// Carga de modelos y asociaciones
const Medicamento = require('./models/Medicamento');
const TipoMedic = require('./models/tipoMedic');
const Especialidad = require('./models/especialidad');
const Laboratorio = require('./models/laboratorio');
const OrdenCompra = require('./models/ordenCompra');
const DetalleOrdenCompra = require('./models/detalleOrdenCompra');
const OrdenVenta = require('./models/ordenVenta');
const DetalleOrdenVta = require('./models/detalleOrdenVta');

// Asociaciones (foreign keys)
Medicamento.belongsTo(TipoMedic, { foreignKey: 'CodTipoMed' });
Medicamento.belongsTo(Especialidad, { foreignKey: 'CodEspec' });

DetalleOrdenCompra.belongsTo(OrdenCompra, { foreignKey: 'NroOrdenC' });
DetalleOrdenCompra.belongsTo(Medicamento, { foreignKey: 'CodMedicamento' });

DetalleOrdenVta.belongsTo(OrdenVenta, { foreignKey: 'NroOrdenVta' });
DetalleOrdenVta.belongsTo(Medicamento, { foreignKey: 'CodMedicamento' });

OrdenCompra.belongsTo(Laboratorio, { foreignKey: 'CodLab' });

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/medicamentos', medicamentoRoutes);
app.use('/api/laboratorio', laboratorioRoutes);
app.use('/api/especialidad', especialidadRoutes);
app.use('/api/tipo-medic', tipoMedicRoutes);
app.use('/api/orden-compra', ordenCompraRoutes);
app.use('/api/detalle-orden-compra', detalleOrdenCompraRoutes);
app.use('/api/orden-venta', ordenVentaRoutes);
app.use('/api/detalle-orden-vta', detalleOrdenVtaRoutes);

sequelize.sync({ force: false}) // Cambiar a true para reiniciar la base de datos
  .then(() => {
    console.log('Base de datos sincronizada');
    app.listen(3001, () => {
      console.log('Backend corriendo en http://localhost:3001');
    });
  })
  .catch(err => {
    console.error('Error al sincronizar base de datos:', err);
  });