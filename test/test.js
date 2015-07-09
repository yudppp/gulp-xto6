'use strict';

var assert = require('power-assert');
var gutil  = require('gulp-util');
var xto6   = require('../')

describe('gulp-xto6', function() {

  it('should work in buffer mode', function(done) {

    var es5File = new gutil.File({
      contents: new Buffer('function x(a) { a = a || 2; return \'answer: \'+a; }')
    });

    var stream = xto6();
    stream.write(es5File);
    stream.on('data', function(file) {
      assert(file.isBuffer());
      // use default-arguments and template string
      assert.equal(file.contents.toString('utf8'), 'function x(a = 2) {\n    return `answer: ${ a }`;\n}');
      done();
    });
    stream.end();
  });
});
