const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',

    port: 3306,

    user: 'root',

    password: '*orpheus1991*',
    database: 'company_db',
});

const start = () => {
    inquirer
        .prompt({
            name: 'action',
            type: 'list',
            message: 'Would you like to [ADD] or [VIEW] a department, role, or employee, or [CHANGE] an employee role?',
            choices: ['ADD', 'VIEW', 'CHANGE'],
        })
        .then((answer) => {
            if (answer.action === 'ADD') {
                addEmployee();
            } else if (answer.action === 'VIEW') {
                viewEmployee();
            } else if (answer.action === 'CHANGE') {
                changeRole();
            }
        });
};