const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table')

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
    db.query(`SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.name, roles.salary, CONCAT(manager.first_name, " ", manager.last_name) manager_name
    FROM employee 
    LEFT JOIN roles on employee.role_id = roles.id
    LEFT JOIN department on roles.department_id = department.id
    LEFT JOIN employee manager on employee.manager_id = manager.id`, function (err, results) {
        console.table(results);
        prompt()
    })
}

function viewAllRoles() {
    db.query(`SELECT roles.id, roles.title, roles.salary, department.name
    FROM roles
    LEFT JOIN department on roles.department_id = department.id`, function (err, results) {
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
            db.query(`INSERT INTO department SET ?`, { name: data.addDepartment }, (err, data) => {
                console.log('Department has been added!');
                prompt();
            })
        })
}

function addRole() {
    db.query('SELECT * FROM department', (err, departmentData) => {
        const departments = departmentData.map(department => {
            return {
                name: department.name,
                value: department.id
            }
        })
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
                type: "list",
                message: "What department will this role be in?",
                choices: departments
            }
        ])
            .then(data => {
                db.query(`INSERT INTO roles SET ?`, { title: data.roleName, salary: data.roleSalary, department_id: data.roleDepartment }, (err, data) => {
                    console.log("Role has been added!");
                    prompt();
                })
            })
    })
}

function addEmployee() {
    db.query("SELECT * FROM employee", function (err, employeeData) {
        const employees = employeeData.map(employee => {
            return {
                name: employee.first_name + " " + employee.last_name,
                value: employee.id
            }
        })
        console.log(employees)
        db.query("SELECT * FROM roles", function (err, roleData) {
            const roles = roleData.map(role => {
                return {
                    name: role.title,
                    value: role.id
                }
            })
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
                    type: "list",
                    message: "What is the ID of their role?",
                    choices: roles
                }, {
                    name: "managerId",
                    type: "list",
                    message: "What is the employee ID of their manager?",
                    choices: employees
                }
            ])
                .then(data => {
                    db.query(`Insert INTO employee SET ?`, { first_name: data.firstName, last_name: data.lastName, role_id: data.roleId, manager_id: data.managerId }, (err, data) => {
                        console.log("Added new Employee!");
                        prompt();
                    })
                })
        })
    })

}

function updateEmployee() {
    db.query("SELECT * FROM employee", function (err, employeeData) {
        const employees = employeeData.map(employee => {
            return {
                name: employee.first_name + " " + employee.last_name,
                value: employee.id
            }
        })
        db.query("SELECT * FROM roles", function (err, roleData) {
            const roles = roleData.map(role => {
                return {
                    name: role.title,
                    value: role.id
                }
            })
            inquirer.prompt([
                {
                    name: "employee",
                    type: "list",
                    message: "Which employee by ID would you like to update?",
                    choices: employees
                }, {
                    name: "role",
                    type: "list",
                    message: "Update to new role",
                    choices: roles
                }
            ])
                .then(data => {
                    console.log(data)
                    db.query(`UPDATE employee SET role_id = ? WHERE id = ?`, [data.role, data.employee], (err, data) => {
                        console.log('Employee has been updated')
                        prompt()
                    })
                })
        })
    })
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