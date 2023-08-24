SHOW DATABASES;

CREATE DATABASE registration_system;

USE registration_system;

SHOW TABLES;

/* Create table */
CREATE TABLE user (
    name VARCHAR(50),
    email VARCHAR(100),
    age INT
);

DESCRIBE user;

/* Insert values */
INSERT INTO user (name, email, age) VALUES ('Paul', 'paul@gmail.com', 32);
INSERT INTO user (name, email, age) VALUES ('Victor', 'victor@outlook.com', 28);
INSERT INTO user (name, email, age) VALUES ('Julia', 'julia_stain@hotmail.com', 40);
INSERT INTO user (name, email, age) VALUES ('Gilbert', 'gilbert@gmail.com', 22);
INSERT INTO user (name, email, age) VALUES ('Kevin', 'kevin@gmail.com', 18);
INSERT INTO user (name, email, age) VALUES ('Charles', 'charles@yahoo.com', 50);
INSERT INTO user (name, email, age) VALUES ('Mary', 'mary@gmail.com', 55);
INSERT INTO user (name, email, age) VALUES ('Ana', 'ana_clare@hotmail.com', 42);
INSERT INTO user (name, email, age) VALUES ('Lylis', 'lylis@gmail.com', 8);

/* Select values */
SELECT * FROM user;
SELECT * FROM user ORDER BY age ASC;
SELECT * FROM user WHERE age < 30;
SELECT * FROM user WHERE name = 'Paul';

/* Update values */
UPDATE user SET name = "Ana Clare" WHERE name = 'Ana';

/* Delete values */
DELETE FROM user WHERE name = 'Paul';
