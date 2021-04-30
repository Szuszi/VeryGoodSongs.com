/**
 * Removes a song from the database, the entity used here is: res.locals.song
 * Redirects to /song after delete
 */

 const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {

    return function (req, res, next) {
        if (typeof res.locals.oneSong === 'undefined') {
            return next();
        }

        res.locals.oneSong.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/song');
        });
    };
 };