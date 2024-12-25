/* 
    限制 this 的类型，不显示 foo 的提示
    限制 this 能访问哪些属性
*/

/* type Foo = {
    a: number;
    b: number;
    foo(): number;
} & ThisType<{
    a: number;
    b: number;
}>;

const foo: Foo = {
    a: 1,
    b: 2,
    foo() {
        return this.a + this.b;
    }
}; */

/* type Foo = {
    bar: {
        a: number;
        b: number;
    };
    foo(): number;
} & ThisType<{
    a: number;
    b: number;
}>;

const foo: Foo = {
    bar: {
        a: 1,
        b: 2
    },
    foo() {
        // 类型上不报错了，但是允许的时候会报错
        return this.a + this.b;
    }
}; */

/* 
    视频代码：getPoiniter 无法访问 methods 里面的属性，因为没有指定 this
*/

/* 
    示例：实现一个简单的 Vue 类型
*/

/* declare function SimpleVue<D, C, M>(options: {
    data: (this: void) => D;
    computed: C & ThisType<D>;
    methods: M & ThisType<D & getComputed<C> & M>;
}): any;

type getComputed<T> = {
    [key in keyof T]: T[key] extends () => infer R ? R : never;
}; */

/* 
    示例
*/

type Chainable<T = {}> = {
    option<K extends string, V>(
        key: Exclude<K, keyof T>,
        value: V
    ): Chainable<Omit<T, K> & { [P in K]: V }>;
    get(): T;
};

declare const a: Chainable;

const result = a.option("foo", 123).option("name", "typeScript").get();
