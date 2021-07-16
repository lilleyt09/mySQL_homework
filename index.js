const inquirer = require('inquirer');
const DB = require("./db")

DB.Role.getAll(function(err, result){
    if(err) throw err;
    console.table(result)
})

const start = () => {
    inquirer
        .prompt({
            name: 'action',
            type: 'list',
            message: 'Would you like to [ADD] or [VIEW] a department, role, or employee, or [UPDATE] an employee role?',
            choices: ['ADD', 'VIEW', 'UPDATE']
        })
        .then((answer) => {
            if (answer.action === 'ADD') {
                inquirer
                    .prompt({
                        name: 'adding',
                        type: 'list',
                        message: 'Would you like to add a [DEPARTMENT], [ROLE], or [EMPLOYEE]?',
                        choices: ['DEPARTMENT', 'ROLE', 'EMPLOYEE']
                    })
                .then((answer) => {
                    if (answer.adding === 'DEPARTMENT') {
                        addDepartment(DB.Department);
                    }
                    else if (answer.adding === 'ROLE') {
                        addRole(DB.Role);
                    } 
                    else if (answer.adding === 'EMPLOYEE') {
                        addEmployee(DB.Employee);
                    }
                });
            } else if (answer.action === 'VIEW') {
                inquirer
                    .prompt({
                        name: 'viewing',
                        type: 'list',
                        message: 'Would you like to view a [DEPARTMENT], [ROLE], or [EMPLOYEE]?',
                        choices: ['DEPARTMENT', 'ROLE', 'EMPLOYEE']
                    })
                .then((answer) => {
                    if (answer.viewing === 'DEPARTMENT') {
                        viewDepartment();
                    } else if (answer.viewing === 'ROLE') {
                        viewRole();
                    } else if (answer.viewing === 'EMPLOYEE') {
                        viewEmployee();
                    }
                })
            } else if (answer.action === 'UPDATE') {
                updateRole();
            }
        });
};

start();