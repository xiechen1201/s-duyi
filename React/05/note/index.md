# 表单

## 受控组件

受控组件：将表单中的控件和视图模型（state）进行绑定，之后进行的操作都是针对状态进行操作的。

- 一个基本的受控组件案例：

```jsx
class App extends Component {
  state = {
    value: ''
  };

  onChangeInput = (e) => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    return (
      <>
        <span>{this.state.value}</span>
        <input type='text' value={this.state.value} onChange={this.onChangeInput} />
      </>
    );
  }
}

export default App;
```

- 对用户输入的内容进行控制：

```jsx
class App extends Component {
  state = {
    value1: '',
    value2: ''
  };

  onChangeInput = (e) => {
    switch (e.target.name) {
      case 'one':
        this.setState({
          value1: e.target.value.toUpperCase()
        });
        break;
      case 'two':
        this.setState({
          value2: parseInt(e.target.value)
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <>
        <input
          type='text'
          name='one'
          value={this.state.value1}
          onChange={this.onChangeInput}
          placeholder='自动转化为大写'
        />
        <input
          type='text'
          name='two'
          value={this.state.value2}
          onChange={this.onChangeInput}
          placeholder='只能输入数字'
        />
      </>
    );
  }
}

export default App;
```

- textarea

```jsx
class App extends Component {
  state = {
    value: ''
  };

  onChangeTextArea = (e) => {
    console.log(e);
  };

  render() {
    return (
      <>
        <div>
          <input></input>
        </div>
        <div>
          <textarea
            cols='30'
            rows='30'
            value={this.state.value}
            onChange={this.onChangeTextArea}></textarea>
        </div>
      </>
    );
  }
}

export default App;
```

## 非受控组件

非受控组件：将表单中的控件和视图模型（state）进行解绑，之后进行的操作都是针对 DOM 进行操作的。

- 基本示例

```jsx
class App extends Component {
  constructor() {
    super();

    // 创建一个 ref
    this.inputRef = React.createRef();
  }

  onClickBtn = () => {
    // 拿到元素 DOM
    console.log(this.inputRef.current);
  };

  render() {
    return (
      <>
        {/* 绑定 Ref */}
        {/* 如果要设置默认值，需要使用 defaultValue */}
        <input type='text' ref={this.inputRef} defaultValue='defaultValue' />
        <button onClick={this.onClickBtn}>获取节点</button>
      </>
    );
  }
}

export default App;
```
