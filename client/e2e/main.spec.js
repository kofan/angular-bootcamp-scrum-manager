'use strict';

var parseUrl = require('url').parse;

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('/');
    page = require('./main.po');
  });

  it('should have root url path', function() {
    browser.getCurrentUrl().then(function (url) {
      expect(parseUrl(url).hash).toBe('#/');
    });
  });

  it('should include header with correct title', function() {
    expect(page.h1El.getText()).toBe('Main Controller...!');
  });

  it('should list more than 2 persons', function () {
    expect(page.bcPersonEls.count()).toBeGreaterThan(2);
  });

});
