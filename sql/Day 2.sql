-- create database ar ;


-- create table table_name (
-- coloumn_name datatype constraint ,
-- coloumn_name datatype constraint ,
-- )

-- use ar;

-- create TABLE student (
-- id INT primary key auto_increment  ,
-- name varchar(50) not null,
-- age int check (age >= 18),
-- email varchar(100) unique,
-- status VARCHAR(20) DEFAULT 'active'
-- ) ;

-- INSERT INTO student (id,name ,  age, email, status)
-- VALUES
-- ( 8,"arun", 19, 'est@gmail.com', 'inactive');
 


-- update table_name 
-- set coloumn1 = value 1,
-- coloumn2 = value 2
-- where condition 

-- update student 
-- set age  = 20,
-- status = 'active'
-- where name = "arun";


-- update student 
-- set status = 'inactive';

--  select * from student;

-- delete from student
-- where status   = 'in 


-- INSERT INTO student (id, name, age, email, status)
-- VALUES
-- (1, 'Arun', 22, 'arun@gmail.com', 'active'),
-- (2, 'Priya', 20, 'priya@gmail.com', 'active'),
-- (3, 'Rahul', 24, 'rahul@gmail.com', 'inactive'),
-- (4, 'Sneha', 19, 'sneha@gmail.com', 'active'),
-- (5, 'Karthik', 21, 'karthik@gmail.com', 'inactive'),
-- (6, 'Anjali', 23, 'anjali@gmail.com', 'active'),
-- (7, 'Vijay', 25, 'vijay@gmail.com', 'active');


-- INSERT INTO student (id, name, age, email)
-- VALUES
-- (8, 'Meena', 18, 'meena@gmail.com'),
-- (9, 'Suresh', 26, 'suresh@gmail.com');


-- select * from student where id = 8;

-- update student 
-- set status = 'inactive'
-- where id = 8;


-- use ar;

-- update student set phone = 90940871117
-- where id = 1;

-- alter table student add phone varchar(15);

-- alter table student modify name varchar (100);
-- alter table student 
-- rename column phone to mobile ;

-- alter table student 
-- drop column mobile ;


-- alter table student 
-- add constraint chk_age  check (age >= 18); 


-- INSERT INTO student (name, age) VALUES ('Aman', 23);

-- INSERT INTO student (name, age) VALUES ('Jane', 15);

-- alter table student 
-- drop constraint student_chk_1 



-- INSERT INTO student (id, name, age, email)
-- VALUES (10, 'Naveen', 22, 'naveen@gmail.com');

-- update student 
-- set status = "active"
-- where id = 3;

-- delete from student 
-- where id = 5 ;


-- select col1 , col2 
-- from table_name 

-- select name , email 
-- from student ;


-- select * from student
-- where age  <= 20 or status = "inactive"



-- select * from student where not status = "active"

-- select * from student
-- where age in (18 , 19 , 22, 33)


-- select * from student
-- where age between 18 and 22


-- select * from student
-- where name like '%a'

-- select * from student
-- where email is null 

select * from student 
-- order by age desc limit 3 ;













