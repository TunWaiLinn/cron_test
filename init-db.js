// scripts/init-db.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./word-of-the-day.db');

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS word_of_the_day (date TEXT PRIMARY KEY, word TEXT)");
});

db.close();
