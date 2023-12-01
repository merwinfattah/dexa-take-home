require('dotenv').config();
const mysql = require('mysql');


let connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

connection.connect(function(error){
    if (error) {
        console.error(error);
    } else {
        console.log('Berhasil terhubung ke database');
    }
})

module.exports = connection;

