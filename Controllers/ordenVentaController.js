const OrdenVenta = require('../models/ordenVenta');

exports.getAll = async (req, res) => {
  try {
    const ordenes = await OrdenVenta.findAll();
    res.json(ordenes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const { NroOrdenVta } = req.params;
    const orden = await OrdenVenta.findByPk(NroOrdenVta);
    if (!orden) return res.status(404).json({ message: 'No encontrado' });
    res.json(orden);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const nuevo = await OrdenVenta.create(req.body);
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { NroOrdenVta } = req.params;
    const actualizado = await OrdenVenta.update(req.body, {
      where: { NroOrdenVta }
    });
    if (actualizado[0] === 0) return res.status(404).json({ message: 'No encontrado' });
    res.json({ message: 'Actualizado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const { NroOrdenVta } = req.params;
    const eliminado = await OrdenVenta.destroy({
      where: { NroOrdenVta }
    });
    if (!eliminado) return res.status(404).json({ message: 'No encontrado' });
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
