CREATE TABLE savedbrewery(
    id SERIAL PRIMARY KEY,
    name TEXT,
    website TEXT,
    imageurl TEXT,
    description TEXT,
    locality TEXT,
    userId INTEGER,
    CONSTRAINT fk_savedbrewery_users FOREIGN KEY (userId) REFERENCES users("auth0id")
);
