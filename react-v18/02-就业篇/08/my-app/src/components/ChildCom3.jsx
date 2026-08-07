import { useState } from "react";

function ChildCom3() {
  const [counter, setCounter] = useState(0);

  return (
    <div
      style={{
        margin: "10px",
        border: "1px solid #333"
      }}>
        <div>{counter}</div>
        <button onClick={() => setCounter(counter + 1)}>增加</button>
      </div>
  );
}

export default ChildCom3;
