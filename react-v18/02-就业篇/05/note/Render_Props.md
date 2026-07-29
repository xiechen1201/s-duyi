# Render Props

术语为 react 组件接收值为函数的 props 的方式。

组件内部试图不一致，但是逻辑一致，抽离逻辑，成为横切关注点。

```
import { useState } from "react";

// 鼠标移动，记录位置
function ChildCom1() {
  const [points, setPoints] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPoints({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      style={{
        width: "400px",
        height: "400px",
        backgroundColor: "#999"
      }}
      onMouseMove={handleMouseMove}>
      <h1>移动鼠标</h1>
      <p>
        当前鼠标的当前位置：{points.x}, {points.y}
      </p>
    </div>
  );
}

export default ChildCom1;

```

```
import { useState } from "react";

// 小球追随鼠标移动
function ChildCom2() {
  const [points, setPoints] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPoints({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      style={{
        position: "relative",
        width: "400px",
        height: "400px",
        border: "1px solid #333"
      }}
      onMouseMove={handleMouseMove}>
      <h1>移动鼠标</h1>
      <div
        style={{
          position: "absolute",
          width: "10px",
          height: "10px",
          backgroundColor: "#333",
          borderRadius: "50%",
          left: points.x - 400 - 15,
          top: points.y - 15
        }}></div>
    </div>
  );
}

export default ChildCom2;

```

逻辑一致，仅仅是渲染的视图不一致。
