/* 
import { chunk } from "lodash-es";

const btn = document.getElementById("btn");
btn.onclick = function () {
  const result = chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
  console.log(result);
}; */

// const btn = document.getElementById("btn");
// btn.onclick = async function () {
//   const _ = await import(/* webpackChunkName: "lodash-es" */"lodash-es");
//   const result = _.chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
//   console.log(result);
// };