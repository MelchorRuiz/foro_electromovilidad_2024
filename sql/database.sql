DROP DATABASE IF EXISTS db_foro_electromovilidad_2024;

CREATE DATABASE db_foro_electromovilidad_2024;

USE db_foro_electromovilidad_2024;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id int PRIMARY KEY AUTO_INCREMENT,
  uuid varchar(250) NOT NULL,
  name varchar(50) NOT NULL,
  email varchar(50) NOT NULL UNIQUE,
  phone varchar(10) NOT NULL UNIQUE,
  company varchar(50) NOT NULL,
  position varchar(50) NOT NULL,
  country varchar(50) NOT NULL,
  state varchar(50) NOT NULL,
  city varchar(50) NOT NULL,
  created_at timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;