import { useState } from "react";

import Modle from "./components/Modle";

function App() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    console.log("App 组件被点击了");
  };

  return (
    <div className='app' onClick={handleClick}>
      <button onClick={() => setShow(!show)}>显示/隐藏模态框</button>
      {show && <Modle />}
    </div>
  );
}

export default App;
