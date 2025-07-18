import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    console.log('constructor');

    this.state = {
      value: ''
    };

    // 错误
    // this.setState({
    //   value: 1
    // });
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(arguments);
    console.log('componentDidUpdate');
  }

  onClickBtn() {
    this.setState({
      value: new Date()
    });
  }

  render() {
    console.log('render');
    return (
      <>
        <span>{this.value}</span>
        <button onClick={this.onClickBtn.bind(this)}>change value</button>
      </>
    );
  }
}

export default App;
