INSERT INTO departments (dep_name)
VALUES 
("Engineering"),
("Finance"),
("Legal"),
("Sales"),
("Service");

INSERT INTO roles (title, salary, department_id)
VALUES
("Sales Lead", 65000.00, 2),
("Salesperson", 30000.00, 2),
("Lead Engineer", 95000.00, 3),
("Software Engineer", 85000.00, 3),
("Account Manager", 70000.00, 1),
("Accountant", 68000.00, 3),
("Legal Team Lead", 100000.00, 1),
("Lawyer", 100000.00, 2),
("Customer Service", 60000.00, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
("Nate", "McIlvenny", 1),
("Skyler", "Ferreira", 1),
("Tony", "Quinones" 1),
("Cesar", "Infante" 1),
("Gil", "Escobedo" 1),
("Daniel", "Kang" 1),
("Chris", "Hernandez" 1),
("Felix", "Cagatin" 1),
("Luke", "McIlvenny" 1);