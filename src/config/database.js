
const mysql = require('mysql2/promise')
require('dotenv').config();
const connection=mysql.createPool({
    host: process.env.HOST_DB,
    database: process.env.DATA_BASE,
    port: process.env.PORT_DB,
    user: process.env.USER,
    password: process.env.PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
  })


module.exports= connection;