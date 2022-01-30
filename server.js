//importing mysql2 
const mysql = require('mysql2');
//importing inquirer
const inquirer = require('inquirer');
//importing console.table
const conTable = require('console.table');

require('dotenv').config()

//database connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL_PASSWORD,
    database: 'employee_db'
});

