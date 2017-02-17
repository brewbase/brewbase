//Configuration for PASSPORT to use Auth0
var passport = require('passport');
var Auth0Strategy = require('passport-auth0');

var strategy = new Auth0Strategy({
    domain:       'brewbase.auth0.com',
    clientID:     'j0ICHuTbfDJXIrcQQBNyse42Ec48ul0E',
    clientSecret: 'V2v7NOWRS0J1SBCzTkWpECgvUVOfMVflPQVMFfTYJRHgD2fYoXyckgiJTdKhE5AI',
    callbackURL:  'http://localhost:3000/callback'
  }, function(accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  });

passport.use(strategy);

// This can be used to keep a smaller payload
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = strategy;
// END Configuration
