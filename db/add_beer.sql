INSERT INTO savedbeer (beername, imageurl, id, userid)
VALUES ($1, $2, $3, $4)
RETURNING "beername", "imageurl", "id", "userid"
