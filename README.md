# qp-assesment

Grocery Booking API

1. Admin Responsibilities:
   - Add new grocery items to the system
   - View existing grocery items
   - Remove grocery items from the system
   - Update details (e.g., name, price) of existing grocery items
   - Manage inventory levels of grocery items
2. User Responsibilities:
   - View the list of available grocery items
   - Ability to book multiple grocery items in a single order

-- Database: qp-assesment

-- DROP DATABASE IF EXISTS "qp-assesment";

CREATE DATABASE "qp-assesment"
WITH
OWNER = postgres
ENCODING = 'UTF8'
LC_COLLATE = 'English_United States.1252'
LC_CTYPE = 'English_United States.1252'
TABLESPACE = pg_default
CONNECTION LIMIT = -1;

    CREATE USER grocery_user WITH PASSWORD 'root';

GRANT ALL PRIVILEGES ON DATABASE "qp-assesment" TO grocery_user;

CREATE TABLE users (
id SERIAL PRIMARY KEY,
username VARCHAR(50) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL,
role VARCHAR(10) NOT NULL CHECK (role IN ('admin', 'user')),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE grocery (
id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
description TEXT,
price NUMERIC(10, 2) NOT NULL CHECK (price >= 0),
quantity INTEGER NOT NULL CHECK (quantity >= 0),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
