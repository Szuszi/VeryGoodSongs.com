/**
 * Load all songs from the database
 * The result is saved to res.locals.songs
 */

 const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {

    const ArtistModel = requireOption(objectrepository, 'ArtistModel');
    const SongModel = requireOption(objectrepository, 'SongModel');

    return function (req, res, next) {
        console.log('getSongsMW called');
        next();
    };
 };