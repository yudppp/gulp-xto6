[![Build Status](https://img.shields.io/travis/yudppp/gulp-xto6/master.svg?style=flat-square)](http://travis-ci.org/yudppp/gulp-xto6)
[![License](http://img.shields.io/:license-mit-brightgreen.svg?style=flat-square)](http://yudppp.mit-license.org)
[![NPM version](https://img.shields.io/npm/v/gulp-xto6.svg?style=flat-square)](https://www.npmjs.com/package/gulp-xto6)
[![Dependency Status](https://david-dm.org/yudppp/gulp-xto6.svg?style=flat-square)](https://david-dm.org/yudppp/gulp-xto6)
[![devDependency Status](https://david-dm.org/yudppp/gulp-xto6/dev-status.svg?style=flat-square)](https://david-dm.org/yudppp/gulp-xto6#info=devDependencies)


# gulp-xto6

gulp plugin for [xto6](https://github.com/mohebifar/xto6).
Turn your ES5 code into readable ES6.

Install
---

```bash
$ npm install gulp-xto6
```

Quick Start
---

```js
var gulp = require('gulp');
var xto6 = require('gulp-xto6');

gulp.task('default', function () {
  return gulp.src('path/to/fixtures/es5/*.js')
    .pipe(xto6())
    .pipe(gulp.dest('path/to/fixtures/es6/'));
});
```
