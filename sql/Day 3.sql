-- CREATE DATABASE company_db;
-- USE company_db;


-- CREATE TABLE departments (
--     dept_id INT PRIMARY KEY,
--     dept_name VARCHAR(50) NOT NULL,
--     location VARCHAR(50)
-- );


-- INSERT INTO departments VALUES
-- (1, 'HR', 'Chennai'),
-- (2, 'IT', 'Bangalore'),
-- (3, 'Finance', 'Mumbai'),
-- (4, 'Sales', 'Delhi');


-- CREATE TABLE employees (
--     emp_id INT PRIMARY KEY,
--     emp_name VARCHAR(50) NOT NULL,
--     age INT CHECK (age >= 18),
--     email VARCHAR(100) UNIQUE,
--     phone VARCHAR(15),
--     hire_date DATE,
--     salary INT CHECK (salary > 10000),
--     dept_id INT,
--     status VARCHAR(20) DEFAULT 'active',
--     FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
-- );


-- INSERT INTO employees VALUES
-- (101, 'Arun', 25, 'arun@company.com', '9876543210', '2022-01-10', 30000, 2, 'active'),
-- (102, 'Priya', 24, 'priya@company.com', '9876543211', '2021-03-15', 28000, 1, 'active'),
-- (103, 'Rahul', 28, 'rahul@company.com', '9876543212', '2020-07-20', 45000, 2, 'inactive'),
-- (104, 'Sneha', 26, 'sneha@company.com', '9876543213', '2022-11-01', 32000, 3, 'active'),
-- (105, 'Karthik', 30, 'karthik@company.com', '9876543214', '2019-05-25', 50000, 4, 'active'),
-- (106, 'Anjali', 27, 'anjali@company.com', '9876543215', '2023-02-10', 26000, 1, 'active');

-- select * from departments ;
-- select * from employees;


