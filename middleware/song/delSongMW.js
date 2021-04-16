/**
 * Removes a song from the database, the entity used here is: res.locals.song
 * Redirects to /song after delete
 */

 const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {

    const ArtistModel = requireOption(objectrepository, 'ArtistModel');
    const SongModel = requireOption(objectrepository, 'SongModel');

    return function (req, res, next) {
        console.log('delSongMW called');
        return res.redirect('/song');
    };
 };