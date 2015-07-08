var gulp = require('gulp');
var xto6 = require('../')

gulp.task('default', function () {
  return gulp.src('./fixtures/es5/*.js')
    .pipe(xto6())
    .pipe(gulp.dest('./fixtures/es6/'));
});
