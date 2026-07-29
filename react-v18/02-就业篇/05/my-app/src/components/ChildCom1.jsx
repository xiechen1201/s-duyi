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
