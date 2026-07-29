function ChildComLimit1(props) {
  return (
    <div
      style={{
        width: "400px",
        height: "400px",
        backgroundColor: "#999"
      }}
      onMouseMove={props.handleMouseMove}>
      <h1>移动鼠标</h1>
      <p>
        当前鼠标的当前位置：{props.points.x}, {props.points.y}
      </p>
    </div>
  );
}

export default ChildComLimit1;
