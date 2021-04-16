/**
 * Removes an artist from the database, the entity used here is: res.locals.artist
 * Redirects to /artist after delete
 */

 const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {

    const ArtistModel = requireOption(objectrepository, 'ArtistModel');

    return function (req, res, next) {
        console.log('delArtistMW called');
        return res.redirect('/artist');
    };
};