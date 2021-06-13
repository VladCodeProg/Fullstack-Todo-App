CREATE DATABASE todo_base;

-- \c todo_base

CREATE TABLE todo (
    id SERIAL PRIMARY KEY,
    text VARCHAR(200),
    completed BOOLEAN,
    important BOOLEAN
);