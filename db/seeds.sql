INSERT INTO department (name)
VALUES
('IT'),
('FINANCE & ACCOUNTING'),
('SALES & MARKETING'),
('OPERATIONS');

INSERT INTO role (title, salary, department_id)
VALUES
('Full Stack Developer', 80000, 1),
('Software Engineer', 120000, 1),
('Accountant', 90000, 2),
('Financial Analyst', 160000, 2),
('Marketing Coordinator', 80000, 3),
('Sales Lead', 94000, 3),
('Project Manager', 115000, 4),
('Operations Manager', 85000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Keandra', 'Davis', 3, 5),
('Mildred', 'Ellis', 4, 3),
('Tara', 'Turner', null, 1),
('Javis', 'Carr', 2, null),
('Kwiince', 'Lipscomb', 3, 2),
('Rashod', 'Dumas', 1, null),
('Bobby', 'Turner', 1, 2),
('Kody', 'Ellis', null, 4);