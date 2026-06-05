import { useState } from "react";
import withLog from "./hoc/with-log";
import ChildCom1 from "./components/ChildCom1";
import ChildCom2 from "./components/ChildCom2";

function App() {
    const [toggle, setToggle] = useState(true);
    const NewCom1 = withLog(ChildCom1);
    const NewCom2 = withLog(ChildCom2);

    return (
        <div>
            <button onClick={() => setToggle(!toggle)}>切换</button>
            {toggle ? <NewCom1 name={"谢晨"} /> : <NewCom2 age={20} />}
        </div>
    );
}

export default App;
