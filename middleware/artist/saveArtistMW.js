/**
 * Using POST params update or save an arstist to the database
 * If res.locals.artist is there, it's an update otherwise this middleware creates a new entity
 * Redirects to /artist after success
 */

 const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {

    const ArtistModel = requireOption(objectrepository, 'ArtistModel');

    return function (req, res, next) {
        if (
            typeof req.body.name === 'undefined' ||
            typeof req.body.nationality === 'undefined' ||
            typeof req.body.age === 'undefined'
        ) {
            return next();
        }

        if (typeof res.locals.oneArtist === 'undefined') {
            res.locals.oneArtist = new ArtistModel();
            console.log('new Artist made');
        }

        res.locals.oneArtist.name = req.body.name;
        res.locals.oneArtist.nationality = req.body.nationality;
        res.locals.oneArtist.age = req.body.age;

        res.locals.oneArtist.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/artist');
        });
    };
 };