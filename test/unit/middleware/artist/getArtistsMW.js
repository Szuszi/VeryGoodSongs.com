var expect = require('chai').expect;
var getArtistsMW = require('../../../../middleware/artist/getArtistsMW');

describe('getArtists middleware ', function () {
    it('should return artists', function (done) {
        var req = {};
        var res = {
            locals: {}
        };
        var mockArtistModel = {
            find: function (some, cb) {
                cb(undefined, ['artist1', 'artist2']);
            }
        }
        
        getArtistsMW({ArtistModel: mockArtistModel})(req, res, function(err) {
            expect(res.locals.artists).to.be.eql(['artist1', 'artist2']);
            expect(err).to.be.eql(undefined);
            done();
        });
    });

    it('should return error when db returns erros', function(done){
        var req = {};
        var res = {};
        var mockArtistModel = {
            find: function (some, cb) {
                cb('error text', undefined);
            }
        }

        getArtistsMW({ArtistModel: mockArtistModel})(req, res, function(err) {
            expect(err).to.be.eql('error text');
            done();
        });
    });

    it('should just call next when nothing found from db', function(done){
        var req = {};
        var res = {
            locals: {}
        };
        var mockArtistModel = {
            find: function (some, cb) {
                cb(undefined, null);
            }
        }

        getArtistsMW({ArtistModel: mockArtistModel})(req, res, function(err) {
            expect(res.locals.artists).to.be.eql(null);
            expect(err).to.be.eql(undefined);
            done();
        });
    });
});
