import Dep from "./dep.js";

// 观察者
export default class Watcher {
    constructor(vm, el, vmKey) {
        // 做一些信息的初始化
        this.vm = vm;
        this.el = el;
        this.vmKey = vmKey;
        Dep.target = this;
        this.update();
        Dep.target = null;
    }

    update() {
        if (this.el.nodeType === Node.TEXT_NODE) {
            this.el.nodeValue = this.vm[this.vmKey];
        } else if (this.el.nodeType === Node.ELEMENT_NODE) {
            this.el.innerHTML = this.vm[this.vmKey];
        }
    }
}
