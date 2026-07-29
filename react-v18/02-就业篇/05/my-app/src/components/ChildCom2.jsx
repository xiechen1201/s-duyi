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
          left: points.x - 400 - 5,
          top: points.y - 5
        }}></div>
    </div>
  );
}

export default ChildCom2;
