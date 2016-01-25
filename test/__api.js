request = require('supertest');

describe('API', function () {
  var server;

  beforeEach(function(){
    server = require('../src/server.js');
  });

  afterEach(function(){
    server.close;
  });

  it('"/api/" should load specified object.', function testHealth(done) {
    request(server)
    .get('/api/')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, {"hello": 'world'},done());
  });

  it('"/api/status" should return true.', function testHealth(done) {
    request(server)
    .get('/api/status')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, true, done());
  });

  it('"/user/id" should return true.', function testHealth(done) {
    var fakeUserID = 374;
    request(server)
    .get('/api/user/' + fakeUserID)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, {user: {id: fakeUserID}}, done());
  });
});
