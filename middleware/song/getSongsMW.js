/**
 * Load all songs from the database
 * The result is saved to res.locals.songs
 */

 const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {
     
    const SongModel = requireOption(objectrepository, 'SongModel');

    return function (req, res, next) { 
        if (typeof res.locals.oneArtist === 'undefined') {
            SongModel.find({}, (err, songs) => {
                if(err){
                    return next(err);
                }
    
                res.locals.songs = songs;
                return next();
            }); 
        }
        else {
            SongModel.find(
                {
                    _artist: res.locals.oneArtist._id
                },
                (err, songs) => {
                    if(err){
                        return next(err);
                    }
    
                    res.locals.songs = songs;
                    return next();
            }); 
        }
    };
 };