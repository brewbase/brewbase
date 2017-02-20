INSERT INTO savedbrewery (name, website, imageurl, description, locality)
VALUES ($1, $2, $3, $4, $5)
RETURNING "name", "website", "imageurl", "description", "locality"
