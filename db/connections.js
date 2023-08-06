const mysql = require('mysql2');
require('dotenv').config();



const hide = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    console.log('Connected to database')
);

// hide.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
// });


module.exports = hide;