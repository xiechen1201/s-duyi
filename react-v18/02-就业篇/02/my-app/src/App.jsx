import { useState } from "react";
import withLog from "./hoc/with-log";
import withTimer from "./hoc/with-timer";

import ChildCom1 from "./components/ChildCom1";
import ChildCom2 from "./components/ChildCom2";

// const NewChildCom2 = withLog(ChildCom2);
const NewChildCom2 = withLog(withTimer(ChildCom2));

function App() {
    const [toggle, setToggle] = useState(true);

    return (
        <div className='App'>
            {toggle ? <ChildCom1 name='xiechen' /> : <NewChildCom2 age={18} />}
            <button onClick={() => setToggle(!toggle)}>切换</button>
        </div>
    );
}

export default App;
