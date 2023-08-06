const inquirer = require('inquirer');
const { showEmployees, showRoles, showDepartments } = require('./db/index');
const hide = require('./db/connections');
const mysql = require('mysql2');


hide.connect(err => {
    if (err) throw err;
});

function startQuestion() {
    inquirer.prompt([
        {
            type: "list",
            name: "start",
            message: "What would you like to do? (Use arrow keys)",
            loop: false,
            choices: ["View All Employees",
                "Add Employee",
                "Update Employee Role",
                "View All Roles",
                "Add Role",
                "View All Departments",
                "Add Department",
                "Quit"],
            message: "(Move up and down to reveal more choices)"
        }]
    )
        .then((answers) => {
            switch (answers.start) {
                case "View All Employees":
                    showEmployees();
                    setTimeout(startQuestion, 1000);
                    break;

                case "View All Roles":
                    showRoles();
                    setTimeout(startQuestion, 1000);
                    break;

                case "View All Departments":
                    showDepartments();
                    setTimeout(startQuestion, 1000);
                    break;
            }
        })
};
//         .then((selections) => {
//         const { choices } = selections;

//         if (choices === "View All Employees") {
//             showEmployees();
//             setTimeout(startQuestion, 1000);
//         }

//         if (choices === "Add Employee") {
//             addEmployee();
//         }

//         if (choices === "Update Employee Role") {
//             updateEmployee();
//         }

//         if (choices === "View All Roles") {
//             showRoles();
//         }

//         if (choices === "Add Role") {
//             addRole();
//         }

//         if (choices === "View All Departments") {
//             showDepartments();
//         }

//         if (choices === "Add Department") {
//             addDepartment();
//         };

//         if (choices === "Quit") {
//             hide.end();
//         };
//     });
// };

setTimeout(startQuestion, 1000);