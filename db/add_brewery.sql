INSERT INTO savedbrewery (brewerystring, userid, breweryid)
VALUES ($1, $2, $3)
RETURNING "brewerystring", "userid", "breweryid"
