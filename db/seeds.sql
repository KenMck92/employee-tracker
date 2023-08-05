INSERT INTO department (name)
VALUES ("Speciality"),
    ("Debone"),
    ("Shipping"),
    ("Pre-price"),
    ("HR");

    SELECT * FROM department;

INSERT INTO role (title, salary, department_id)
VALUES ("Supervisor", 80000, 3),
    ("Hourly-Employee", 40000, 5),
    ("Manager", 100000, 1),
    ("Superintendent", 90000, 2),
    ("FERM", 70000, 4);

    SELECT * FROM role;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    ("Jamaal", "Taylor", 3, NULL),
    ("Lekendrick", "Mckeller", 1, 1),
    ("Anthony", "Fowler", 2, 1),
    ("Maryann", "Sanchez", 4, 1),
    ("Marco", "Salinas", 5, 1);

    SELECT * FROM employee;
