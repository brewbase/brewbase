INSERT INTO savedbeer (description, imageurl, name, type, breweryId)
VALUES ($1, $2, $3, $4, $5)
RETURNING "description", "imageurl", "name", "type", "breweryId"
