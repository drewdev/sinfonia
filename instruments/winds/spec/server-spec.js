var request = require('supertest');
var reallyRequire = require('really-need');

describe('loading express', function() {
  var server;

  beforeEach(function() {
    server = reallyRequire('../app/server', { bustCache: true });
  });

  afterEach(function(done) {
    server.close(done);
  });

  it('responds to /note', function testNote(done) {
    request(server)
      .get('/note')
      .expect(200, done);
  });

  it('returns a 404 for an invalid path', function testInvalidPath(done) {
    request(server)
      .get('/invalid-path')
      .expect(404, done);
  });
});
