const Libro = require('../models/Libro');

exports.getAllLibros = async (req, res) => {
  const libros = await Libro.findAll();
  res.json(libros);
};

exports.getLibro = async (req, res) => {
  const libro = await Libro.findByPk(req.params.id);
  libro ? res.json(libro) : res.status(404).json({ message: 'Libro no encontrado' });
};

exports.createLibro = async (req, res) => {
  const libro = await Libro.create(req.body);
  res.status(201).json(libro);
};

exports.updateLibro = async (req, res) => {
  const libro = await Libro.findByPk(req.params.id);
  if (!libro) return res.status(404).json({ message: 'Libro no encontrado' });
  await libro.update(req.body);
  res.json(libro);
};

exports.deleteLibro = async (req, res) => {
  const libro = await Libro.findByPk(req.params.id);
  if (!libro) return res.status(404).json({ message: 'Libro no encontrado' });
  await libro.destroy();
  res.json({ message: 'Libro eliminado' });
};
