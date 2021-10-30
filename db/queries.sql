-- -- view all departments
-- SELECT * FROM department;
-- -- view all roles
-- SELECT * FROM roles;
-- -- view all employees
-- SELECT * FROM employee;
-- -- add a department
-- INSERT INTO department (id, name)
--     VALUES (id = ?, name = ?);
-- -- add a role
-- INSERT INTO roles (id, title, salary, department_id)
--     VALUES (id = ?, title = ?, salary = ?, department_id = ?);
-- -- add an employee
-- INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
--     VALUES (id = ?, first_name = ?, last_name = ?, role_id = ?, manager_id = ?);
-- -- update an employee role
-- UPDATE employee
-- SET ? = ?
-- WHERE id = ?
-- -- delete employee
-- DELETE FROM employee 
-- WHERE id = ?;
-- SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.name, roles.salary, CONCAT(manager.first_name, " ", manager.last_name) manager_name
-- FROM employee 
-- LEFT JOIN roles on employee.role_id = roles.id
-- LEFT JOIN department on roles.department_id = department.id
-- LEFT JOIN employee manager on employee.manager_id = manager.id;

SELECT roles.id, roles.title, roles.salary, department.name
FROM roles
LEFT JOIN department on roles.department_id = department.id