CREATE TABLE theuser (
  id SERIAL PRIMARY KEY,
  auth0id VARCHAR(255) UNIQUE,
  name TEXT,
  imgUrl VARCHAR (255)
);
