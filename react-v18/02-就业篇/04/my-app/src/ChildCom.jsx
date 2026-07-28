import { useContext } from "react";
import { MyContext } from "./context";

function ChildCom() {
  const context = useContext(MyContext);
  console.log("🚀 ~ ChildCom ~ context:", context);

  return (
    <div>
      <MyContext.Consumer>
        {/* 接收一个回调函数，然后返回一个 jsx 元素 */}
        {(context) => <div>{context}</div>}
      </MyContext.Consumer>
    </div>
  );
}

export default ChildCom;
