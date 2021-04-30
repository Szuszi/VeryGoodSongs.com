/**
 * Using POST params update or save a song to the database
 * If res.locals.song is there, it's an update otherwise this middleware creates a new entity
 * Redirects to /song after success
 */

 const requireOption = require('../requireOption');

 module.exports = function (objectrepository) {

   const SongModel = requireOption(objectrepository, 'SongModel');

   return function (req, res, next) {
      if (
         typeof req.body.title === 'undefined' ||
         typeof req.body.artist === 'undefined' ||
         typeof req.body.rating === 'undefined' ||
         typeof req.body.length === 'undefined'
      ) {
         return next();
      }

      if(req.body.rating < 0 || req.body.rating > 10){
         return next(new Error('Rating must be between 0 and 10'));
      }

      if (typeof res.locals.oneSong === 'undefined') {
         res.locals.oneSong = new SongModel();
         console.log('new Song made');
      }

      res.locals.oneSong.title = req.body.title;
      res.locals.oneSong._artist = res.locals.oneArtist;
      res.locals.oneSong.rating = req.body.rating;
      res.locals.oneSong.length = req.body.length;

      res.locals.oneSong.save(err => {
         if (err) {
             return next(err);
         }

         return res.redirect('/song');
     });
   };
 };