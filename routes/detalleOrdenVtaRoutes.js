const express = require('express');
const router = express.Router();
const detalleOrdenVtaController = require('../Controllers/detalleOrdenVtaController');

router.get('/', detalleOrdenVtaController.getAll);
router.get('/:NroOrdenVta/:CodMedicamento', detalleOrdenVtaController.getOne);
router.post('/', detalleOrdenVtaController.create);
router.put('/:NroOrdenVta/:CodMedicamento', detalleOrdenVtaController.update);
router.delete('/:NroOrdenVta/:CodMedicamento', detalleOrdenVtaController.remove);

module.exports = router;
