import { useEffect } from "react";
import { formatDate } from "../utils";

/**
 * 在接收的组件上面添加一些公共的逻辑
 * @param {*} Com 组件
 * @returns {} 返回一个新组件
 */
function withLog(Com) {
    return function NewCom(props) {
        // 抽离的公共逻辑
        useEffect(() => {
            console.log(
                `日志：组件${Com.name}已经创建，创建时间${formatDate(
                    Date.now(),
                    "year-time"
                )}`
            );
            return function () {
                console.log(
                    `日志：组件${Com.name}已经销毁，销毁时间${formatDate(
                        Date.now(),
                        "year-time"
                    )}`
                );
            };
        }, []);

        // 一般来说，传入的组件会作为新组件的视图
        return <Com {...props} />;
    };
}

export default withLog;
