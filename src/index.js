import a from './a.js';
console.log('hello', a);
require.ensure('./b', function () {
    let moduleB = require('./b');
    console.log('hello', moduleB);
});

const ArrowFunction = () => 'this is ArrowFunction';
const mixObj = {
    ...{val1: 1}
};
const promise = Promise.resolve().finally();


