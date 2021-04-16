/**
 * Load a song from the database using the :songid param
 * The result is saved to res.locals.song
 */

 const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {

    const ArtistModel = requireOption(objectrepository, 'ArtistModel');
    const SongModel = requireOption(objectrepository, 'SongModel');

    return function (req, res, next) {
        console.log('getSongMW called');
        next();
    };
 };