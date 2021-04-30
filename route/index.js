const renderMW = require('../middleware/renderMW');

const getSongsMW = require('../middleware/song/getSongsMW');
const getSongMW = require('../middleware/song/getSongMW');
const delSongMW = require('../middleware/song/delSongMW');
const saveSongMW = require('../middleware/song/saveSongMW');

const getArtistsMW = require('../middleware/artist/getArtistsMW');
const getArtistMW = require('../middleware/artist/getArtistMW');
const delArtistMW = require('../middleware/artist/delArtistMW');
const saveArtistMW = require('../middleware/artist/saveArtistMW');

const ArtistModel = require('../models/artist');
const SongModel = require('../models/song');
module.exports = function (app) {
    const objectrepository = {
        ArtistModel: ArtistModel,
        SongModel: SongModel
    };

    /**
     * Delete entity routes
     */
    app.get('/song/del/:songid',
    getSongMW(objectrepository),
    delSongMW(objectrepository));

    app.get('/artist/del/:artistid',
    getArtistMW(objectrepository),
    getSongsMW(objectrepository), //We need to delete the songs, which the Artist were included in.
    delArtistMW(objectrepository));

    /**
     * Edit entity routes
     */
    app.use('/song/edit/:songid',
    getSongMW(objectrepository),
    getArtistsMW(objectrepository), //We need all the Artists, to be able to select them as an artist of the song
    getArtistMW(objectrepository),
    saveSongMW(objectrepository),
    renderMW(objectrepository, 'editsong'));

    app.use('/artist/edit/:artistid',
    getArtistMW(objectrepository),
    saveArtistMW(objectrepository),
    renderMW(objectrepository, 'editartist'));

    /**
     * Adding new entity routes
     */
    app.use('/song/new',
    getArtistsMW(objectrepository), //We need all the Artists, to be able to select them as an artist of the song
    getArtistMW(objectrepository),
    saveSongMW(objectrepository),
    renderMW(objectrepository, 'addsong'));

    app.use('/artist/new',
    saveArtistMW(objectrepository),
    renderMW(objectrepository, 'addartist'));
	 
	 /**
     * List entity routes
     */
    app.get('/song',
    getSongsMW(objectrepository),
    getArtistsMW(objectrepository),
    renderMW(objectrepository, 'index'));

    app.get('/artist',
    getArtistsMW(objectrepository),
    renderMW(objectrepository, 'artists'));

    app.get('/artist/list/:artistid',
    getArtistMW(objectrepository),
    getSongsMW(objectrepository),
    renderMW(objectrepository, 'artistwithsongs'));

    /**
     *  Default
     */
    app.get('/',
    getSongsMW(objectrepository),
    getArtistsMW(objectrepository),
    renderMW(objectrepository, 'index'));

    /**
     * 404
     */
    app.get('*',
    renderMW(objectrepository, '404'));
}