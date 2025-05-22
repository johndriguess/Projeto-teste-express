// db.js
const Database = require('better-sqlite3');
const db = new Database('database.sqlite');

// Criação da tabela, se não existir
db.prepare(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL
  )
`).run();

module.exports = db;
