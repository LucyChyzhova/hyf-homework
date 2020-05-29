SELECT * FROM task; 
SELECT * FROM status;

-- PART 1 Working with tasks
-- Add a task with these attributes: title, description, created, updated, due_date, status_id,
INSERT INTO task (title, description, created, updated, due_date, status_id)
VALUES ('Go shopping', 'buy food', '2020-05-26', '2020-05-27', '2020-05-29', 1);
-- Change the title of a task
UPDATE task SET title = 'Go shopping now'
WHERE id=36; 

-- Change a task due date
UPDATE task SET due_date = '2020-05-31'
WHERE id=36; 

-- Change a task status
UPDATE task SET status_id = '2'
WHERE id=36; 

-- Mark a task as complete
UPDATE task SET status_id = '3'
WHERE id=36; 

-- Delete a task
DELETE FROM task 
WHERE id = 36;

