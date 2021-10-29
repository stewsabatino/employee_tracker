-- view all departments
SELECT * FROM department;
-- view all roles
SELECT * FROM roles;
-- view all employees
SELECT * FROM employee;
-- add a department
INSERT INTO department (id, name)
    VALUES (id = ?, name = ?);
-- add a role
INSERT INTO roles (id, title, salary, department_id)
    VALUES (id = ?, title = ?, salary = ?, department_id = ?);
-- add an employee
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
    VALUES (id = ?, first_name = ?, last_name = ?, role_id = ?, manager_id = ?);
-- update an employee role
UPDATE employee
SET ? = ?
WHERE id = ?
-- delete employee
DELETE FROM employee 
WHERE id = ?;
