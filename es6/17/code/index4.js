/* class User {
  constructor(firstName, lastName, age) {
    // 比较麻烦
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
} */

// TODO:==========================

/* class User {}

function constructorProxy(classFun, ...propNames) {
  return new Proxy(classFun, {
    construct(target, argumentList) {
      console.log('构造函数被调用了');

      const obj = Reflect.construct(target, argumentList);
      propNames.forEach((name, i) => {
        obj[name] = argumentList[i];
      });

      return obj;
    }
  });
}

const UserProxy = constructorProxy(User, 'firstName', 'lastName', 'age');
const obj = new UserProxy('张', '三', 20);
console.log(obj); */
