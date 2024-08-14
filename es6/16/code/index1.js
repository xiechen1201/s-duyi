/* 
    ## 手写 Map
*/

/* class MyMap {
  constructor(iterator = []) {
    if (typeof iterator[Symbol.iterator] !== 'function') {
      throw new Error(`${iterator}不是一个可迭代的对象`);
    }

    this._datas = [];

    for (const element of iterator) {
      // element 也必须是一个可迭代对象
      if (typeof element[Symbol.iterator] !== 'function') {
        throw new Error(`${element}不是一个可迭代的对象`);
      }

      const iterator = element[Symbol.iterator]();
      const key = iterator.next().value;
      const value = iterator.next().value;

      this.set(key, value);
    }
  }

  get(key) {
    const obj = this._getObj(key);
    return obj ? obj.value : undefined;
  }

  set(key, value) {
    const obj = this._getObj(key);

    if (obj) {
      obj.value = value;
    } else {
      this._datas.push({ key, value });
    }
  }

  has(key) {
    const item = this._getObj(key);
    return item !== undefined;
  }

  isEqual(data1, data2) {
    if (data1 === 0 && data2 === 0) {
      return true;
    }
    return Object.is(data1, data2);
  }

  // 根据 key 从内部数组找到对应的数组项
  _getObj(key) {
    for (const element of this._datas) {
      if (this.isEqual(element.key, key)) {
        return element;
      }
    }
    return undefined;
  }

  delete(key) {
    for (let index = 0; index < this._datas.length; index++) {
      const element = this._datas[index];

      if (this.isEqual(element.key, key)) {
        this._datas.splice(index, 1);
        return true;
      }
    }
    return false;
  }

  clear() {
    this._datas = [];
  }

  *[Symbol.iterator]() {
    for (const element of this._datas) {
      yield [element.key, element.value];
    }
  }

  forEach(callback) {
    for (const element of this._datas) {
      callback(element.value, element.key, this);
    }
  }
}

const m = new MyMap([['name', 'zhangsan']]);
m.set('age', 18);
console.log(m);

for (const element of m) {
  console.log(element);
}

m.forEach((value, key, map) => {
  console.log(value, key, map);
}); */
