import ChildCom1 from "./ChildCom1";
import ChildCom2 from "./ChildCom2";
import withLog from "./hoc/withLog";
import withTimer from "./hoc/withTimer";

import { useState } from "react";

const NewChildCom1 = withLog(ChildCom1);
const NewChildCom2 = withLog(ChildCom2);

const NewChildCom1WithTimer = withTimer(NewChildCom1);
const NewChildCom2WithTimer = withTimer(NewChildCom2);

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>切换</button>
      {toggle ? (
        <NewChildCom1WithTimer name='张三' />
      ) : (
        <NewChildCom2WithTimer age={18} />
      )}
    </>
  );
}

export default App;
