const ejs  = require('ejs');

const str = `生成的数字是<%= num %>`;

const result = ejs.render(str, {num: 100})

console.log(result)