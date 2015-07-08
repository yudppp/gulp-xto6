var SomeClass = function () {
  console.log('This is the constructor.');
};

SomeClass.prototype.someOuterMethod = someFunction;

SomeClass.prototype.someInnerMethod = function (birthYear) {
  var result = 'Your Age is : ' + (2015 - birthYear) + ' and you were born in ' + birthYear;
  return result;
};

Object.defineProperty(SomeClass.prototype, 'someAccessor', {
  get: function () {
    return this._some;
  },
  set: function (value) {
    this._some = value;
  }
});

function someFunction(a, b) {
  return a + b;
}
