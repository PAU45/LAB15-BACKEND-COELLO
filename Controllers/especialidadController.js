const Especialidad = require('../models/especialidad');

exports.getAll = async (req, res) => {
  try {
    const especialidades = await Especialidad.findAll();
    res.json(especialidades);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const { CodEspec } = req.params;
    const especialidad = await Especialidad.findByPk(CodEspec);
    if (!especialidad) return res.status(404).json({ message: 'No encontrado' });
    res.json(especialidad);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const nuevo = await Especialidad.create(req.body);
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { CodEspec } = req.params;
    const actualizado = await Especialidad.update(req.body, {
      where: { CodEspec }
    });
    if (actualizado[0] === 0) return res.status(404).json({ message: 'No encontrado' });
    res.json({ message: 'Actualizado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const { CodEspec } = req.params;
    const eliminado = await Especialidad.destroy({
      where: { CodEspec }
    });
    if (!eliminado) return res.status(404).json({ message: 'No encontrado' });
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
