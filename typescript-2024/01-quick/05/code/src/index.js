"use strict";
/* const str = 'hello';
type User = {
  id: number;
  name: string;
  show?: (id: number, name: string) => void;
};

const u: User = {
  id: 1,
  name: '张三',
  show(id, name) {
    console.log(id, name);
  }
};

const users: Array<User> = [
  { id: 1, name: 'jack' },
  { id: 2, name: 'rose' }
];

function addUser(u: User) {
  // todos...
  return true;
}

addUser(u); */
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
axios_1.default.get('https://www.baidu.com');
// import lodash from "lodash"; // ❌无法找到模块“lodash”的声明文件。
