const express = require('express');
const router = express.Router();
const laboratorioController = require('../Controllers/laboratorioController');

router.get('/', laboratorioController.getAll);
router.get('/:CodLab', laboratorioController.getOne);
router.post('/', laboratorioController.create);
router.put('/:CodLab', laboratorioController.update);
router.delete('/:CodLab', laboratorioController.remove);

module.exports = router;
