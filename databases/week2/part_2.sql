-- PART 2 School database
/* Create a new database containing the following tables:
Class: with the columns: id, name, begins (date), ends (date)
Student: with the columns: id, name, email, phone, class_id (foreign key)*/

CREATE DATABASE PART_2;
USE PART_2;

CREATE TABLE Class (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    begins DATETIME NOT NULL,
    ends DATETIME NOT NULL
);

CREATE TABLE Student (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email varchar(255) NOT NULL,
    phone varchar(50) NOT NULL,
    class_id INT NOT NULL,
    FOREIGN KEY (class_id) references Class(id)
);

SElECT * FROM class;
SElECT * FROM student;
SElECT * FROM status;

/*If you are done with the above tasks, you can continue with these advanced tasks:
Create an index on the name column of the student table.*/

CREATE  UNIQUE INDEX some_index_name ON Student(name); -- OR-- CREATE INDEX ON Student(name); 
/*Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).*/

-- step 1 I created a new table 'status'
CREATE TABLE Status (   
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    status VARCHAR(50) NOT NULL
);
INSERT INTO status (id, status)
VALUES (1, 'not-started');
INSERT INTO status (id, status)
VALUES (2, 'ongoing');
INSERT INTO status (id, status)
VALUES (3, 'finished');
-- step 2 create a column in the table 'Class'
ALTER TABLE class ADD status_id int;

-- add test rows
INSERT INTO class (id, name, begins, ends, status_id)
VALUES (1, 'Lucy', '2020-05-23', '2020-05-26', 2);
INSERT INTO class (id, name, begins, ends, status_id)
VALUES (2, 'Kate', '2020-05-24', '2020-05-28', 3);
INSERT INTO class (id, name, begins, ends, status_id)
VALUES (3, 'Tom', '2020-05-24', '2020-05-28', 1);


SELECT class.name, status.status 
FROM class INNER JOIN status ON status.id = class.status_id;


