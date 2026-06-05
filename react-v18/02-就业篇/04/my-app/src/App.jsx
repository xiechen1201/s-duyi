import React, { useState } from "react";
import { MyContext, MyContext2 } from "./context";
import ChildCom1 from "./components/ChildCom1";

function App() {
    const [counter, setCounter] = useState(0);

    return (
        // 这里的 value 相当于是将后面的数据放入到上下文环境中
        <MyContext.Provider value={{ counter, setCounter }}>
            <MyContext2.Provider value={{ name: "张三" }}>
                <div>
                    <h1>Hello!</h1>
                    <ChildCom1 />
                </div>
            </MyContext2.Provider>
        </MyContext.Provider>
    );
}

export default App;
