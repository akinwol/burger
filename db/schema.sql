-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "animals_db" database --
CREATE DATABASE burgers_db;

USE burgers_db;

-- Creates the table "people" within animals_db --
CREATE TABLE burgers (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  burger_name VARCHAR(50) NOT NULL,
  -- Makes a boolean column called "has_pet" which cannot contain null --
  devoured BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);