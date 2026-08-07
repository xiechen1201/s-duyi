import { createPortal } from "react-dom";

function Modle() {
  return createPortal(
    <div
      style={{
        width: "450px",
        height: "250px",
        border: "1px solid #333",
        position: "absolute",
        left: "calc(50% - 225px)",
        top: "calc(50% - 125px)",
        textAlign: "center",
        lineHeight: "250px"
      }}>
      模态框
    </div>,
    document.getElementById("root")
  );
}

export default Modle;
