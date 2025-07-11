const Laboratorio = require('../models/laboratorio');

exports.getAll = async (req, res) => {
  try {
    const laboratorios = await Laboratorio.findAll();
    res.json(laboratorios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const { CodLab } = req.params;
    const laboratorio = await Laboratorio.findByPk(CodLab);
    if (!laboratorio) return res.status(404).json({ message: 'No encontrado' });
    res.json(laboratorio);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const nuevo = await Laboratorio.create(req.body);
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { CodLab } = req.params;
    const actualizado = await Laboratorio.update(req.body, {
      where: { CodLab }
    });
    if (actualizado[0] === 0) return res.status(404).json({ message: 'No encontrado' });
    res.json({ message: 'Actualizado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const { CodLab } = req.params;
    const eliminado = await Laboratorio.destroy({
      where: { CodLab }
    });
    if (!eliminado) return res.status(404).json({ message: 'No encontrado' });
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
