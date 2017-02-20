INSERT INTO theuser (auth0id, name, imgurl)
VALUES ($1, $2, $3)
RETURNING "auth0id", "name", "imgurl"
