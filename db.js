const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'cineclub',
  password: '',
});

module.exports = pool.promise();
