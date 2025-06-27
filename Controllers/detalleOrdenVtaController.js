const DetalleOrdenVta = require('../models/detalleOrdenVta');

exports.getAll = async (req, res) => {
  try {
    const detalles = await DetalleOrdenVta.findAll();
    res.json(detalles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const { NroOrdenVta, CodMedicamento } = req.params;
    const detalle = await DetalleOrdenVta.findOne({
      where: { NroOrdenVta, CodMedicamento }
    });
    if (!detalle) return res.status(404).json({ message: 'No encontrado' });
    res.json(detalle);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const nuevo = await DetalleOrdenVta.create(req.body);
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { NroOrdenVta, CodMedicamento } = req.params;
    const actualizado = await DetalleOrdenVta.update(req.body, {
      where: { NroOrdenVta, CodMedicamento }
    });
    if (actualizado[0] === 0) return res.status(404).json({ message: 'No encontrado' });
    res.json({ message: 'Actualizado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const { NroOrdenVta, CodMedicamento } = req.params;
    const eliminado = await DetalleOrdenVta.destroy({
      where: { NroOrdenVta, CodMedicamento }
    });
    if (!eliminado) return res.status(404).json({ message: 'No encontrado' });
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
