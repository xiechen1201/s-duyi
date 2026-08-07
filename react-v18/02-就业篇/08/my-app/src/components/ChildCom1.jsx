import { useState } from "react";

import ChildCom2 from "./ChildCom2";

function ChildCom1(props) {
  console.log("ChildCom1 组件渲染了～");

  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(1);

  return (
    <div
      style={{
        margin: "10px",
        border: "1px solid #333"
      }}>
      <div>ChildCom1 组件：{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>增加</button>
      <button onClick={() => setCounter(1)}>不变</button>
      <ChildCom2 counter={counter2} />
    </div>
  );
}

export default ChildCom1;
