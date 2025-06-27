const express = require('express');
const router = express.Router();
const ordenCompraController = require('../Controllers/ordenCompraController');

router.get('/', ordenCompraController.getAll);
router.get('/:NroOrdenC', ordenCompraController.getOne);
router.post('/', ordenCompraController.create);
router.put('/:NroOrdenC', ordenCompraController.update);
router.delete('/:NroOrdenC', ordenCompraController.remove);

module.exports = router;
