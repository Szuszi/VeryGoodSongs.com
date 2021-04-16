const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Song = db.model('Song', {
    title: String,
    _artist: {
        type: Schema.Types.ObjectId,
        ref: 'Artist'
    },
    rating: Number,
    length: String
});

module.exports = Song;