/* type TypeGender = "男" | "女";

let gender: TypeGender;
gender = "男";
function searchUsers(g: TypeGender) {} */

// ====

/* // type TypeGender = "男" | "女";
type TypeGender = "帅哥" | "美女";

let gender: TypeGender;
gender = "男";
function searchUsers(g: TypeGender) {} */

// ====

/* enum EnumGender {
  male = "男",
  female = "女"
}

let gender: EnumGender;
// 正常
gender = EnumGender.female;
// 不允许赋值为真实的值
gender = "男"; // ❌不能将类型“"男"”分配给类型“EnumGender”

console.log(Object.entries(EnumGender)) */

// =======

/* enum EnumLevel {
  level1 = 1,
  level2 = 2,
  level3 = 3
}

let l: EnumLevel = EnumLevel.level1; */

// =====

/* enum EnumLevel {
  level1 = 1,
  level2,
  level3
}

let l: EnumLevel = EnumLevel.level2;
console.log(l); // 2 */

// ====

/* enum EnumLevel {
  level1 = 1,
  level2,
  level3
}

let l: EnumLevel = 2; */

// ====

enum Permission {
  Read = 1, // 2^0
  Write = 2, // 2^1
  Create = 4, // 2^2
  Delete = 8 // 2^3
}

let p = Permission.Create | Permission.Read;
console.log(p);
