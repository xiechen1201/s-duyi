/* 
    访问器属性装饰器
    方法装饰器还能作用于属性访问器上面
    参数1：不再区分是构造器还是实例，一直都是原型对象
    参数2：属性名
    参数3：属性描述符

    访问器属性的装饰器的描述符对象没有 value 和 write 属性，而是 get 和 set 属性
*/

/* function d() {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        console.log(target, key, descriptor);
        console.log("方法装饰器");

        const temp = descriptor.set;
        descriptor.set = function (value: string) {
            console.log("set", value);
            temp!.call(this, value);
        }
    };
}

class User {
    public id: number = 1;
    public name: string = "John";
    private _password: string = "123456";

    @d()
    set password(p: string) {
        console.log('this._password')
        this._password = p;
    }

    get password(): string {
        return this._password;
    }
}

const u = new User();
console.log(u.password);
u.password = "654321" */

// ======================================

/* 
    descriptor 还有另外一种声明方式
    可以传递一个泛型，其他的就没有太多的区别了
*/

/* function d() {
    return function <T>(
        target: any,
        key: string,
        descriptor: TypedPropertyDescriptor<T>
    ) {
        const temp = descriptor.set;
        descriptor.set = function (value: T) {
            console.log("set", value);
            temp!.call(this, value);
        };
    };
}

class User {
    public id: number = 1;
    public name: string = "John";
    private _password: string = "123456";

    @d()
    set password(p: string) {
        this._password = p;
    }

    get password(): string {
        return this._password;
    }
}

const user = new User();
user.password = "654321"; */

// =======================================

/* 
    方法参数装饰器
    参数1: 如果是原型方法的属性，则为原型对象；如果是静态方法的属性，则为构造函数
    参数2: 方法名
    参数3: 参数索引
*/

/* function validate(target: any, key: string, index: number) {
    console.log(target, key, index);
}

class User {
    public id: number = 1;
    public name: string = "John";
    public password: string = "123456";

    login(
        @validate
        username: string,
        @validate
        password: string
    ) {
        console.log(username, password);
    }
} */

/* 
    工厂模式
*/

function validate(key: string) {
    console.log(key);

    return function (target: any, methodName: string, index: number) {
        // console.log(target, methodName, index);
        !target.__params && (target.__params = {});
        target.__params[index] = key;
    };
}

function test(target: any, methodName: string, index: number) {
    console.log(target, methodName, index);
}

class User {
    public id: number = 1;
    public name: string = "John";
    public password: string = "123456";

    login(
        @validate("username")
        username: string,
        @validate("password")
        password: string
    ) {
        console.log(username, password);
    }

    static point(@test time: string) {
        console.log(time);
    }
}

console.log(User.prototype);
