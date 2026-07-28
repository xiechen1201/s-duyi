import { MyContext } from "./context";

import ChildCom from "./ChildCom";

function App() {
  return (
    <div>
      <MyContext.Provider value="hello context">
        <ChildCom />
      </MyContext.Provider>
    </div>
  );
}

export default App;
