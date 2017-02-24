SELECT * FROM savedbrewery
join theuser on savedbrewery.userid = theuser."auth0id"
where savedbrewery.userid = $1
