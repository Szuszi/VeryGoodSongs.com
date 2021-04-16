/**
 * Load all artists from the database
 * The result is saved to res.locals.artists
 */

 const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {

    const ArtistModel = requireOption(objectrepository, 'ArtistModel');

    return function (req, res, next) {
        console.log('getArtistsMW called');
        next();
    };
};