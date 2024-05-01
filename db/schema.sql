DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;


\c employees_db;
-- 3 tables

-- table 1 department(id, name)
CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL
)
--table 2 role(id, title, salary, department_id)

CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL
)

--table 3 employee(id, first_name, last_name, role_id, manager_id)

CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER
     FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
)