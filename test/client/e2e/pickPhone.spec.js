/* global browser, element, Buffer, $$, by */
var fs = require('fs');
describe('Cash 4 My Device', function () {
  function writeScreenShot(data, filename) {
    var stream = fs.createWriteStream(filename);

    stream.write(new Buffer(data, 'base64'));
    stream.end();
  }
  browser.get('http://localhost:3000');

//  beforeEach(function() {
//
//  });

  it('should redirect to /device', function () {
    expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/device');
  });

  it('should have a title', function () {
    expect(browser.getTitle()).toEqual('Cash 4 My Device');
  });

  it('should be able to pick apple or samsung', function () {
    var type = $$('.first-step a');

    // pick apple or samsung
    expect(type.count()).toBe(2);

    expect(type.get(0).element(by.css('h4')).getText()).toBe('Apple');
    expect(type.get(1).element(by.css('h4')).getText()).toBe('Samsung');

  });

  /**
   * Take Screen shot
   */
  xit('take a screen shot', function () {
    browser.takeScreenshot().then(function (png) {
      writeScreenShot(png, 'exception.png');
    });
  });
});
