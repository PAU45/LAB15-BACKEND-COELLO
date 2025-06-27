const express = require('express');
const router = express.Router();
const farmaciaController = require('../Controllers/MedicamentoController');

router.get('/', farmaciaController.getAll);
router.get('/:CodMedicamento', farmaciaController.getOne);
router.post('/', farmaciaController.create);
router.put('/:CodMedicamento', farmaciaController.update);
router.delete('/:CodMedicamento', farmaciaController.remove);

module.exports = router;