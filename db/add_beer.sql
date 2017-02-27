INSERT INTO savedbeer (beerstring, userid, beerid)
VALUES ($1, $2, $3)
RETURNING "beerstring", "userid", "beerid"
