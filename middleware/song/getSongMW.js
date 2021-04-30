/**
 * Load a song from the database using the :songid param
 * The result is saved to res.locals.song
 */

 const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {

    const SongModel = requireOption(objectrepository, 'SongModel');

    return function (req, res, next) {
        SongModel.findOne(
            { 
                _id: req.params.songid 
            },
            (err, oneSong) => {
                if(err || !oneSong){
                    return next(err);
                }

                res.locals.oneSong = oneSong;
                return next();
        })
    };
 };