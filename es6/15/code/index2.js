/* 
    只为了拓展思维
*/

class MySet {
  constructor(iterator = []) {
    // 验证是否是可迭代的对象
    if (typeof iterator[Symbol.iterator] !== 'function') {
      throw new Error(`${iterator}不是一个可迭代的对象`);
    }

    this._datas = [];

    for (const element of iterator) {
      this.add(element);
    }
  }

  get size(){
    return this._datas.length;
  }

  add(value) {
    if (!this.has(value)) {
      this._datas.push(value);
    }
  }

  delete(value) {
    for (let index = 0; index < this._datas.length; index++) {
      const element = this._datas[index];
      if (this.isEqual(value, element)) {
        this._datas.splice(index, 1);
        return true;
      }
    }
    return false;
  }

  has(value) {
    for (const element of this._datas) {
      if (this.isEqual(value, element)) {
        return true;
      }
    }
    return false;
  }

  clear() {
    this._datas = [];
  }

  isEqual(data1, data2) {
    if (data1 === 0 && data2 === 0) {
      return true;
    }
    return Object.is(data1, data2);
  }

  *[Symbol.iterator]() {
    for (const element of this._datas) {
      yield element;
    }
  }

  forEach(callback) {
    for (const element of this._datas) {
      callback(element, element, this);
    }
  }
}

const s = new MySet([1, 2, 3, 1, 2, 3]);

console.log(s);

s.add("a");
s.add("b");

console.log(s.delete(3));

for (const element of s) {
  console.log(element);
}

s.forEach((el, index, set) => console.log(el, index, set));
