const inquirer = require('inquirer');
const hide = require('./connections');
const mysql = require('mysql2');
const cTable = require('console.table');
// const {startQuestion} = require('../server');

function showEmployees() {

    hide.query(`SELECT * FROM employee`, function (err, res) {
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
        } else {
            console.table(res);
        }
    })
};


function addDepartment() {
    let questions = [
        {
            type: "input",
            name: "name",
            message: "What is the new department you want to add?"
        }
    ];

    inquirer.prompt(questions)
        .then(response => {
            hide.query(`INSERT INTO department (name) VALUES (?)`, [response.name], (err, res) => {
                if (err) throw err;
                console.log(`Successfully inserted ${response.name} department at id ${res.insertId}`);
                // startQuestion();
            });
        })
        // .then(() => {
        //     setTimeout(startQuestion, 1000);
        // })
};


module.exports = { showEmployees, showRoles, showDepartments, addDepartment };

