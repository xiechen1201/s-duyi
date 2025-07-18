import React, { Component } from 'react';

/* class App extends Component {
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

export default App; */

// TODO:=====================================================================

/* class App extends Component {
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

export default App; */

// TODO:=====================================================================

/* class App extends Component {
  state = {
    value: '',
    checksList: [
      { content: 'item1', checked: false },
      { content: 'item2', checked: false },
      { content: 'item3', checked: false },
      { content: 'item4', checked: false },
      { content: 'item5', checked: false }
    ],
    selectValue: ''
  };

  onChangeTextArea = (e) => {
    console.log(e);
  };

  onChangeCheckBox = (event, data, index) => {
    const arr = [...this.state.checksList];
    arr[index].checked = !arr[index].checked;

    this.setState({
      checksList: arr
    });
  };

  onChangeSelect = (e) => {
    this.setState({
      selectValue: e.target.value
    });
  };

  render() {
    return (
      <>
        <div>
          <textarea
            cols='30'
            rows='30'
            value={this.state.value}
            onChange={this.onChangeTextArea}></textarea>
        </div>
        <div>
          {this.state.checksList.map((el, ind) => {
            return (
              <div key={ind}>
                <input
                  type='checkbox'
                  checked={el.checked}
                  onChange={(e) => this.onChangeCheckBox(e, el, ind)}
                />
                <span>{el.content}</span>
              </div>
            );
          })}
        </div>
        <div>
          <label>请选择：</label>
          <select value={this.state.selectValue} onChange={this.onChangeSelect}>
            <option value=''>请选择</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>
        </div>
      </>
    );
  }
}

export default App; */

// TODO:=====================================================================

/* class App extends Component {
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
        // 绑定 Ref
        // 如果要设置默认值，需要使用 defaultValue
        <input type='text' ref={this.inputRef} defaultValue='defaultValue' />
        <button onClick={this.onClickBtn}>获取节点</button>
      </>
    );
  }
} 

export default App; */

// TODO:=====================================================================

class App extends Component {
  constructor() {
    super();

    this.fileRef = React.createRef();
  }

  onClickBtn = () => {
    console.log(this.fileRef.current.value);
  };

  render() {
    return (
      <>
        <input type='file' ref={this.fileRef} />
        <button onClick={this.onClickBtn}>获取节点</button>
      </>
    );
  }
}

export default App;