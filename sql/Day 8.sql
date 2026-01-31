-- use company_db;

-- Delimiter $$
-- create procedure gett_all_employees()
-- begin 
-- select * from employees ;
-- end $$
-- Delimiter ;


-- call gett_all_employees();



-- Delimiter $$
-- create procedure get_emp_by_dept( in depttt INT) 
-- Begin 
-- select emp_name , salary 
-- from employees 
-- where dept_id = depttt
-- End 
-- Delimiter ;



-- DELIMITER $$
-- CREATE PROCEDURE get_emp_by_dept(IN dept INT)
-- BEGIN
--     SELECT emp_name, salary
--     FROM employees
--     WHERE dept_id = dept;
-- END $$

-- DELIMITER ;

-- call get_emp_by_dept(3);

-- DELIMITER $$ 
-- create PROCEDURE emp_count(out total int )
-- BEGIN
-- select count(*) into total from employees ;
-- END $$
-- DELIMITER ;

-- call emp_count(@count);
-- select @count


-- DELIMITER $$
-- create PROCEDURE  double_value(inout num INT)
-- BEGIN 
-- set num = num * 2 ;
-- END $$
-- DELIMITER ;






-- DELIMITER $$

-- CREATE TRIGGER before_salary_insert
-- BEFORE INSERT ON employees
-- FOR EACH ROW
-- BEGIN
--     IF NEW.salary < 0 THEN
--         SET NEW.salary = 0;
--     END IF;
-- END $$

-- DELIMITER ;





