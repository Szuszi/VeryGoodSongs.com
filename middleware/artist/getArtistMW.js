/**
 * Load an artist from the database using the :artistid param
 * The result is saved to res.locals.artist
 */

 const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {

    const ArtistModel = requireOption(objectrepository, 'ArtistModel');

    return function (req, res, next) {
        /*
        ArtistModel.find({}, (err, artists) => {
            if(err){
                return next(err);
            }

            res.locals.artists = artists;
            return next();
        })
        */

        console.log('getArtistMW called');
        next();
    };
};