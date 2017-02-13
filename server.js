const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');

const db = massive.connectSync({
  connectionString: 'postgres://postgres:@localhost/FILL IN NAME'
});

const fav_beer_ctrl = require('./db/controllers/favoriteBeer');
const fav_brewery_ctrl = require('./db/controllers/favoriteBrewery');

const app = module.exports = express();
app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());
app.set('db', db);

app.get('/api/favoriteBreweries', fav_brewery_ctrl.index);
app.get('/api/favoriteBrews', fav_beer_ctrl.index);

app.post('/api/favoriteBreweries', fav_brewery_ctrl.create);
app.post('/api/favoriteBrews', fav_beer_ctrl.create);

app.delete('/api/favoriteBreweries/:breweryId', fav_brewery_ctrl.destroy);
app.delete('/api/favoriteBrews/:beerId', fav_beer_ctrl.destroy);


app.listen(3000, () =>{
    console.log("App is listening on port 3000");
});
