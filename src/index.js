// const add = {
//     extra: 2
// };
//
// console.log('init ', {
//     ...add,
//     name: 1
// });

import a from './a.js';
// import b from './b.js';

console.log('hello', a);
// console.log('hello', b);
require.ensure('./b', function () {
    let s = require('./b');

})

