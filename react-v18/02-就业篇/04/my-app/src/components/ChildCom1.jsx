import React from "react";
import ChildCom2 from "./ChildCom2";
import ChildCom3 from "./ChildCom3";
import ChildCom4 from "./ChildCom4";

function ChildCom1() {
    return (
        <div>
            <h2>ChildCom1</h2>
            <ChildCom2 />
            <ChildCom3 />
            <ChildCom4 />
        </div>
    );
}

export default ChildCom1;
