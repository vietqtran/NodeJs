import mysql from 'mysql2/promise'

const pool = mysql.createPool({
      host: 'localhost',
      user: 'root',
      database: 'nodejs-basic'
});

export default pool