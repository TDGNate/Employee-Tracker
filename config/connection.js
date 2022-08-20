// import sequelize and dotenv
const mysql = require('mysql2')
require('dotenv').config()

// Create a connection to database
const sqlDatabase = mysql.createConnection(
  {
    host: 'localhost',
    database: process.env.DB_NAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
  }
)

module.exports = sqlDatabase;
