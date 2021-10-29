INSERT INTO department (id, name)
VALUES
    (1, "Engineering"),
    (2, "Sales"),
    (3, "Finance"),
    (4, "Legal");

INSERT INTO roles (id, title, salary, department_id)
VALUES
    (1, "Lead Engineer", 150000, 1),
    (2, "SoftwarenEngineer", 120000, 1),
    (3, "Sales Manager", 175000, 2),
    (4, "Salesperson", 145000, 2),
    (5, "Account Manager", 160000, 3),
    (6, "Accountant", 130000, 3),
    (7, "Legal Team Lead", 250000, 4),
    (8, "Lawyer", 190000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
    (1, "Jackie", "Chiles", 7, NULL),
    (2, "Cosmo", "Kramer", 8, 1),
    (3, "Frank", "Costanza", 3, NULL),
    (4, "Lloyd", "Braun", 4, 3),
    (5, "Justin", "Pitt", 5, NULL),
    (6, "Tim", "Whatley", 6, 5),
    (7, "Jacopo", "Peterman", 1, NULL),
    (8, "Matt", "Wilhelm", 2, 7);

SELECT * FROM department;
SELECT * FROM roles;
SELECT * FROM employee