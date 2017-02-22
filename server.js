const config = require('./client/config');
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const pug = require('pug');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
const router = express.Router();
const session = require('express-session');
var cors = require('cors');
var path = require('path');

// PASSPORT CONFIGURATION FOR AUTH0
var strategy = new Auth0Strategy({
    domain: 'brewbase.auth0.com',
    clientID: config.clientID,
    clientSecret: config.clientSecret,
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

// const fav_beer_ctrl = require('./db/controllers/favoriteBeer');
// const fav_brewery_ctrl = require('./db/controllers/favoriteBrewery');
// const user_ctrl = require('./db/controllers/userCtrl.js');

const app = module.exports = express();

app.use(express.static(path.join(__dirname + '/views')));
app.use(bodyParser.json());
app.use(session({secret: 'hi'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

//MASSIVE DB SETUP
var db = massive.connect({
    connectionString: config.connString
}, function(err, localdb) {
    db = localdb;
    app.set('db', db);
})

// ENDPOINTS FOR AUTH0
app.get('/login', function(req, res, next) {
    res.render('login.pug');
});

// app.post('/user', ensureLoggedIn, function(req, res, next) {
//     res.render('user.pug', {
//         user: req.user,
//         userProfile: JSON.stringify(req.user, null, '  ')
//     });
//     console.log('This is the info ->', req.user)
// });

app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('http://localhost:3000/');
});
app.get('/callback', passport.authenticate('auth0', {failureRedirect: '/url-if-something-fails'}), function(req, res) {
    // res.redirect('http://localhost:3000/search');
    res.redirect('http://localhost:4000/user');
});
app.get('/user', function(req, res, next) {
    db.add_user([
        req.user.id, req.user.nickname, req.user.picture
    ], (err, result) => {
        if (err) {
            res.redirect('/user/' + req.user.id);
        } else {
            res.redirect('http://localhost:3000/')
        }
    });
})
app.get('/user/:auth0id', ensureLoggedIn, (req, res) => {
    res.redirect('http://localhost:3000/profile?id=' + req.params.auth0id);
})
app.get('/users/:auth0id', (req, res) => {
    db.get_user_info([req.params.auth0id], (err, result) => {
        res.send(result[0])
    })
})

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
    console.log("App is listening on port 4000");
});
