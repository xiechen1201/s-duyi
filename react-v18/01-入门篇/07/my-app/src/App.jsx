import { useState, useEffect } from 'react';

/* function App() {
  // num 表示数据
  // setNum 表示更改数据的方法，接受一个参数为新数据
  let [num, setNum] = useState(0);

  let [age, setAge] = useState(22);
  let [str, setStr] = useState('Hello world');
  let [doing, setDoing] = useState({ text: 'studying' });

  function onClickBtn() {
    setNum(++num);
    setAge(32);
    setStr('Hello React');
    setDoing({ text: 'coding' });
  }

  return (
    <>
      <p>{num}</p>
      <p>{age}</p>
      <p>{str}</p>
      <p>{doing.text}</p>
      <button onClick={onClickBtn}>Add Num</button>
    </>
  );
}
export default App; */

// TODO:==========================================

/* export default function App() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    // 书写你要执行的副作用，会在 render 完成后执行，类似于 didMount 和 update 的结合
    // useEffect 会在每次状态更改后都执行
    console.log('useEffect');

    document.title = '你点击了' + count + '次';
  });

  function onClickBtn() {
    setCount(count + 1);
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickBtn}>Add Num</button>
    </>
  );
} */

// TODO:==========================================

/* export default function App() {
    let [count, setCount] = useState(0);

    // useEffect(() => {
    //   setInterval(() => {
    //     console.log('useEffect');
    //   }, 1000);
    // });

    // useEffect(() => {
    //   console.log('useEffect calling');
    //   return () => {
    //     console.log('useEffect clear');
    //   };
    // });

    useEffect(() => {
        const stopTimer = setInterval(() => {
            console.log('useEffect');
        }, 1000);
        return () => {
            clearInterval(stopTimer);
        };
    });

    function fetchData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(new Date().toLocaleString());
            }, 1000);
        });
    }

    useEffect(() => {
        fetchData().then((res) => {
            console.log(res);
            setCount(res);
        });
    }, []);

    function onClickBtn() {
        setCount(count + 1);
    }

    return (
        <>
            <div>{count}</div>
            <button onClick={onClickBtn}>Add Num</button>
        </>
    );
} */

// TODO:==========================================

function App() {
    let [count1, setCount1] = useState(0);
    let [count2, setCount2] = useState(0);
    let [count3, setCount3] = useState(0);

    useEffect(() => {
        console.log('执行副作用函数');
    }, [count1]);

    return (
        <div>
            <div>count1:{count1}</div>
            <div>count2:{count2}</div>
            <div>count3:{count3}</div>
            <button onClick={() => setCount1(++count1)}>+1</button>
            <button onClick={() => setCount2(++count2)}>+1</button>
            <button onClick={() => setCount3(++count3)}>+1</button>
        </div>
    );
}

export default App;

// TODO:==========================================

/* import useMyBook from './hooks/useMyBook';

export default function App() {
  let { bookName, setBookName } = useMyBook();

  return (
    <>
      <p>{bookName}</p>
      <button onClick={() => setBookName(new Date().toLocaleString())}>
        change bookName
      </button>
    </>
  );
} */
