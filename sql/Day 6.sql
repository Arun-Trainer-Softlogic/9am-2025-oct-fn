-- use company_db



-- SELECT emp_name, salary
-- FROM employees
-- WHERE salary = (
--     SELECT MAX(salary)
--     FROM employees
-- );

-- select emp_name , salary 
-- from employees 
-- where salary > (
-- select avg(salary)
-- from employees
-- )

-- SELECT emp_name
-- FROM employees
-- WHERE dept_id IN (
--     SELECT dept_id
--     FROM departments
--     WHERE location = 'Bangalore'
-- );

-- select emp_name 
-- from employees 
-- where emp_id not in (
-- select emp_id 
-- from employee_roles 
-- )


-- select emp_name ,
-- (select dept_name from departments d 
-- where d.dept_id = e.dept_id) AS department
-- from employees e 


-- select e.emp_name , e.salary , d.dept_name
-- from employees e
-- join departments d on e.dept_id = d.dept_id
-- where salary > (
-- select avg(salary)
-- from employees 
-- where dept_id = e.dept_id
-- )
 
--  SELECT e.emp_name, e.salary, d.dept_name
-- FROM employees e
-- JOIN departments d ON e.dept_id = d.dept_id
-- JOIN (
--     SELECT dept_id, AVG(salary) AS avg_salary
--     FROM employees
--     GROUP BY dept_id
-- ) avg_dept
-- ON e.dept_id = avg_dept.dept_id
-- WHERE e.salary > avg_dept.avg_salary;

 
-- CREATE TABLE payroll (
--     payroll_id INT PRIMARY KEY AUTO_INCREMENT,
--     emp_id INT NOT NULL,
--     basic_salary DECIMAL(10,2) NOT NULL,
--     hra DECIMAL(10,2),
--     da DECIMAL(10,2),
--     deductions DECIMAL(10,2),
--     net_salary DECIMAL(10,2),
--     pay_month VARCHAR(20),
--     pay_date DATE,
--     FOREIGN KEY (emp_id) REFERENCES employees(emp_id)
-- );

-- INSERT INTO payroll
-- (emp_id, basic_salary, hra, da, deductions, net_salary, pay_month, pay_date)
-- VALUES
-- (101,30000,6000,3000,2000,37000,'Jan-2026','2026-01-31'),
-- (102,28000,5600,2800,1500,34900,'Jan-2026','2026-01-31'),
-- (103,45000,9000,4500,3000,55500,'Jan-2026','2026-01-31'),
-- (104,32000,6400,3200,1800,39800,'Jan-2026','2026-01-31'),
-- (105,50000,10000,5000,4000,61000,'Jan-2026','2026-01-31'),
-- (106,26000,5200,2600,1200,32600,'Jan-2026','2026-01-31'),
-- (107,42000,8400,4200,2500,52100,'Jan-2026','2026-01-31'),
-- (108,31000,6200,3100,1700,38600,'Jan-2026','2026-01-31'),
-- (109,55000,11000,5500,4500,67000,'Jan-2026','2026-01-31'),
-- (110,24000,4800,2400,1000,30200,'Jan-2026','2026-01-31'),
-- (111,38000,7600,3800,2200,47200,'Jan-2026','2026-01-31'),
-- (112,42000,8400,4200,2500,52100,'Jan-2026','2026-01-31'),
-- (117,782000,156400,78200,50000,966600,'Jan-2026','2026-01-31');


-- SELECT emp_name
-- FROM employees e
-- WHERE not EXISTS (
--     SELECT 1
--     FROM payroll p
--     WHERE p.emp_id = e.emp_id
-- );


-- SELECT DISTINCT e.emp_name
-- FROM employees e
-- JOIN payroll p ON e.emp_id = p.emp_id;


-- SELECT DISTINCT d.dept_name
-- FROM employees e
-- JOIN departments d ON e.dept_id = d.dept_id;


-- SELECT DISTINCT emp_name, dept_id
-- FROM employees;




