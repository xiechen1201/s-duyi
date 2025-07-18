import React from 'react';

/* // 根组件（函数组件）
function App() {
  const el = <></>;

  return el;
}

export default App; */

// ==============================================

/* // 类组件
class App extends React.Component {
  constructor(name, age) {
    super();

    this.name = name;
    this.age = age;
  }

  render(){
    return <>这里是视图的内容！</>
  }
}
export default App; */

// ==============================================

/* function App() {
  function onClick(event) {
    console.log(event);
    console.log(event.nativeEvent);
  }

  function onClickLink(event) {
    event.preventDefault();
  }

  const el = (
    <>
      <a href='https://www.baidu.com' onClick={onClickLink}>
        Link
      </a>
      <button onClick={onClick}>Click</button>
    </>
  );

  return el;
}

export default App; */

// ==============================================

/* class App extends React.Component {
  constructor(name, age) {
    super();

    this.name = name;
    this.age = age;
  }

  onClickBtn(str) {
    console.log(this);
    console.log(str);
  }

  render() {
    return (
      <>
        <button onClick={this.onClickBtn.bind(this, 'prop')}>Click</button>
      </>
    );
  }
}
export default App; */

// ==============================================

function App() {
  function onClick(prop) {
    console.log(arguments);
  }

  const el = (
    <>
      {/* <button onClick={() => onClick('prop',)}>Click</button> */}
      <button onClick={onClick.bind(this, 'prop')}>Click</button>
    </>
  );

  return el;
}

export default App;
