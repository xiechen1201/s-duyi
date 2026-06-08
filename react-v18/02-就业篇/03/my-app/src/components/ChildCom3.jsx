import React, { useImperativeHandle } from "react";

function ChildCom3({ ref }) {
    useImperativeHandle(ref, () => {
        console.log(ref);
        return {};
    });

    return (
        <div>
            <input type='text' />
        </div>
    );
}

export default ChildCom3;
