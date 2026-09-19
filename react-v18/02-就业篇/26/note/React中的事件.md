# React中的事件

如果说 FiberTree 是用来描述 UI 的，那么事件系统就是用来描述 FiberTree 和 UI 之间的交互的。

对于 ReactDOM 宿主环境，由两部分组成：

- 合成事件对象

SyntheticEvent （合成事件对象）是对浏览器原生事件对象的一层封装，兼容了主流浏览器，同时拥有和浏览器原生事件相同的 API。

合成事件对象 存在的目的就是为了消除浏览器之间的差异。

- 模式实现事件传播机制

利用事件委托的原理，react 会基于 FiberTree 来实现事件的捕获、目标和冒泡的过程（类似于原生 DOM 的事件传播过程），在自己实现的这一套机制中，还加入了许多新的特性：

- 不同的事件对应不用的优先级

- 定制事件名

  - 例如 react 中统一使用 onXXX 的驼峰写法

- 定制事件行为

  - 例如 onChange 的默认行为和原生 oninput 是相同的

React 事件系统需要考虑很多边界情况，代码量非常大，这里通过书写一个 mini 的事件系统来学习 React 事件系统的原理。

假设现在有这么一段 JSX 代码：

（代码）

## 实现 SyntheticEvent 合成事件对象

React 中的 SyntheticEvent 会包含很多的属性和方法，这里我们是实现阻止冒泡的方法。

```
/**
 * 合成事件对象类
 */
class SyntheticEvent {
  constructor(event) {
    // 保存原生的事件对象
    this.nativeEvent = event
  }

  // 提供一个阻止冒泡的方法
  stopPropagation() {
    // 调用 stopPropagation() 时，将 _stopPropagation 设置为 true
    this._stopPropagation = true

    if(this.nativeEvent.stopPropagation){
      this.nativeEvent.stopPropagation()
    }
  }
}

```

## 实现事件的传播机制

对于可以冒泡的事件，整个传播机制实现如下：

