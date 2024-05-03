INSERT INTO department (name)
VALUES
(`Warehouse`),
(`Supervisor`),
(`Office`);

INSERT INTO role( title, salary, department_id)
VALUES
(`Forklift Operator`, 40000, 1),
(`Stocking Assosciate`, 30000, 1),
(`Floor Manager`, 60000, 2),
(`Salesman`, 75000, 3),
(`Sales Manager`, 85000, 2);

INSERT INTO employee (first_name, last_name, role_id)
VALUES
(`Bradley`, `Wallace`, 1),
(`Alex`, `Smith`, 1),
(`Bo`, `Jackson`, 1),
(`Jerry`, `Rice`, 2),
(`Josh`, `Allen`, 3),
(`Brandon`, `Aiyuk`, 3),
(`George`, `Kittle`, 3),
(`Sauce`, `Gardner`, 2),
(`Max`, `Crosby`, 1),
(`Lamar`, `Jackson`, 4),
(`Patrick`, `Mahomes`, 5),
(`Brock`, `Purdy`, 5),
(`Dak`, `Prescott`, 1),
(`Daniel`, `Jones`, 2);


