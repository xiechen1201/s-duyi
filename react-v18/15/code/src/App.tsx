import { useRef } from "react";
import type { ChildCompRef } from "./ChildComp";

import ChildComp from "./ChildComp";
import ChildComp2 from "./ChildComp2";

function App() {
  const childRef = useRef<ChildCompRef>(null);

  const handleSubmit = () => {
    childRef.current?.submit();
  };

  return (
    <div>
      <ChildComp ref={childRef} />
      <button onClick={handleSubmit}>提交</button>
      <ChildComp2 />
    </div>
  );
}

export default App;
