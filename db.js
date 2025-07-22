const mysql2 = require('mysql2');
const dotenv=require('dotenv').config()
const pool=mysql2.createPool({
  host: process.env.DB_HOST,            
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT, 
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


module.exports = pool.promise();
// pool.query('SELECT * FROM movie',(error,result)=>{
// console.log(result)
// })