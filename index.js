var gutil = require('gulp-util');
var through = require('through2');
var classTransformation = require('./node_modules/xto6/lib/transformation/classes');
var Transformer = require('./node_modules/xto6/lib/transformer');
var transformer = new Transformer();

var transform = function(file, encoding, callback) {
  if (file.isNull()) {
    return callback(null, file);
  }
  if (file.isStream()) {
    return callback(new gutil.PluginError('gulp-xto6', 'Stream not supported'));
  }

  transformer.read(file.contents.toString());
  transformer.applyTransformation(classTransformation);
  file.contents = new Buffer(transformer.out());

  return callback(null, file);
};

var gulpXto6 = function() {
  return through.obj(transform);
};

module.exports = gulpXto6;
