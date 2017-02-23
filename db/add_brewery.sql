INSERT INTO savedbrewery (name, imageurl)
VALUES ($1, $2)
RETURNING "name", "imageurl"
