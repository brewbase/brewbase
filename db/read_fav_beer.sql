SELECT * FROM savedbeer
join theuser on savedbeer.userid = theuser.auth0id
where savedbeer.userid = $1
