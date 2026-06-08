import { useContext } from "react";
import { MyContext } from "../context";

function ChildCom4() {
    const { counter } = useContext(MyContext);

    return <div>{counter}</div>;
}

export default ChildCom4;
