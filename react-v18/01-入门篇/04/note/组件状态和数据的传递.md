# 组件状态和数据的传递

## 组件状态

早期的类组件被称为有状态的组件，因为类组件能够维护组件的数据。

```jsx
import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      num: 1
    };
  }

  // 或者
  // state = {
  //   num: 10
  // };

  onClickBtn() {
    // 不能直接修改
    // this.state.num++

    // 而是使用 setState
    this.setState({
      num: this.state.num + 1
    });
  }

  render() {
    return (
      <>
        <p>{this.state.num}</p>
        <button onClick={this.onClickBtn.bind(this)}>Add Num</button>
      </>
    );
  }
}
export default App;
```

数据更新「可能」是异步的：

```js
// ....
onClickBtn() {
  // 异步的操作
  this.setState({
    num: this.state.num + 1
  });
  this.setState({
    num: this.state.num + 1
  });
  this.setState({
    num: this.state.num + 1
  });
}
```

虽然调用了三次，但是每一次的 setState 都会被合并，只执行一次。

如果改变状态的代码处于某个 HTML 元素的事件中，那么状态的改变是异步，否则就是同步。

![alt text](image.png)

页面更新为 2，打印的结果还是 1。

```jsx
constructor() {
  super();

  this.state = {
    num: 1
  };

  // 同步操作
  setInterval(() => {
    this.setState({
      num: this.state.num + 1
    });
    console.log(this.state.num);
  }, 1000);
}
```

如果想要拿到 setState 之后的数据，可以提前使用一个变量来存储，或者使用回调函数：

```jsx
onClickBtn() {
  this.setState(
    {
      num: this.state.num + 1
    },
    () => {
      console.log(this.state.num);
    }
  );
}
```

最佳实践：

```jsx
onClickBtn() {
  // 回调地狱
  // this.setState(
  //   {
  //     num: this.state.num + 1
  //   },
  //   () => {
  //     this.setState(
  //       {
  //         num: this.state.num + 1
  //       },
  //       () => {
  //         this.setState({
  //           num: this.state.num + 1
  //         });
  //       }
  //     );
  //   }
  // );

  // 更加优雅的方式：
  this.setState((cur) => ({
    num: cur.num + 1
  }));
  this.setState((cur) => ({
    // 这里的 cur.name 就是 2
    num: cur.num + 1
  }));
}
```

## props

父组件：

```jsx
render() {
  return (
    <>
      <Hello stuInfo={this.state} />
      <World stuInfo={this.state} str='world' num={123} bool={true} />
      <Button>
        <span>按钮内容</span>
      </Button>
    </>
  );
}
```

类组件：

```jsx
class Hello extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <ul>
        <li>类组件</li>
        <li>姓名: {this.props.stuInfo.name}</li>
        <li>年龄: {this.props.stuInfo.age}</li>
      </ul>
    );
  }
}
```

函数式组件：

```jsx
function World(props) {
  return (
    <ul>
      <li>函数组件</li>
      <li>姓名: {props.stuInfo.name}</li>
      <li>年龄: {props.stuInfo.age}</li>
    </ul>
  );
}
```

获取插槽的内容：

```jsx
function World(props) {
  return <button>{props.children}</button>;
}
```

## props 数据验证

props 默认值：

```jsx
// 函数式组件
function World(props) {
  return (
    // ...
  );
}

World.defaultProps = {
  stuInfo: {
    name: 'default vaule',
    age: 0
  }
};
```

```jsx
// 类组件
class Hello extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      // ...
    );
  }
}

Hello.defaultProps = {
  stuInfo: {
    name: 'default vaule',
    age: 0
  }
};
```

props 类型验证：

从 React15.5 开始，使用 props-types 库来验证 props 的类型。

https://www.npmjs.com/package/prop-types

```jsx
Hello.propTypes = {
  stuInfo: PropTypes.object
};

World.propTypes = {
  stuInfo: PropTypes.object
};
```

## 状态提升

