CREATE DATABASE linksapp ;
USE linksapp;
CREATE TABLE users (
    id INT(11)  PRIMARY KEY AUTO_INCREMENT  NOT NULL,
    username VARCHAR(11) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fullname VARCHAR(100) NOT NULL
);
ALTER TABLE users
    ADD  PRIMARY KEY (id);

DESCRIBE users;
--links table
CREATE TABLE links(
    id INT(11)  PRIMARY KEY AUTO_INCREMENT  NOT NULL,
    title VARCHAR(150) NOT NULL,
    url VARCHAR(250) NOT NULL,
    description TEXT NOT NULL,
    user_id  INT(11),
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);
DESCRIBE links;