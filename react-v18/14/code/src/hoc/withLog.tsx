import { useEffect } from "react";
import type { ComponentType } from "react";
import { formatDate } from "../utils";

/**
 * 接收的组件添加一些公共的逻辑
 * @param component
 * @returns
 */
function withLog<T extends object>(Component: ComponentType<T>) {
  return function (props: T) {
    //抽离的公共逻辑
    useEffect(() => {
      console.log(
        `日志：组件${Component.name}已经创建，创建时间${formatDate(Date.now(), "year-time")}`
      );
      return function () {
        console.log(
          `日志：组件${Component.name}已经销毁，销毁时间${formatDate(Date.now(), "year-time")}`
        );
      };
    }, []);

    // 一般来说，传入的组件作为新组件的视图
    return <Component {...props} />;
  };
}

export default withLog;