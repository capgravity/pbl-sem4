const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

pool.connect((err, client, release) => {
    if (err) {
      console.error('Error acquiring client', err.stack);
    } else {
      console.log('Database connected successfully');
    }
    release();
});

console.log('DB_USER:', process.env.DB_USER);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool
};