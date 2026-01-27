create database company_db;
use company_db;


create table departments (
dept_id int primary key,
dept_name varchar(50) not null ,
location varchar (50)
)

INSERT INTO departments VALUES
(1, 'HR', 'Chennai'),
(2, 'IT', 'Bangalore'),
(3, 'Finance', 'Mumbai'),
(4, 'Sales', 'Delhi');

CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50) NOT NULL,
    age INT CHECK (age >= 18),
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(15),
    hire_date DATE,
    salary INT CHECK (salary > 10000),
    dept_id INT,
    status VARCHAR(20) DEFAULT 'active',
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);

INSERT INTO employees VALUES
(101, 'Arun', 25, 'arun@company.com', '9876543210', '2022-01-10', 30000, 2, 'active'),
(102, 'Priya', 24, 'priya@company.com', '9876543211', '2021-03-15', 28000, 1, 'active'),
(103, 'Rahul', 28, 'rahul@company.com', '9876543212', '2020-07-20', 45000, 2, 'inactive'),
(104, 'Sneha', 26, 'sneha@company.com', '9876543213', '2022-11-01', 32000, 3, 'active'),
(105, 'Karthik', 30, 'karthik@company.com', '9876543214', '2019-05-25', 50000, 4, 'active'),
(106, 'Anjali', 27, 'anjali@company.com', '9876543215', '2023-02-10', 26000, 1, 'active');


INSERT INTO employees (emp_id, emp_name, age, email, phone, hire_date, salary, dept_id, status)
VALUES
(107, 'Manoj', 29, 'manoj@company.com', NULL, '2021-08-12', 42000, 2, 'active'),
(108, 'Divya', 26, 'divya@company.com', '9876543220', '2022-04-18', 31000, 1, 'active'),
(109, 'Sanjay', 32, 'sanjay@company.com', NULL, '2018-09-05', 55000, 3, 'active'),
(110, 'Pooja', 23, 'pooja@company.com', NULL, '2023-01-20', 24000, 4, 'active'),
(111, 'Rohit', 27, 'rohit@company.com', '9876543221', '2020-06-14', 38000, 2, 'inactive');

 
select * from employees ;


select emp_name , salary 
from employees ;


select distinct dept_id 
from employees ;


select * from employees 
where dept_id = 2

select * from employees 
where salary > 30000;

select * from employees 
where salary > 40000



SELECT * FROM employees
WHERE age <= 25;

SELECT * FROM employees
WHERE NOT status = 'active';


SELECT * FROM employees 
where dept_id in (1, 4)


SELECT * FROM employees
where emp_name like '%A'


SELECT * FROM employees
where emp_name like '%ha%'


SELECT * FROM employees
where phone is NOT NULL ;

select count(*) as total_employees 
from employees 


select sum(salary) as total_salary 
from employees ;


select avg(salary) as average_salary 
from  employees ;

select dept_id , count(*) as emp_count 
from employees 
group by dept_id 

select dept_id , sum(salary) as total_salary 
from employees 
group by dept_id ;


select d.dept_name , count(e.emp_id) as total_employees 
from employees e 
join departments d on e.dept_id = d.dept_id
group by d.dept_name 



select dept_id , sum(salary) as total_salary
from employees 
group by dept_id 

select emp_name , upper(emp_name) as upper_name 
from employees
where emp_id = 101

SELECT emp_name, LOWER(emp_name) AS lower_name
FROM employees;

select emp_name, length(emp_name) as name_length 
from employees 



select concat(emp_name , " - " , email )as employee_contact 
from employees 


select emp_name , substring(emp_name, 2,4) as short_name 
from employees 

select trim(emp_name) 
from employees 


select * from employees 
where emp_name like '%a%'

 
 select curdate()


select emp_name , year(hire_date) as join_year 
from employees 

select emp_name , month(hire_date) as join_month 
from employees 

select emp_name , hire_date 
from employees 
where hire_date > "2023-1-1"

SELECT emp_name, hire_date
FROM employees
WHERE YEAR(hire_date) = 2022;

select emp_name,
datediff(curdate(), hire_date) as total_days_worked 
from employees ;

select emp_name ,
timestampdiff(year, hire_date , curdate()) as year_worked,
timestampdiff(month, hire_date , curdate())as remaining_month_worked 
from employees ;



SELECT 
    emp_name, 
    DATEDIFF(CURDATE(), hire_date) / 365.25 AS years_worked_approx
FROM employees;


SELECT emp_name,
ROUND(DATEDIFF(CURDATE(), hire_date) / 365, 1) AS experience_years
FROM employees;

SELECT emp_name, hire_date
FROM employees
WHERE hire_date >= DATE_SUB(CURDATE(), INTERVAL 2 YEAR);

SELECT
CONCAT(UPPER(emp_name), ' | Joined: ', hire_date) AS employee_report
FROM employees;













