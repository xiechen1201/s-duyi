import { useRef } from "react";
import ChildCom2 from "./components/ChildCom2";
import ChildCom3 from "./components/ChildCom3";

function App() {
    const inputRef = useRef();
    function clickHandle() {
        console.log(inputRef);
        inputRef.current.focus();
    }

    const com3Ref = useRef();

    return (
        <div className='App'>
            <input type='text' ref={inputRef} />
            <button onClick={clickHandle}>聚焦</button>

            <hr />

            <ChildCom2 />

            <hr />

            <ChildCom3 ref={com3Ref} />
        </div>
    );
}

export default App;
