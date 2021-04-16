/**
 * Using POST params update or save an arstist to the database
 * If res.locals.artist is there, it's an update otherwise this middleware creates a new entity
 * Redirects to /artist after success
 */

 const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {

    const ArtistModel = requireOption(objectrepository, 'ArtistModel');

    return function (req, res, next) {
        console.log('saveArtistMW called');
        //return res.redirect('/artist');
        next();
    };
 };