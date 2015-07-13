var gutil       = require('gulp-util');
var through     = require('through2');
var Transformer = require('xto6/lib/transformer');

module.exports = function(options) {

  options = options || {};

  return through.obj(function(file, encoding, callback) {

    if (file.isNull()) {
      return callback(null, file);
    }

    if (file.isStream()) {
      return callback(new gutil.PluginError('gulp-xto6', 'Streaming not supported'));
    }

    try {
      var transformer = new Transformer(options);
      transformer.read(file.contents.toString());
      transformer.applyTransformations();
      file.contents = new Buffer(transformer.out());
      this.push(file);
    } catch(error) {
      this.emit('error', new gutil.PluginError('gulp-xto6', error, {fileName: file.path, showProperties: false}));
    }

    callback();
  });
};;
