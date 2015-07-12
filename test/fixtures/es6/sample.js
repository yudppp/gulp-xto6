class SomeClass {
  constructor() {
    console.log('This is the constructor.');
  }
  someOuterMethod() {
    return someFunction.apply(this, arguments);
  }
  someInnerMethod(birthYear) {
    const result = `Your Age is : ${2015 - birthYear} and you were born in ${ birthYear }`;
    return result;
  }
  get someAccessor() {
    return this._some;
  }
  set someAccessor(value) {
    this._some = value;
  }
}
function someFunction(a, b) {
  return a + b;
}