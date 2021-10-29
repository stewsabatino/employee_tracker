const mysql = require('mysql2');
const inquirer = require('inquirer');
const express = require('express')
const cTable = require('console.table')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const db = mysql.createConnection(
    {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'company_db'
    },
    console.log('Connected to the company_db database.')
);

const promptMessages = {
    viewAllEmployees: "View All Employees",
    viewAllRoles: "View All Roles",
    viewAllDepartments: "View All Departments",
    viewByRole: "View Employees by Role",
    viewByDepartment: "View Employees by Department",
    viewByManager: "View Employees by Manager",
    addDepartment: "Add a Department",
    addRole: "Add a Role",
    addEmployee: "Add an Employee",
    updateEmployee: "Update an Employee",
    removeEmployee: "Remove an Employee",
    exit: "Exit"
};


function viewAllEmployees() {
    console.log('Feature not deployed')
    prompt()
}

function viewAllRoles() {
    db.query('SELECT * FROM roles', function (err, results) {
        console.table(results);
        prompt()
    })
}

function viewAllDepartments() {
    db.query('SELECT * FROM department', function (err, results) {
        console.table(results);
        prompt()
    })
}

function viewByRole() {
    console.log('Feature not deployed')
    prompt()
}

function viewByDepartment() {
    console.log('Feature not deployed')
    prompt()
}

function ViewByManager() {
    console.log('Feature not deployed')
    prompt()
}

function addDepartment() {
    inquirer.prompt([
            {
            name: "addDepartment",
            type: "input",
            message: "What is the name of the department?"
            }
        ])
        .then(data => {
            db.query(`INSERT INTO department SET ?`, {name: data.addDepartment}, (err, data) => 
            {
            console.log('Department has been added!');
            prompt();
            })
        })
}

function addRole() {
    inquirer.prompt([
        {
            name: "roleName",
            type: "input",
            message: "What is the name of the role would you like to add?"
        },
        {
            name: "roleSalary",
            type: "input",
            message: "What salary will this role have?"
        },
        {
            name: "roleDepartment",
            type: "input",
            message: "What department ID will this role be in?"
        }
    ])
    .then(data => {
        db.query(`INSERT INTO roles SET ?`, {title: data.roleName, salary: data.roleSalary, department_id: data.roleDepartment}, (err, data) => 
        {
            console.log("Role has been added!");
            prompt();
        })
    })
}

function addEmployee() {
    inquirer.prompt([
        {
            name: "firstName",
            type: "input",
            message: "What is the first name of the employee?"
        }, {
            name: "lastName",
            type: "input",
            message: "What is the last name of the employee?"
        }, {
            name: "roleId",
            type: "input",
            message: "What is the ID of their role?"
        }, {
            name: "managerId",
            type: "input",
            message: "What is the employee ID of their manager?"
        }
    ])
    .then(data => {
        db.query(`Insert INTO employee SET ?`, {first_name: data.firstName, last_name: data.lastName, role_id: data.roleId, manager_id: data.managerId}, (err, data) => 
        {
            console.log("Added new Employee!");
            prompt();
        })
    })
}

function updateEmployee() {
    console.log('Feature not deployed')
    prompt()
}

function removeEmployee() {
    console.log('Feature not deployed')
    prompt()
}

function prompt() {
    inquirer 
        .prompt({
            name: 'action',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                promptMessages.viewAllEmployees,
                promptMessages.viewAllRoles,
                promptMessages.viewAllDepartments,
                promptMessages.viewByRole,
                promptMessages.viewByDepartment,
                promptMessages.viewByManager,
                promptMessages.addDepartment,
                promptMessages.addRole,
                promptMessages.addEmployee,
                promptMessages.updateEmployee,
                promptMessages.removeEmployee,
                promptMessages.exit
            ]
        })
        .then(answer => {
            switch (answer.action) {
                case promptMessages.viewAllEmployees:
                    viewAllEmployees();
                    break;
                case promptMessages.viewAllRoles:
                    viewAllRoles();
                    break;
                case promptMessages.viewAllDepartments:
                    viewAllDepartments();
                    break;
                case promptMessages.addDepartment:
                    addDepartment();
                    break;
                case promptMessages.addRole:
                    addRole();
                    break;
                case promptMessages.addEmployee:
                    addEmployee();
                    break;
                case promptMessages.updateEmployee:
                    updateEmployee();
                    break;
                case promptMessages.removeEmployee:
                    removeEmployee();
                    break;
                case promptMessages.exit:
                    console.log('Goodbye')
                    db.end();
                    break;
            }
        });
}

prompt()