/*Part 4: Creating a database
Using an entity relationship diagram, design the data model for an application of your choice. 
This can be anything, previous students have used a small business (with staff, offices, and job titles),
a library (with books, genres, racks, members, and a borrowing log), or a farm (with animals, barns, and farmers).

Your application must include at least one many-to-many relationship and any supporting tables (linking tables) that are needed. 
The entity relationship diagram must describe what tables you will need, the columns in these tables, which column is the primary key, and the relationships between tables.

Next, using the entity relationship diagram as a starting point, 
write all the necessary CREATE TABLE statements to create all tables and relationships (foreign key constraints) for this data model.

Submit an image or PDF of your entity relationship diagram, and a .sql file with the CREATE TABLE statements.*/

CREATE TABLE customer (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email varchar(255) NOT NULL,
    phone varchar(50) NOT NULL,
    delivery_address VARCHAR(50) NOT NULL
);
CREATE TABLE `order` (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    status_id INT NOT NULL,
    order_date DATETIME NOT NULL,    
    order_total_amount int NOT NULL,
    FOREIGN KEY (customer_id) references customer(id),
    FOREIGN KEY (status_id) references status(id)
);
CREATE TABLE status (
	id INT NOT NULL PRIMARY KEY,
	name VARCHAR(50) NOT NULL
);

CREATE TABLE order_product (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
	FOREIGN KEY (order_id) references `order`(id),   
	FOREIGN KEY (product_id) references product(id)
);

CREATE TABLE product (
	id INT NOT NULL PRIMARY KEY,
	product_price INT NOT NULL,
	product_title VARCHAR(50) NOT NULL
);

USE PART_4;
drop table customer;
drop table `order`;
drop table order_product;
drop table product;
drop table status;



