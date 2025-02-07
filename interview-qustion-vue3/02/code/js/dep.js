// 发布者
export default class Dep {
    constructor() {
        // 登记（收集）所有的 watcher
        this.subs = [];
    }

    // 添加
    addSub(sub) {
        this.subs.push(sub);
    }

    // 通知 watcher 更新
    notify() {
        // 具体如何更新，发布者不关心
        this.subs.forEach((sub) => sub.update());
    }
}

// 记录当前的 watcher
Dep.target = null;