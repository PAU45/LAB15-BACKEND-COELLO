const OrdenCompra = require('../models/ordenCompra');

exports.getAll = async (req, res) => {
  try {
    const ordenes = await OrdenCompra.findAll();
    res.json(ordenes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const { NroOrdenC } = req.params;
    const orden = await OrdenCompra.findByPk(NroOrdenC);
    if (!orden) return res.status(404).json({ message: 'No encontrado' });
    res.json(orden);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const nuevo = await OrdenCompra.create(req.body);
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { NroOrdenC } = req.params;
    const actualizado = await OrdenCompra.update(req.body, {
      where: { NroOrdenC }
    });
    if (actualizado[0] === 0) return res.status(404).json({ message: 'No encontrado' });
    res.json({ message: 'Actualizado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const { NroOrdenC } = req.params;
    const eliminado = await OrdenCompra.destroy({
      where: { NroOrdenC }
    });
    if (!eliminado) return res.status(404).json({ message: 'No encontrado' });
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
