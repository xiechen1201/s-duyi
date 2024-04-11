import React from 'react';
import Hello from './Components/Hello';
import World from './Components/World';
import Button from './Components/Button';

/* class App extends React.Component {
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
export default App; */

// TODO:==================================================

/* class App extends React.Component {
  constructor() {
    super();

    this.state = {
      num: 1
    };

    // 同步操作
    // setInterval(() => {
    //   this.setState({
    //     num: this.state.num + 1
    //   });
    //   console.log(this.state.num);
    // }, 1000);
  }

  onClickBtn() {
    // 异步的操作
    // this.setState({
    //   num: this.state.num + 1
    // });
    // this.setState({
    //   num: this.state.num + 1
    // });
    // this.setState({
    //   num: this.state.num + 1
    // });
    // console.log(this.state.num);
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
export default App; */

// TODO:==================================================

/* class App extends React.Component {
  constructor() {
    super();

    this.state = {
      num: 1
    };
  }

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
    this.setState((cur) => {
      return {
        num: cur.num + 1
      };
    });
     this.setState((cur) => ({
      // 这里的 cur.name 就是 2
      num: cur.num + 1
    }));
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
export default App; */

// TODO:==================================================

/* class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: 'zhangsan',
      age: 22
    };
  }

  // 该方法通过 props 的方式传递给子组件
  changeState(data) {
    console.log(this);
    console.log(data);
    console.log('changeState is applying!');
  }

  render() {
    return (
      <>
        <Hello stuInfo={this.state} changeState={this.changeState.bind(this)} />
        <World stuInfo={this.state} str='world' num={123} bool={true} />
        <Button>
          <span>按钮内容</span>
        </Button>
      </>
    );
  }
}

export default App; */

// TODO:==================================================

import Money from './Components/Money';

class App extends React.Component {
  state = {
    dollar: '',
    rmb: ''
  };

  transformToRMB = (value) => {
    if (parseFloat(value) || value === '' || parseFloat(value) === 0) {
      this.setState({
        dollar: value,
        rmb: value === '' ? '' : (value * 7.3255).toFixed(2)
      });
    } else {
      alert('请输入数字！');
    }
  };

  transformToDOLLAR = (value) => {
    if (parseFloat(value) || value === '' || parseFloat(value) === 0) {
      this.setState({
        dollar: value === '' ? '' : (value * 0.1365).toFixed(2),
        rmb: value,
      });
    } else {
      alert('请输入数字！');
    }
  };

  render() {
    return (
      <div>
        <Money text='美元' money={this.state.dollar} transform={this.transformToRMB} />
        <Money text='人名币' money={this.state.rmb} transform={this.transformToDOLLAR} />
      </div>
    );
  }
}

export default App;
