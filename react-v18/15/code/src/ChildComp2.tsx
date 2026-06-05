import { useRef, useState, useEffect } from "react";

function ChildComp2() {
  const timer = useRef<number>(0);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    timer.current = setInterval(() => {
      console.log("触发了");
    }, 1000);
 
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  const clearTimer = () => {
    console.log(timer.current);
    clearInterval(timer.current);
  };

  function clickHandle() {
    console.log(timer.current);
    setCounter(counter + 1);
  }

  return (
    <>
      <div>{counter}</div>
      <button onClick={clickHandle}>+1</button>
      <button onClick={clearTimer}>停止</button>
    </>
  );
}

export default ChildComp2;
