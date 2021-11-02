# Employee Tracker

## Licensing:
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)<br>
<h3>Apache 2.0</h3>
TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

    1. Definitions.
    
    "License" shall mean the terms and conditions for use, reproduction, and distribution as defined by Sections 1 through 9 of this document.
    
    "Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the License.


## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [Additional Info](#additional-info)

## Description:
Having managed over 25 employees, I have wanted a way to access all of their data without going into multiple apps. I have wanted a way to easily change some of their data.
I built this app to be able to see my employees data more efficiently.
I can now go into one application and view employee data. I can view departments, managers, salaries and roles of all my employees. 
I learned how to use node js, mysql to create databases and tables. I also learned how to access these databases through javascript.


Video Link: https://drive.google.com/file/d/1VJ-gClTXzEoGT2eQexlGTuRB3P5hRhqb/view?usp=sharing

* mysql creating database and tables
```
DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

DROP TABLE IF EXISTS department;
CREATE TABLE department (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS roles;
CREATE TABLE roles (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(40),
    salary DECIMAL,
    department_id INT, 
    PRIMARY KEY (id),
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);
```

** seeding into the database to autofill tables
```
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
```


## Installation:
You will need to download the source files and also do a npm install to get all of the dependencies for this file

## Usage:
You install the dependencies on your computer and run the application through your terminal. cd into the correct path and run node index.js to access the application. From there an interface will direct you on what you want to do with your employees. 

## Contribution:
You should contribute through github.

## Testing:
testing is done through the terminal

## Additional Info
- Github: [stewsabatino](https://github.com/stewsabatino)
- Email: stewsabatino@gmail.com

