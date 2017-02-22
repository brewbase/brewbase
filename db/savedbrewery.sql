CREATE TABLE savedbrewery(
    id SERIAL PRIMARY KEY,
    name TEXT,
    website TEXT,
    imageurl TEXT,
    description TEXT,
    locality TEXT,
    userId INTEGER,
    CONSTRAINT fk_savedbrewery_user FOREIGN KEY (userId) REFERENCES theuser("auth0id")
);
