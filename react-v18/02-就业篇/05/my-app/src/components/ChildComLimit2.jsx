function ChildComLimit2(props) {
  return (
   <div
      style={{
        position: "relative",
        width: "400px",
        height: "400px",
        border: "1px solid #333"
      }}
      onMouseMove={props.handleMouseMove}>
      <h1>移动鼠标</h1>
      <div
        style={{
          position: "absolute",
          width: "10px",
          height: "10px",
          backgroundColor: "#333",
          borderRadius: "50%",
          left: props.points.x - 400 - 5,
          top: props.points.y - 400 - 5
        }}></div>
    </div>
  );
}

export default ChildComLimit2;