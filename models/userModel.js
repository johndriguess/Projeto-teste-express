const db = require('../db');

function createUser(name, email) {
  const stmt = db.prepare('INSERT INTO users (name, email) VALUES (?, ?)');
  const result = stmt.run(name, email);
  return { id: result.lastInsertRowid, name, email };
}

function getAllUsers() {
  return db.prepare('SELECT * FROM users').all();
}

function getUserById(id) {
  return db.prepare('SELECT * FROM users WHERE id = ?').get(id);
}

function updateUser(id, name, email) {
  const stmt = db.prepare('UPDATE users SET name = ?, email = ? WHERE id = ?');
  const result = stmt.run(name, email, id);
  return result.changes > 0;
}

function deleteUser(id) {
  const stmt = db.prepare('DELETE FROM users WHERE id = ?');
  const result = stmt.run(id);
  return result.changes > 0;
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};
