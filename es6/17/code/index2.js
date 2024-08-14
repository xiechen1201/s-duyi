/* 
    ## Proxy
*/

/* 
    有什么事不要和我谈，要和我的代理去谈。有什么事情，代理会找我。
    代理就在目标对象上套了一层，至于代理和目标对象如何处理，外面的人别管。

    代理：提供了修改底层实现的方式。

    创建代理的方式：
    // target 是目标对象，handler 是普通对象，可以重写底层实现。
    // 返回一个代理对象。
    new Proxy(target, handler);
*/

/* let obj = {};
let proxy = new Proxy(obj, {
    set(target, key, value) {
        // console.log(`set ${key} = ${value}`);
        // target[key] = value;

        // 或者使用，方便阅读，set 和 Reflect.set 的参数一致。
        Reflect.set(target, key, value);
    }
})
proxy.a = 1;
console.log(proxy); */

/* 
    Proxy 比 Object.defineProperty 更强大。
    Proxy 可以拦截更多的操作，比如 delete、in、has 等。
*/

/* let obj = {
    name: '张三',
}
let proxy = new Proxy(obj, {
    get(target, key) {
        if( Reflect.has(target, key) ){
            return Reflect.get(target, key);
        }else{
            return '没有这个属性';
        }
    }
})
console.log(proxy.name);
console.log(proxy.age); */