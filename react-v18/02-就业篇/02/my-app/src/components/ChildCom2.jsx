import { useEffect } from "react";

function ChildCom2(props) {

    /* useEffect(() => {
        console.log(
            `日志：组件${
                ChildCom2.name
            }已经创建，创建时间${new Date().toLocaleDateString()}`
        );
        return function () {
            console.log(
                `日志：组件${
                    ChildCom2.name
                }已经销毁，销毁时间${new Date().toLocaleDateString()}`
            );
        };
    }, []); */

    return (
        <div>
            <li>这是子组件2</li>
            <li>年龄:{props.age}</li>
        </div>
    );
}

export default ChildCom2;
