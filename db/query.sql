SELECT * FROM employee;
SELECT * FROM department;
SELECT * FROM role;

UPDATE employee
SET role_id = 4 WHERE id = 2;

INSERT INTO department (name)
VALUES ("Evis");

INSERT INTO role (title, salary, department_id)
VALUES ("Floor", 20000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("James","Garcia", 1, 1);

