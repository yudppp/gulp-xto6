[![License](http://img.shields.io/:license-mit-brightgreen.svg?style=flat)](http://mohebifar.mit-license.org)

# gulp-xto6

gulp plugin for [xto6](https://github.com/mohebifar/xto6).
Turn your ES5 code into readable ES6.

Quick Start
---

```js
var xto6 = require('gulp-xto6')

gulp.src('/path/to/es5/*.js')
  .pipe(xto6())
  .pipe.dest('paht/to/es6/');
```
