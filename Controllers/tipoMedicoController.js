const TipoMedic = require('../models/tipoMedic');

exports.getAll = async (req, res) => {
  try {
    const tipos = await TipoMedic.findAll();
    res.json(tipos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const { CodTipoMed } = req.params;
    const tipo = await TipoMedic.findByPk(CodTipoMed);
    if (!tipo) return res.status(404).json({ message: 'No encontrado' });
    res.json(tipo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const nuevo = await TipoMedic.create(req.body);
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { CodTipoMed } = req.params;
    const actualizado = await TipoMedic.update(req.body, {
      where: { CodTipoMed }
    });
    if (actualizado[0] === 0) return res.status(404).json({ message: 'No encontrado' });
    res.json({ message: 'Actualizado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const { CodTipoMed } = req.params;
    const eliminado = await TipoMedic.destroy({
      where: { CodTipoMed }
    });
    if (!eliminado) return res.status(404).json({ message: 'No encontrado' });
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
