const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const pug = require('pug');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
const router = express.Router();
const session = require('express-session');

// PASSPORT CONFIGURATION FOR AUTH0
var strategy = new Auth0Strategy({
    domain: 'brewbase.auth0.com',
    clientID: 'j0ICHuTbfDJXIrcQQBNyse42Ec48ul0E',
    clientSecret: 'V2v7NOWRS0J1SBCzTkWpECgvUVOfMVflPQVMFfTYJRHgD2fYoXyckgiJTdKhE5AI',
    callbackURL: 'http://localhost:4000/callback'
}, function(accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile, extraParams);
});

passport.use(strategy);
passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(user, done) {
    done(null, user);
});
// END PASSPORT CONFIGURATION

//MASSIVE DB SETUP
// const db = massive.connectSync({
//   connectionString: 'postgres://postgres:@localhost/FILL IN NAME'
// });

// const fav_beer_ctrl = require('./db/controllers/favoriteBeer');
// const fav_brewery_ctrl = require('./db/controllers/favoriteBrewery');

const app = module.exports = express();

// app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());
app.use(session({secret: 'hi'}));
app.use(passport.initialize());
app.use(passport.session());

// app.set('db', db);

// ENDPOINTS FOR AUTH0
app.get('/login', function(req, res, next) {
    res.render('login.pug');
});

app.get('/user', function(req, res, next) {
    console.log('USER')
    res.render('user.pug', {
        user: req.user,
        userProfile: JSON.stringify(req.user, null, '  ')
    });
    console.log('This is the info ->', req.user)
});

app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/login');
});

app.get('/callback', passport.authenticate('auth0', {failureRedirect: '/url-if-something-fails'}), function(req, res) {
    res.redirect('http://localhost:3000/');
});

//ENDPOINTS FOR BREWBASE
// app.get('/api/favoriteBreweries', fav_brewery_ctrl.index);
// app.get('/api/favoriteBrews', fav_beer_ctrl.index);
//
// app.post('/api/favoriteBreweries', fav_brewery_ctrl.create);
// app.post('/api/favoriteBrews', fav_beer_ctrl.create);
//
// app.delete('/api/favoriteBreweries/:breweryId', fav_brewery_ctrl.destroy);
// app.delete('/api/favoriteBrews/:beerId', fav_beer_ctrl.destroy);

app.listen(4000, () => {
    console.log("App is listening on port 3000");
});
