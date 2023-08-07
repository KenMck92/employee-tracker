const inquirer = require('inquirer');
// const { showRoles, showDepartments, addDepartment } = require('./db/index');
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

                case "Add Department":
                    addDepartment();
                    break;

                case "Add Role":
                    addRole();
                    break;

                default:
                    hide.end();
                    
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
function showEmployees() {

    hide.query(`SELECT * FROM employee`, function (err, res) {
        if (err) {
            console.log(err);
        } else {
            console.table(res);
        }
    });
};

function showRoles() {
    hide.query(`SELECT * FROM role`, function (err, res) {
        if (err) {
            console.log(err);
        } else {
            console.table(res);
        }
    });
};

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
                setTimeout(startQuestion, 1000);
            });
        })
};

function addRole() {
    hide.query("SELECT * FROM department", (err, result) => {
        if (err) throw err;
        const deptResults = result.map(({ name, id}) => ({ name: name, value: id}));
    
    let questions = [
        {
            type: "input",
            name: "title",
            message: "What role do you wish to add?"
        },
        {
            type: "input",
            name: "salary",
            message: "What salary do you wish to have?"
        },
        {
            type: "list",
            name: "dept",
            message: "What department do you want this new roll in?",
            choices: deptResults
        },
    ];
    inquirer.prompt(questions)
        .then(response => {
            hide.query(`INSERT INTO role (title, salary, department_id) VALUES (?,?,?)`, [response.title, response.salary, response.dept], (err, res) => {
                if (err) throw err;
                console.log(`Successfully inserted ${response.title},${response.salary},${response.dept}`);
                setTimeout(startQuestion, 1000);
            });
        })
})

function addEmployee () {
    hide.query("SELECT * FROM role", (err, result) => {
        if (err) throw err;
        const roleResults = result.map(({ title, id}) => ({ name: title, value: id}));

    hide.query(`SELECT * FROM employee`, (err, employRes) => {
        if (err) throw err;
        const empResults = employRes.map(({first_name, last_name, id }) => ({name: first_name + "" + last_name, value: id}))
        
        let questions = [
            {
                type: "input",
                name: "first-name",
                message: "First name?"
            },
            {
                type: "input",
                name: "last-name",
                message: "Last name?"
            },
            {
                type: "list",
                name: "roles",
                message: "What will be the role of the new employee?",
                choices: roleResults
            },
            {
                type: "list",
                name: "manager",
                message: "What will be the role of the new employee?",
                choices: empResults
            },
        ];
        inquirer.prompt(questions)
            .then(response => {
                hide.query(`INSERT INTO role (title, salary, department_id) VALUES (?,?,?)`, [response.title, response.salary, response.dept], (err, res) => {
                    if (err) throw err;
                    console.log(`Successfully inserted ${response.title},${response.salary},${response.dept}`);
                    setTimeout(startQuestion, 1000);
                });
            })
    })
    
    
    hide.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`);
    


}
};

setTimeout(startQuestion, 1000);
module.exports = { startQuestion } ;