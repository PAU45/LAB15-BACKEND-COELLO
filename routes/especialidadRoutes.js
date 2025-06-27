const express = require('express');
const router = express.Router();
const especialidadController = require('../Controllers/especialidadController');

router.get('/', especialidadController.getAll);
router.get('/:CodEspec', especialidadController.getOne);
router.post('/', especialidadController.create);
router.put('/:CodEspec', especialidadController.update);
router.delete('/:CodEspec', especialidadController.remove);

module.exports = router;
