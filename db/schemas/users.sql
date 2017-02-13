CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  auth0id INTEGER UNIQUE,
  name TEXT,
  email VARCHAR(30)
);
