CREATE TABLE savedbeer (
    id SERIAL PRIMARY KEY,
    description TEXT,
    imageurl TEXT,
    name TEXT,
    type TEXT,
    breweryId VARCHAR(20),
    userId VARCHAR(255),
    CONSTRAINT fk_savedbeer_user FOREIGN KEY (userId) REFERENCES theuser("auth0id")
);
