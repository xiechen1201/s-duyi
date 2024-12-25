/* 
    类也可以支持泛型，和函数一样
*/

/* class SimpleSet<T> {
    private elements: Map<T, boolean>;
    constructor() {
        this.elements = new Map();
    }

    add(element: T): this {
        this.elements.set(element, true);
        return this;
    }

    has(element: T): boolean {
        return this.elements.has(element);
    }

    delete(element: T): boolean {
        return this.elements.delete(element);
    }

    values(): T[] {
        return Array.from(this.elements.keys());
    }
}

class MutableSet<T> extends SimpleSet<T> {
    add(element: T): this {
        super.add(element);
        return this;
    }
}

let set = new MutableSet<number>();
set.add(1).add(2).add(3);

let set1 = new MutableSet<string>();
set1.add("a").add("b").add("c"); */

/* 


*/

/* class SimpleSet<T> {
    private elements: Map<T, boolean>;
    constructor(initialElements: T[] = []) {
        this.elements = new Map<T, boolean>();
        initialElements.forEach((element) => this.add(element));
    }

    add(element: T): this {
        this.elements.set(element, true);
        return this;
    }

    has(element: T): boolean {
        return this.elements.has(element);
    }

    delete(element: T): boolean {
        return this.elements.delete(element);
    }

    values(): T[] {
        return Array.from(this.elements.keys());
    }
}

class MutableSet<T> extends SimpleSet<T> {
    add(element: T): this {
        super.add(element);
        return this;
    }
}

let set = new MutableSet<number>();
set.add(1).add(2).add(3);
set.delete(2);

let set1 = new MutableSet<string>();
set1.add("a").add("b").add("c"); */

/* 
    需要注意的点：
    1、静态方法不能使用泛型，因为不需要使用 new 示例化，无法得到 T 的类型
    需要单独指定一个泛型
*/

class SimpleSet<T> {
    private elements: Map<T, boolean>;
    constructor(initialElements: T[] = []) {
        this.elements = new Map<T, boolean>();
        initialElements.forEach((element) => this.add(element));
    }

    add(element: T): this {
        this.elements.set(element, true);
        return this;
    }

    has(element: T): boolean {
        return this.elements.has(element);
    }

    delete(element: T): boolean {
        return this.elements.delete(element);
    }

    values(): T[] {
        return Array.from(this.elements.keys());
    }

    // static of(...elements: T[]) {}
    static of<E>(...elements: E[]) {
        const set = new SimpleSet<E>();
        elements.forEach((element) => set.add(element));
        return set;
    }
}

const ms = SimpleSet.of<number>(1, 2, 3);
