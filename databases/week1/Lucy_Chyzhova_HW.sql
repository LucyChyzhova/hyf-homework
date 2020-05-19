-- Find out how many tasks are in the task table         
SELECT COUNT(id) AS amount_of_task FROM task; -- or (*) 

-- Find out how many tasks in the task table do not have a valid due date  
SELECT COUNT(task.id) AS task_count FROM task WHERE due_date is null; 

-- Find all the tasks that are marked as done            
SELECT task.title, status.name AS status_as_text
FROM task 
INNER JOIN status ON status.id = task.status_id
WHERE status.name like 'done';

-- Find all the tasks that are not marked as done         
SELECT task.title, status.name AS status_as_text
FROM task 
INNER JOIN status ON status.id = task.status_id
WHERE status.name NOT like 'done';

-- Get all the tasks, sorted with the most recently created first*/     
SELECT task.title, task.created 
FROM task
ORDER BY created DESC;

-- Get the single most recently created task      
SELECT task.title, task.created 
FROM task
ORDER BY created DESC
LIMIT 0, 1;

-- Get the title and due date of all tasks where the title or description contains database  -
SELECT title, due_date FROM task WHERE title LIKE '%database%' OR description LIKE '%db%'; 

-- Get the title and status (as text) of all tasks        
SELECT task.title, status.name AS status_as_text 
FROM task
INNER JOIN status ON status.id = task.status_id;

-- Get the name of each status, along with a count of how many tasks have that status       
SELECT status.name AS status_name, COUNT(task.id) AS count
FROM status
INNER JOIN task ON status.id = task.status_id
group by status_name;

-- Get the names of all statuses, sorted by the status with most tasks first*/        
SELECT status.name AS status_name, COUNT(task.id) AS count
FROM status
INNER JOIN task ON status.id = task.status_id
group by status_name
ORDER BY count DESC;
