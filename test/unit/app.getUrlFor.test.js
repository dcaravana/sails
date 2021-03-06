/**
 * Module dependencies
 */

var assert = require('assert');
var util = require('util');
var Sails = require('../../lib').constructor;


describe.skip('app.getUrlFor()', function (){

  var app;
  before(function (done){
    app = new Sails();
    app.load({
      globals: false,
      loadHooks: [],
      routes: {
        'get /signup': 'PageController.signup',
        'post /login': 'UserController.login',
        'post /*': 'UserController.login'
      }
    }, done);
  });


  it('should return appropriate route URL with simplified usage', function () {
    assert.equal( app.getUrlFor('PageController.signup'), '/signup' );
  });

  it('should return appropriate route URL with expanded usage', function () {
    assert.equal( app.getUrlFor({ target: 'PageController.login' }), '/signup' );
  });

  it('should return the _first_ matching route URL for the given target', function () {
    assert.equal( app.getUrlFor('UserController.login'), '/login' );
  });

});

