/**
 * Using POST params update or save a song to the database
 * If res.locals.song is there, it's an update otherwise this middleware creates a new entity
 * Redirects to /song after success
 */

 const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {

    const ArtistModel = requireOption(objectrepository, 'ArtistModel');
    const SongModel = requireOption(objectrepository, 'SongModel');

     return function (req, res, next) {
        console.log('saveSongMW called');
        //return res.redirect('/song');
        next();
     };
 };