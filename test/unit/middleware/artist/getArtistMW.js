var expect = require('chai').expect;
var getArtistMW = require('../../../../middleware/artist/getArtistMW');

describe('getArtist middleware ', function () {
    it('should return an artist from req.param search', function (done) {
        var req = {
            body: {},
            params: {
                artistid: '13'
            }
        };
        var res = {
            locals: {}
        };
        var mockArtistModel = {
            findOne: function (some, cb) {
                expect(some).to.be.eql({ _id: '13'});
                cb(undefined, 'mockArtist');
            }
        }
        
        getArtistMW({ArtistModel: mockArtistModel})(req, res, function(err) {
            expect(res.locals.oneArtist).to.be.eql('mockArtist');
            expect(err).to.be.eql(undefined);
            done();
        });
    });

    it('should return an error if db throws an error to req.param search', function (done) {
        var req = {
            body: {},
            params: {
                artistid: '13'
            }
        };
        var res = {
            locals: {}
        };
        var mockArtistModel = {
            findOne: function (some, cb) {
                expect(some).to.be.eql({ _id: '13'});
                cb('error text', undefined);
            }
        }
        
        getArtistMW({ArtistModel: mockArtistModel})(req, res, function(err) {
            expect(err).to.be.eql('error text');
            done();
        });
    });

    it('should return an artist from req.body search', function (done) {
        var req = {
            body: {
                artist: '13'
            }
        };
        var res = {
            locals: {}
        };
        var mockArtistModel = {
            findOne: function (some, cb) {
                expect(some).to.be.eql({ _id: '13'});
                cb(undefined, 'mockArtist');
            }
        }
        
        getArtistMW({ArtistModel: mockArtistModel})(req, res, function(err) {
            expect(res.locals.oneArtist).to.be.eql('mockArtist');
            expect(err).to.be.eql(undefined);
            done();
        });
    });

    it('should return an error if db throws an error to req.body search', function (done) {
        var req = {
            body: {
                artist: '13'
            }
        };
        var res = {
            locals: {}
        };
        var mockArtistModel = {
            findOne: function (some, cb) {
                expect(some).to.be.eql({ _id: '13'});
                cb('error text', undefined);
            }
        }
        
        getArtistMW({ArtistModel: mockArtistModel})(req, res, function(err) {
            expect(err).to.be.eql('error text');
            done();
        });
    });
});