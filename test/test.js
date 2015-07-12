'use strict';

var fs     = require('fs');
var path   = require('path');
var assert = require('power-assert');
var gutil  = require('gulp-util');
var xto6   = require('../')

describe('gulp-xto6', function() {

  it('should work in buffer mode', function(done) {

    var before = path.join(__dirname, '/fixtures/es5/sample.js');
    var after  = path.join(__dirname, '/fixtures/es6/sample.js');

    var stream = xto6({
      formatter: true
    });

    stream.write(new gutil.File({
      contents: fs.readFileSync(before)
    }));

    stream.on('data', function(file) {
      assert(file.isBuffer());
      assert.equal(file.contents.toString(), fs.readFileSync(after).toString());
      done();
    });

    stream.end();
  });
});
