// Dep 用于管理所有依赖（watcher）
class Dep {
    constructor() {
        this.subscribers = []; // 存储所有依赖的 watcher
    }

    // 添加 watcher
    addSub(watcher) {
        this.subscribers.push(watcher);
    }

    // 通知所有 watcher 更新视图
    notify() {
        this.subscribers.forEach((watcher) => watcher.update());
    }
}

// Watcher 用于观察数据的变化
class Watcher {
    constructor(vm, exp, cb) {
        this.vm = vm;
        this.exp = exp;
        this.cb = cb;
        this.value = this.get(); // 初始化时获取属性值并触发 getter
    }

    // 获取属性值并触发 getter，从而触发 Dep 的依赖收集
    get() {
        Dep.target = this; // 将当前 watcher 设置为 Dep.target
        const value = this.vm[this.exp]; // 触发 getter，收集依赖
        Dep.target = null; // 清除 target
        return value;
    }

    // 当数据变化时调用此方法更新视图
    update() {
        const value = this.vm[this.exp];
        this.cb(value);
    }
}

// Vue 实现响应式的核心功能
class Vue {
    constructor(options) {
        debugger
        this.data = options.data;
        this.$el = options.el;
        this.init();
    }

    // 初始化时将数据转为响应式，并处理模板渲染
    init() {
        this.observe(this.data);
        this.compile(this.$el);
    }

    // 数据响应式化
    observe(obj) {
        Object.keys(obj).forEach((key) => {
            let value = obj[key];
            const dep = new Dep(); // 每个属性对应一个 dep

            // 使用 defineProperty 将数据变为响应式
            Object.defineProperty(obj, key, {
                get() {
                    debugger
                    if (Dep.target) {
                        dep.addSub(Dep.target); // 添加依赖（watcher）
                    }
                    return value;
                },
                set(newValue) {
                    debugger
                    if (newValue !== value) {
                        value = newValue;
                        dep.notify(); // 通知所有 watcher 更新
                    }
                }
            });
        });
    }

    // 模板解析并渲染
    compile(el) {
        const node = document.querySelector(el);
        const content = node.innerText.trim();

        // 处理模板中的数据绑定
        if (content) {
            const key = content.slice(2, -2).trim(); // 获取模板中的变量
            new Watcher(this, key, (newValue) => {
                node.innerText = newValue; // 当数据变化时更新视图
            });
            node.innerText = this.data[key]; // 初始化时渲染
        }
    }
}

// 使用例子
const app = new Vue({
    el: "#app",
    data: {
        message: "Hello, Vue!"
    }
});

// 测试响应式
setTimeout(() => {
    app.data.message = "Hello, Vue 2!";
}, 2000);
