const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Artist = db.model('Artist', {
    name: String,
    nationality: String,
    age: Number
});

module.exports = Artist;