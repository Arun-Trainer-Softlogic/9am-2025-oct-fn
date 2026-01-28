-- function_name() over (
-- partition ny coloumn
-- order by column 
-- )


-- select emp_name , salary , 
-- avg(salary) over () as company_avg_salary 
-- from employees ;


-- select emp_name , dept_id , salary , 
-- avg(salary) over (partition by dept_id ) as dept_avg_sala
-- from employees ;

-- select emp_name , salary , avg(salary) over (partition by dept_id ) as dept_avg_salary
-- from employees 
-- where salary > avg(salary) over (partition by dept_id)



-- select emp_name , dept_id, salary , 
-- row_number() over (order by salary desc ) as row_num 
-- from employees ;

-- select emp_name, salary , 
-- rank() over (order by salary desc) as salary_rank 
-- from employees ;

-- select emp_name , salary , 
-- dense_rank() over(order by salary desc) as dense_ranking
-- from employees

-- select emp_name , dept_id , salary , 
-- rank() over (partition by dept_id order by salary desc ) as dept_rank
-- from employees ;


-- with ctc_name as (
-- select ....

-- )
-- select * from cte_name

-- with depT_avg as (
-- select dept_id , 
-- avg(salary) as avg_salary
-- from employees 
-- group by dept_id 
-- )
-- select * from dept_avg



-- WITH dept_avg AS (
--     SELECT dept_id,
--            AVG(salary) AS avg_salary
--     FROM employees
--     GROUP BY dept_id
-- )
-- SELECT e.emp_name,
--        e.salary,
--        d.dept_name
-- FROM employees e
-- JOIN dept_avg da ON e.dept_id = da.dept_id
-- JOIN departments d ON e.dept_id = d.dept_id
-- WHERE e.salary > da.avg_salary;


-- WITH ranked_employees AS (
--     SELECT emp_name,
--            dept_id,
--            salary,
--            DENSE_RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) AS rnk
--     FROM employees
-- )
-- SELECT emp_name, dept_id, salary
-- FROM ranked_employees
-- WHERE rnk <= 2;














