import { useState } from "react";

function App() {

  console.log("🚀 ～ App 组件渲染了 ～")

  const [counter, setCounter] = useState(1);

  return (
    <div>
      <h1>App 组件</h1>
      <div>当前计数：{counter}</div>
      <button
        onClick={() => {
          setCounter(1);
        }}>
        增加+1
      </button>
    </div>
  );
}

export default App;
