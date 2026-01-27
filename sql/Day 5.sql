-- use company_db;

-- select e.emp_name , d.dept_name , e.age
-- from employees e
-- inner join departments d 
-- on e.dept_id = d.dept_id

-- select e.emp_name , d.dept_name 
-- from employees e left JOIN departments d on e.dept_id = d.dept_id

-- SELECT e.emp_name, d.dept_name
-- FROM employees e
-- RIGHT JOIN departments d
-- ON e.dept_id = d.dept_id;


-- select e.emp_name , d.dept_name 
-- from employees e 
-- left JOIN departments d 
-- on e.dept_id = d.dept_id

-- union 

-- SELECT e.emp_name, d.dept_name
-- FROM employees e
-- RIGHT JOIN departments d
-- ON e.dept_id = d.dept_id;

-- CREATE TABLE roles (
--     role_id INT PRIMARY KEY,
--     role_name VARCHAR(50) NOT NULL
-- );


-- INSERT INTO roles VALUES
-- (1, 'HR Executive'),
-- (2, 'Software Engineer'),
-- (3, 'Senior Developer'),
-- (4, 'Accountant');


-- CREATE TABLE employee_roles (
--     emp_id INT,
--     role_id INT,
--     PRIMARY KEY (emp_id, role_id),
--     FOREIGN KEY (emp_id) REFERENCES employees(emp_id),
--     FOREIGN KEY (role_id) REFERENCES roles(role_id)
-- );


-- INSERT INTO employee_roles VALUES
-- (101, 2),
-- (101, 3),
-- (102, 1),
-- (103, 3),
-- (104, 4);


-- SELECT e.emp_name, r.role_name
-- FROM employees e
-- JOIN employee_roles er ON e.emp_id = er.emp_id
-- JOIN roles r ON er.role_id = r.role_id;

