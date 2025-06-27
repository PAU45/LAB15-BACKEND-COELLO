const DetalleOrdenCompra = require('../models/detalleOrdenCompra');

exports.getAll = async (req, res) => {
  try {
    const detalles = await DetalleOrdenCompra.findAll();
    res.json(detalles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const { NroOrdenC, CodMedicamento } = req.params;
    const detalle = await DetalleOrdenCompra.findOne({
      where: { NroOrdenC, CodMedicamento }
    });
    if (!detalle) return res.status(404).json({ message: 'No encontrado' });
    res.json(detalle);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const nuevo = await DetalleOrdenCompra.create(req.body);
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { NroOrdenC, CodMedicamento } = req.params;
    const actualizado = await DetalleOrdenCompra.update(req.body, {
      where: { NroOrdenC, CodMedicamento }
    });
    if (actualizado[0] === 0) return res.status(404).json({ message: 'No encontrado' });
    res.json({ message: 'Actualizado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const { NroOrdenC, CodMedicamento } = req.params;
    const eliminado = await DetalleOrdenCompra.destroy({
      where: { NroOrdenC, CodMedicamento }
    });
    if (!eliminado) return res.status(404).json({ message: 'No encontrado' });
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
