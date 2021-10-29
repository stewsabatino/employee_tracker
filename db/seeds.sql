INSERT INTO department (name)
VALUES
    ("Engineering"),
    ("Sales"),
    ("Finance"),
    ("Legal");

INSERT INTO roles (title, salary, department_id)
VALUES
    ("Lead Engineer", 150000, 1),
    ("SoftwarenEngineer", 120000, 1),
    ("Sales Manager", 175000, 2),
    ("Salesperson", 145000, 2),
    ("Account Manager", 160000, 3),
    ("Accountant", 130000, 3),
    ("Legal Team Lead", 250000, 4),
    ("Lawyer", 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Jackie", "Chiles", 7, NULL),
    ("Cosmo", "Kramer", 8, 1),
    ("Frank", "Costanza", 3, NULL),
    ("Lloyd", "Braun", 4, 3),
    ("Justin", "Pitt", 5, NULL),
    ("Tim", "Whatley", 6, 5),
    ("Jacopo", "Peterman", 1, NULL),
    ("Matt", "Wilhelm", 2, 7);

SELECT * FROM department;
SELECT * FROM roles;
SELECT * FROM employee