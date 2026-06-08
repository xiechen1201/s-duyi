import { useState, useEffect, useRef } from "react";

function ChildCom2() {
    let timer = useRef(null); // 保存定时器
    let [count, setCount] = useState(0);

    useEffect(() => {
       /*  timer.current = setInterval(() => {
            console.log("执行了");
        }, 1000); */
    }, []);

    return (
        <div>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}>
                点击
            </button>
            <p>{count}</p>
            <button
                onClick={() => {
                    clearInterval(timer.current);
                }}>
                清除定时器
            </button>
        </div>
    );
}

export default ChildCom2;
