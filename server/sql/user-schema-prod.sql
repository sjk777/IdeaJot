drop database if exists ideaJot_user;
create database ideaJot_user;
use ideaJot_user;

CREATE TABLE users(
    user_id Serial Primary KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    oauth_provider VARCHAR(50) NOT NULL,
    oauth_user_id VARCHAR(255) NOT NULL,
);

CREATE TABLE notes(
    note_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (user_id) REFERENCES users (user_id)

);