const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');

const db = massive.connectSync({
  connectionString: 'postgres://postgres:@localhost/FILL IN NAME'
});

//Require controllers here

const app = module.exports = express();
app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());
app.set('db', db);

app.get('/api/favoriteBreweries');
app.get('/api/favoriteBrews');

app.post('/api/favoriteBreweries');
app.post('/api/favoriteBrews');

//Need put endpoint?

app.delete('/api/favoriteBreweries/:breweryId');
app.delete('/api/favoriteBrews/:beerId');


app.listen(3000, () =>{
    console.log("App is listening on port 3000");
});
