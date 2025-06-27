const express = require('express');
const router = express.Router();
const detalleOrdenCompraController = require('../Controllers/detalleOrdenCompraController');

router.get('/', detalleOrdenCompraController.getAll);
router.get('/:NroOrdenC/:CodMedicamento', detalleOrdenCompraController.getOne);
router.post('/', detalleOrdenCompraController.create);
router.put('/:NroOrdenC/:CodMedicamento', detalleOrdenCompraController.update);
router.delete('/:NroOrdenC/:CodMedicamento', detalleOrdenCompraController.remove);

module.exports = router;
