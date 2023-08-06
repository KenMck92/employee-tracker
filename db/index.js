const inquirer = require('inquirer');
const hide = require('./connections');
const mysql = require('mysql2');
const cTable = require('console.table');

function showEmployees() {
    // const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT (manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON employee.manager_id = manager.id`;

    hide.query(`SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT (manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON employee.manager_id = manager.id`, function (err, res) {
        if (err) {
            console.log(err);
        } else {
            console.table(res);
        }
    });
}

addEmployee = () => {

}

updateEmployee = () => {

}

function showRoles() {
    hide.query(`SELECT * FROM role`, function (err, res) {
        if (err) {
            console.log(err);
        } else {
            console.table(res);
        }
    });
}

addRole = () => {

}

function showDepartments() {
    hide.query(`SELECT * FROM department`, function (err, res) {
        if (err) {
            console.log(err);
        }else{
            console.table(res);
        }    
        })
    };


addDepartment = () => {

}

module.exports = { showEmployees, showRoles, showDepartments };

