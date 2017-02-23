CREATE TABLE savedbrewery(
    id VARCHAR(255),
    breweryname TEXT,
    website TEXT,
    imageurl TEXT,
    description TEXT,
    locality TEXT,
    userid CHARACTER VARYING(255),
    CONSTRAINT fk_savedbrewery_user FOREIGN KEY (userid) REFERENCES theuser("auth0id")
);
