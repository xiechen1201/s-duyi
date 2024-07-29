let count = 0;

console.log("这个模块被导入了！")

function add() {
  return count++;
}

exports.add = add;
