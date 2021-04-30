/**
 * Removes an artist from the database, the entity used here is: res.locals.artist
 * Redirects to /artist after delete
 */

 const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {

    return function (req, res, next) {
        if (typeof res.locals.oneArtist === 'undefined') {
            return next();
        }

        res.locals.songs.forEach(song => {
            song.remove(err => {
                if (err) {
                    return next(err);
                }
            });
        });

        res.locals.oneArtist.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/artist');
        });
    };
};