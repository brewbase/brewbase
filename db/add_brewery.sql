INSERT INTO savedbrewery (breweryname, imageurl, id, userid)
VALUES ($1, $2, $3, $4)
RETURNING "breweryname", "imageurl", "id", "userid"
