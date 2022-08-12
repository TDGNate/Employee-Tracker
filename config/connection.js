// import sequelize and dotenv
const mysql = require('mysql2')
require('dotenv').config()

// Create a connection to database
const sqlDatabase = mysql.createConnection(
  {
    database: 'employee_db',
    host: 'localhost',
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
  }
)

module.exports = sqlDatabase;
