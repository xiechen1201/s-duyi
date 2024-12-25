/* 
  在 JS 中可以使用 instanceof 来判断一个对象是否是某个构造函数的实例
*/

/* class Animal {
  eat() {
    console.log('Animal eating');
  }
}

class Dog extends Animal {
  eat() {
    console.log('Dog eating');
  }
}

class Cat extends Animal {
  eat() {
    console.log('Cat eating');
  }

  meow() {
    console.log('Cat meowing');
  }
} */

/* 
  Animal 类型的问题
  使用 if + instanceof 来进行类型缩小
*/
/* function feedAnimal(animal: Animal) {
  if (animal instanceof Cat) {
    animal.meow();
  } else {
    animal.eat();
  }
} */

// ==================================================================

/* const obj = {
  a: 123
};

if ('a' in obj) {
  console.log(obj.a);
} */

// 在Typescript中，in检查对象是否具有特定的属性，并使用该属性区分不同的类型。
// 它通常返回一个布尔值，表示该属性是否存在于该对象中。

type Circle = {
  kind: 'circle';
  radius: number;
};

type Rectangle = {
  kind: 'rectangle';
  width: number;
  height: number;
};

type Triangle = {
  kind: 'triangle';
  base: number;
  height: number;
};

type Shape = Circle | Rectangle | Triangle;

// in + if 进行类型缩小
function printArea(shape: Shape) {
  // 如何判断当前是什么形状
  if ('radius' in shape) {
    // 🤔 (parameter) shape: Circle
    console.log(Math.PI * shape.radius ** 2);
  } else if ('width' in shape) {
    // 🤔 (parameter) shape: Rectangle
    console.log(shape.width * shape.height);
  } else {
    // 🤔 (parameter) shape: Triangle
    console.log((shape.base * shape.height) / 2);
  }
}
