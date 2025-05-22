const userModel = require('../models/userModel');

function create(req, res) {
  const { name, email } = req.body;
  const user = userModel.createUser(name, email);
  res.json(user);
}

function getAll(req, res) {
  const users = userModel.getAllUsers();
  res.json(users);
}

function getById(req, res) {
  const user = userModel.getUserById(req.params.id);
  if (user) res.json(user);
  else res.status(404).json({ error: 'Usuário não encontrado' });
}

function update(req, res) {
  const { name, email } = req.body;
  const success = userModel.updateUser(req.params.id, name, email);
  if (success) res.json({ id: req.params.id, name, email });
  else res.status(404).json({ error: 'Usuário não encontrado' });
}

function remove(req, res) {
  const success = userModel.deleteUser(req.params.id);
  if (success) res.json({ message: 'Usuário deletado' });
  else res.status(404).json({ error: 'Usuário não encontrado' });
}

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove
};
