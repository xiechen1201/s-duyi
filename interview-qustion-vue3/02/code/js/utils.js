import Dep from "./dep.js";
import Watcher from "./watcher.js";

export function observer(vm, obj) {
    // 创建一个发布者实例
    const dep = new Dep();

    Object.keys(obj).forEach((key) => {
        let internalValue = obj[key]; // 保存内部值

        Object.defineProperty(vm, key, {
            get() {
                // 获取数据的时候需要进行依赖收集
                if (Dep.target) {
                    dep.addSub(Dep.target);
                }

                return internalValue;
            },
            set(newVal) {
                // 设置数据的时候需要进行通知
                if (newVal === internalValue) {
                    return;
                }
                internalValue = newVal;
                dep.notify();
            }
        });
    });
}

export function compile(vm) {
    // 获取Vue实例的根元素
    const el = document.querySelector(vm.$el);
    // 如果根元素不存在，抛出错误
    if (!el) {
        throw new Error(`Element with selector "${vm.$el}" not found.`);
    }
    // 创建一个文档片段，用于存储解析后的节点
    const documentFragment = document.createDocumentFragment();
    // 定义一个正则表达式，用于匹配双花括号语法
    const reg = /\{\{(.*)\}\}/;
    // 遍历根元素的子节点
    while (el.firstChild) {
        // 获取第一个子节点
        const child = el.firstChild;
        // 如果子节点是元素节点
        if (child.nodeType === Node.ELEMENT_NODE) {
            // 获取元素节点
            const element = child;
            // 如果元素节点的内容匹配双花括号语法
            if (reg.test(element.innerHTML || "")) {
                // 获取双花括号内的表达式，并去除空格
                const vmKey = RegExp.$1.trim();
                // 创建一个Watcher实例，用于监听表达式的变化
                new Watcher(vm, child, vmKey);
            } else {
                // 遍历元素节点的属性
                Array.from(element.attributes).forEach((attr) => {
                    // 如果属性名是v-model
                    if (attr.name === "v-model") {
                        // 获取属性值，即Vue实例中的属性名
                        const vmKey = attr.value;
                        // 为元素节点添加input事件监听器
                        element.addEventListener("input", (event) => {
                            // 获取事件目标，即输入框
                            const target = event.target;
                            // 将输入框的值赋给Vue实例中的属性
                            vm[vmKey] = target.value;
                        });
                    }
                });
            }
        } else if (
            // 如果子节点是文本节点，并且内容匹配双花括号语法
            child.nodeType === Node.TEXT_NODE &&
            reg.test(child.nodeValue || "")
        ) {
            // 获取双花括号内的表达式，并去除空格
            const vmKey = RegExp.$1.trim();
            // 创建一个Watcher实例，用于监听表达式的变化
            new Watcher(vm, child, vmKey);
        }
        // 将子节点添加到文档片段中
        documentFragment.appendChild(child);
    }
    // 将文档片段添加到根元素中
    el.appendChild(documentFragment);
}
