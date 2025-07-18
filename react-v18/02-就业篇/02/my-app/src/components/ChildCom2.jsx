import { useEffect } from "react";
import { formatDate } from "../utils";

function ChildCom2(props) {
    /* useEffect(() => {
        console.log(
            `日志：组件ChildCom2已经创建，创建时间${formatDate(
                Date.now(),
                "year-time"
            )}`
        );
        return function () {
            console.log(
                `日志：组件ChildCom2已经销毁，销毁时间${formatDate(
                    Date.now(),
                    "year-time"
                )}`
            );
        };
    }, []); */

    return (
        <div>
            这是子组件
            <div>年龄: {props.age}</div>
        </div>
    );
}

export default ChildCom2;
