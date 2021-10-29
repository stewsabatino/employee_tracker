const mysql = require('mysql2');
const inquirer = require('inquirer');
const express = require('express')
const cTable = require('console.table')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const db = mysql.createConnection({
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
    addDepartment: "Add a Department",
    addRole: "Add a Role",
    addEmployee: "Add an Employee",
    updateEmployee: "Update an Employee",
    removeEmployee: "Remove an Employee",
    exit: "Exit"
};

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

function viewAllEmployees() {
    console.log('Feature not deployed')
    prompt()
}

function viewAllRoles() {
    db.query('SELECT * FROM roles', function (err, results) {
        console.table(results);
    })
    prompt()
}

function viewAllDepartments() {
    db.query('SELECT * FROM department', function (err, results) {
        console.table(results);
    })
    prompt()
}

function addDepartment() {
        const answer = inquirer.prompt([
            {
            name: "departmentName",
            type: "input",
            message: "What is the name of the department?"
            }
        ])
        db.query(`INSERT INTO department (name) VALUES(${answer.departmentName})`)
        console.log('Department has been added!');
        prompt();
}

function addRole() {
    console.log('Feature not deployed')
    prompt()
}

function addEmployee() {
    console.log('Feature not deployed')
    prompt()
}

function updateEmployee() {
    console.log('Feature not deployed')
    prompt()
}

function removeEmployee() {
    console.log('Feature not deployed')
    prompt()
}

prompt()