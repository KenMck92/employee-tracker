const Inquirer = require('inquirer');
const Mysql = require('mysql');
require('dotenv').config();

const hide = mysql.createConnection(
    {
        host: 'localhost',
        port: 3006,
        name: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        user: process.env.DB_USER
    }
);