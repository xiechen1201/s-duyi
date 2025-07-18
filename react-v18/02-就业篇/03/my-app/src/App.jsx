import { useRef } from "react";

function App() {

    const inputRef = useRef();
    function clickHandle() {
        inputRef.current.focus();
    }

    return (
        <div className='App'>
            <input type='text' ref={inputRef} />
            <button onClick={clickHandle}>聚焦</button>
        </div>
    );
}

export default App;
