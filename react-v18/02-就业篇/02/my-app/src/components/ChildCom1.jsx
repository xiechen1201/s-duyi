import { useEffect } from "react";

function ChildCom1(props) {

    /* useEffect(() => {
        console.log(
            `日志：组件${
                ChildCom1.name
            }已经创建，创建时间${new Date().toLocaleDateString()}`
        );
        return function () {
            console.log(
                `日志：组件${
                    ChildCom1.name
                }已经销毁，销毁时间${new Date().toLocaleDateString()}`
            );
        };
    }, []); */

    return (
        <div>
            <li>这是子组件1</li>
            <li>姓名:{props.name}</li>
        </div>
    );
}

export default ChildCom1;
