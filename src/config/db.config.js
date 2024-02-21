const mysql = require("mysql2")


var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'bancutewa10304',
    database: 'books',
    keepAliveInitialDelay: 100,
    enableKeepAlive: true
});
module.exports = connection