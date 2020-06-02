SELECT * FROM task;
SELECT * FROM user;
SELECT * FROM status;
SELECT * FROM user_task;

/*Part 3: More queries
You should do these queries on the database hyf_lesson2, which we created last class. You can find the data here if you need to create the DB again.*/
USE hyf_lesson2;
-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT task.title, user.email
FROM task 
INNER JOIN  user_task ON user_task.task_id = task.id
INNER JOIN user ON user.id = user_task.user_id
WHERE email LIKE '%@spotify.com';

-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT task.title, status.name
FROM task
INNER JOIN status ON status.id = task.status_id
INNER JOIN user_task ON user_task.task_id = task.id
INNER JOIN user ON user.id = user_task.user_id
WHERE user.name = 'Donald Duck' AND status.name = 'Not started';

-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT task.title, task.created, user.name
FROM task 
INNER JOIN user_task ON user_task.task_id = task.id
INNER JOIN user ON user.id = user_task.user_id
WHERE user.name = 'Maryrose Meadows' AND task.created BETWEEN '2017-08-31 00:00:00' AND '2017-09-30 23:59:59';

-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)*/
SELECT monthname(task.created) AS month,COUNT(task.id) AS COUNT 
FROM task
GROUP BY month;