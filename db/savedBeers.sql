CREATE TABLE savedbeer (
    id VARCHAR(255),
    description TEXT,
    imageurl TEXT,
    beername TEXT,
    type TEXT,
    breweryId VARCHAR(20),
    userid CHARACTER VARYING(255),
    CONSTRAINT fk_savedbeer_user FOREIGN KEY (userid) REFERENCES theuser("auth0id")
);
