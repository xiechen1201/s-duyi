/* 
    完成 Component 类代码的书写，要求：
    1、修改数据时能够触发 render 方法的执行
    2、同步变更时需要合并，仅触发一次 render 方法

    class Component {
        data = {
            name: ""
        };
        constructor() {}
        render() {
            console.log(`render - name: ${this.data.name}`);
        }
    }

    const com = new Component();
    // 要求以下代码需要触发 render 方法，并且同步变更需要合并
    com.data.name = "张三";
    com.data.name = "李四";
    com.data.name = "王五";

    setTimeout(() => {
        com.data.name = "渡一";
    }, 0);
*/

class Component {
    pending = false;
    _data = {
        name: ""
    };

    constructor() {
        let _this = this;
        this.data = new Proxy(this._data, {
            set(target, key, value) {
                _this._data[key] = value;

                if (!_this.pending) {
                    _this.pending = true;
                    Promise.resolve().then(() => {
                        _this.render();
                        _this.pending = false;
                    });
                }
            }
        });
    }

    render() {
        console.log(`render - name: ${this.data.name}`);
    }
}

const com = new Component();

// 要求以下代码需要触发 render 方法，并且同步变更需要合并
com.data.name = "张三";
com.data.name = "李四";
com.data.name = "王五";

setTimeout(() => {
    com.data.name = "渡一";
}, 0);
