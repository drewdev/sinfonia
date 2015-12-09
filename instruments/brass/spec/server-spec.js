var request = require('supertest');

describe('loading express', function() {
  var server;

  beforeEach(function() {
    server = require('./server');
  });

  afterEach(function() {
    server.close();
  });

  it('responds to /note', function testNote(done) {
    request(server)
      .get('/note')
      .expect(200, done);
  });
});
