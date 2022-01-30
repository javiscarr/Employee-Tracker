//importing mysql2 
const mysql = require('mysql2');
//importing inquirer
const inquirer = require('inquirer');
//importing console.table
const conTable = require('console.table');
const { connect } = require('http2');

require('dotenv').config()

//database connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL_PASSWORD,
    database: 'employee_db'
});

connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    
    beginPrompt();
});

//first prompt the user will see

const beginPrompt = () => {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'selection',
            message: 'What would you like to do?',
            choices: ['View all departments',
                      'View all roles',
                      'View all employees',
                      'Add a department',
                      'Add a role',
                      'Add an employee',
                      'Update an employee role',
                      'Update an employee manager',
                      'View employees by department',
                      'Delete a department',
                      'Delete a role',
                      'Delete an employee',
                      'View department budgets',
                      'No action']
        }            
                    
    ])

    
}

