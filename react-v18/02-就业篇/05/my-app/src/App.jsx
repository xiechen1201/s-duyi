import ChildCom1 from "./components/ChildCom1";
import ChildCom2 from "./components/ChildCom2";

import MouseMove from "./components/MouseMove";
import ChildComLimit1 from "./components/ChildComLimit1";
import ChildComLimit2 from "./components/ChildComLimit2";

function App() {
  return (
    <>
      {/* 原始版 */}
      <div
        style={{
          display: "flex",
          width: "850px"
        }}>
        <ChildCom1 />
        <ChildCom2 />
      </div>
      {/* 优化版 */}
      <div
        style={{
          display: "flex",
          width: "850px"
        }}>
        {/* 传递一个渲染属性用于页面渲染 */}
        <MouseMove render={(props) => <ChildComLimit1 {...props} />} />
        <MouseMove render={(props) => <ChildComLimit2 {...props} />} />
      </div>
    </>
  );
}

export default App;
