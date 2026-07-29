import { useState } from "react";

// 负责公共的逻辑
function MouseMove(props) {
  const [points, setPoints] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    console.log("🚀 ~ handleMouseMove ~ e:", e.currentTarget.getBoundingClientRect().left);
    setPoints({ x: e.clientX, y: e.clientY });
  };

  return <div>{props?.render({ points, handleMouseMove })}</div>;
}

export default MouseMove;
 