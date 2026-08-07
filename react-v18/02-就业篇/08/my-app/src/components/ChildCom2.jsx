import React from "react";

function ChildCom2(props) {
  console.log("ChildCom2 组件渲染了～");

  return <div>ChildCom2 组件：{props.counter}</div>;
}

export default React.memo(ChildCom2);
