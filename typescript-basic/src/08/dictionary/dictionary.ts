/* 
    开发一个字典类，字典中会保存键值对的数据

    键值对数据的特点：
        key 可以是任意的类型，但是不允许重复
        value 可以是任意的类型
        每个键对应一个值
        所有的键类型相同，所有的值类型相同

    字典类中对键值对数据的操作：
        按照键，删除对应的内容
        循环每一个键值对
        得到当前键值对的数量
        判断某个键是否存在
        重新设置某个键对应的值，如果不存在则添加
*/

export type TCallcack<T, U> = (key: T, val: U) => void;

export class Dictionary<K, V> {
  private keys: K[] = [];
  private vals: V[] = [];

  constructor() {}

  get size() {
    return this.keys.length;
  }

  set(key: K, val: V) {
    let index = this.keys.indexOf(key);

    if (index < 0) {
      this.keys.push(key);
      this.vals.push(val);
    } else {
      this.keys[index] = key;
      this.vals[index] = val;
    }
  }

  has(key: K): boolean {
    return this.keys.includes(key);
  }

  del(key: K) {
    let index = this.keys.indexOf(key);

    if (index < 0) {
      return;
    }

    this.keys.splice(index, 1);
    this.vals.splice(index, 1);
  }

  forEach(callback: TCallcack<K, V>) {
    this.keys.forEach((item, index) => {
      const k = this.keys[index];
      const v = this.vals[index];
      callback(k, v);
    });
  }
}

let obj = new Dictionary<string, number>();
console.log(obj);

obj.set("a", 1);
console.log(obj);

obj.set("a", 11);
obj.set("b", 2);
console.log(obj);

console.log(obj.has("a"));

obj.forEach((item, value) => {
  console.log(item, value);
});

obj.del("b");
console.log(obj);

obj.set("c", 3);
console.log(obj.size);

// obj.size = 200;
// console.log(obj.size);