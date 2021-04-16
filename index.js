/*
const ArtistModel = require('./models/artist');
const SongModel = require('./models/song');

let mozart = new ArtistModel();
mozart.name = 'Wolfgang Amadeus Mozart';
mozart.nationality = 'Austrian'
mozart.age = 256;
mozart.save((err) => {
    console.log(err);
    let szimfonia = new SongModel();
    szimfonia.title = "G.Dúr hangverseny";
    szimfonia._artist = mozart;
    szimfonia.rating = 10;
    szimfonia.length = "4:20";

    szimfonia.save((err) => { console.log(err); })
});
*/

const express = require('express');
const app = express();

app.use(express.static('static'));
app.set('view engine', 'ejs');

// Load routing
require('./route/index')(app);

app.use((err, req, res, next) => {
    res.end('Problem...');
    console.log(err);
});

app.listen(3000, function () {
    console.log('Open at :3000');
});