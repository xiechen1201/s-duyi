import React from 'react';

function App() {
  const personList = [
    { name: '张三', age: 18 },
    { name: '李四', age: 20 }
  ];

  const arr = [<p key='1'>Hello</p>, <p key='2'>world</p>, <p key='3'>hhh</p>];
  let arr2 = [];

  arr2 = personList.map((el, index) => {
    return (
      <div key={index}>
        {el.name}---{el.age}
      </div>
    );
  });

  const el = (
    <>
      <ul>
        <li className='one'>1</li>
        <li className={true ? 'two' : 'three'}>2</li>
        <li>{3 + 1}</li>
      </ul>
      <ul
        style={{
          color: 'red',
          fontSize: '16px'
        }}>
        <li>1</li>
      </ul>
      {arr}
      {arr2}
    </>
  );

  const el3 = <h1 className='greeting'>Hello World!</h1>;
  // el 等价于 el2
  const el2 = React.createElement('h1', { className: 'greeting' }, 'Hello World!');
  console.log(el2);
  console.log(el3);

  return el;
}

export default App;
