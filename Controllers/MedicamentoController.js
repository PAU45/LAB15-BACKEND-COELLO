const Medicamento = require('../models/Medicamento');

exports.getAll = async (req, res) => {
  try {
    const medicamentos = await Medicamento.findAll();
    res.json(medicamentos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const medicamento = await Medicamento.findByPk(req.params.CodMedicamento);
    if (!medicamento) return res.status(404).json({ message: 'No encontrado' });
    res.json(medicamento);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const nuevo = await Medicamento.create(req.body);
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const actualizado = await Medicamento.update(req.body, {
      where: { CodMedicamento: req.params.CodMedicamento }
    });

    if (actualizado[0] === 0) return res.status(404).json({ message: 'No encontrado' });
    res.json({ message: 'Actualizado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const eliminado = await Medicamento.destroy({
      where: { CodMedicamento: req.params.CodMedicamento }
    });

    if (!eliminado) return res.status(404).json({ message: 'No encontrado' });
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};