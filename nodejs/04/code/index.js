import * as obj from './a.js';
console.log(obj);
// [Module: null prototype] { a: 1, default: 5 }

import('./a.js').then((res) => {
    console.log(res);
});
