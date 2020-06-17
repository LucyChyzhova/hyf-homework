CREATE DATABASE meal;
use meal;

CREATE TABLE meal (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT (65535) NOT NULL,
    location VARCHAR(255) NOT NULL,
    `when` DATETIME NOT NULL,
    max_reservation INT NOT NULL,
    price DECIMAL (10, 2),
    created_date DATE    
);

CREATE TABLE reservation (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   number_of_guests INT NOT NULL,
   meal_id INT NOT NULL,
   created_date DATE,   
   FOREIGN KEY (meal_id) references `meal`(id)
);

CREATE TABLE review (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   title VARCHAR(255) NOT NULL,
   description TEXT (65535) NOT NULL,
   meal_id INT NOT NULL,
   stars INT NOT NULL,
   created_date DATE,   
   FOREIGN KEY (meal_id) references `meal`(id)
);

						-- TABLE MEAL --
-- Get all meals
SELECT * FROM meal;

-- Add a new meal
INSERT INTO meal ( title, description, location, `when`, max_reservation, price, created_date)
VALUES ('pizza', '4 cheese', 'city center', '2020-06-7', '5', 99.50, '2020-06-01');
INSERT INTO meal ( title, description, location, `when`, max_reservation, price, created_date)
VALUES ('lasagna', 'vegetarian', 'city center', '2020-06-7', '5', 75.50, '2020-06-01');

-- Get a meal with any id, fx 1
SELECT * FROM meal 
WHERE id = 2;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal SET description = 'spicy'
WHERE id=2; 

-- Delete a meal with any id, fx 1
DELETE FROM meal 
WHERE id = 1;

						-- TABLE RESERVATION --
-- Get all reservations
SELECT * FROM reservation;

-- Add a new reservation
INSERT INTO reservation (number_of_guests, meal_id, created_date)
VALUES ('3', '2', '2020-06-01');

-- Get a reservation with any id, fx 1
SELECT * FROM reservation
WHERE id = 1;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation SET  number_of_guests = '4'
WHERE id=1; 

-- Delete a reservation with any id, fx 1
DELETE FROM reservation 
WHERE id = 1;

						-- TABLE REVIEW--
-- Get all reviews
SELECT * FROM review;  

-- Add a new review  
INSERT INTO review (title, description, meal_id, stars, created_date )
VALUES ('perfect', 'meal was amaizing', '2', '5', '2020-06-01');                    

-- Get a review with any id, fx 1
SELECT * FROM review
WHERE id = 1;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review SET title = 'good'
WHERE id=1; 

-- Delete a review with any id, fx 1
DELETE FROM review
WHERE id = 1;

-- Additional queries
/*Now add a couple of different meals, reservations and reviews with different attributes. With those meals create the following queries*/

						-- TABLE MEAL --
INSERT INTO meal ( title, description, location, `when`, max_reservation, price, created_date)
VALUES ('supe', 'with meat bolls', 'south', '2020-06-8', '2', 20.50, '2020-06-04');
INSERT INTO meal ( title, description, location, `when`, max_reservation, price, created_date)
VALUES ('spaghetti', 'with  basilic', 'west', '2020-06-10', '3', 45, '2020-06-04');
INSERT INTO meal ( title, description, location, `when`, max_reservation, price, created_date)
VALUES ('ice cream', 'organic', 'city center', '2020-06-15', '5', 45, '2020-06-04');

						-- TABLE REVIEW--
INSERT INTO review (title, description, meal_id, stars, created_date )
VALUES ('amazing', 'super cervice', '2', '5', '2020-06-01');
INSERT INTO review (title, description, meal_id, stars, created_date )
VALUES ('bad', 'too expensive', '5', '1', '2020-06-06');
INSERT INTO review (title, description, meal_id, stars, created_date )
VALUES ('great', 'I will come again', '3', '3', '2020-06-05');

						-- TABLE RESERVATION --
INSERT INTO reservation (number_of_guests, meal_id, created_date)
VALUES ('2', '3', '2020-06-09');
INSERT INTO reservation (number_of_guests, meal_id, created_date)
VALUES ('1', '4', '2020-06-03');
INSERT INTO reservation (number_of_guests, meal_id, created_date)
VALUES ('2', '3', '2020-06-07');

-- Functionality
-- Get meals that has a price smaller than a specific price fx 90
SELECT title FROM meal
WHERE price < 50;

-- Get meals that still has available reservations
SELECT meal.*
FROM meal
LEFT JOIN reservation ON meal.id = reservation.meal_id
GROUP BY meal.id
HAVING meal.max_reservation > COALESCE(SUM(reservation.number_of_guests), 0);

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT title FROM meal
WHERE title LIKE '%s%';

-- Get meals that has been created between two dates
SELECT title FROM meal
WHERE created_date BETWEEN '2020-06-02' AND '2020-06-05';

-- Get only specific number of meals fx return only 5 meals
SELECT * FROM meal
LIMIT 2;

-- Get the meals that have good reviews
SELECT meal.title, review.stars, AVG(review.stars)  AS average
FROM review
INNER JOIN meal ON meal.id = review.meal_id
WHERE review.stars > '3'
GROUP BY meal.title
ORDER BY average;

-- Get reservations for a specific meal sorted by created_date
SELECT meal.title, reservation.created_date
FROM reservation
INNER JOIN meal ON meal.id = reservation.meal_id
WHERE title = 'supe'
ORDER BY reservation.created_date;

-- Sort all meals by average number of stars in the reviews
SELECT meal.*, AVG(review.stars)  AS average
FROM review
INNER JOIN meal ON meal.id = review.meal_id
GROUP BY meal.id
ORDER BY average DESC;
