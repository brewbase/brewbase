CREATE TABLE savedbrewery(
    id VARCHAR(15),
    breweryname TEXT,
    website TEXT,
    imageurl TEXT,
    description TEXT,
    locality TEXT,
    breweryobject TEXT,
    userid CHARACTER VARYING(255),
    CONSTRAINT fk_savedbrewery_user FOREIGN KEY (userid) REFERENCES theuser("auth0id")
);
