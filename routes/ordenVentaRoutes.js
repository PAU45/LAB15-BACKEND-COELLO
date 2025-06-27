const express = require('express');
const router = express.Router();
const ordenVentaController = require('../Controllers/ordenVentaController');

router.get('/', ordenVentaController.getAll);
router.get('/:NroOrdenVta', ordenVentaController.getOne);
router.post('/', ordenVentaController.create);
router.put('/:NroOrdenVta', ordenVentaController.update);
router.delete('/:NroOrdenVta', ordenVentaController.remove);

module.exports = router;
