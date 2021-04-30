/**
 * Load an artist from the database using the :artistid param
 * The result is saved to res.locals.artist
 */

 const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {

    const ArtistModel = requireOption(objectrepository, 'ArtistModel');

    return function (req, res, next) {
        if(typeof req.body.artist != 'undefined'){
            ArtistModel.findOne(
                { 
                    _id: req.body.artist
                },
                (err, oneArtist) => {
                    if(err || !oneArtist){
                        return next(err);
                    }
    
                    res.locals.oneArtist = oneArtist;
                    return next();
            })
        }

        else {
            ArtistModel.findOne(
                { 
                    _id: req.params.artistid 
                },
                (err, oneArtist) => {
                    if(err || !oneArtist){
                        return next(err);
                    }

                    res.locals.oneArtist = oneArtist;
                    return next();
            })
        }
    };
};