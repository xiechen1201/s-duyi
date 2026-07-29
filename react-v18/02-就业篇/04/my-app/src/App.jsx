import { MyContext } from "./context";
import { ThemeContext } from "./context/theme";
import { LanguageContext } from "./context/language";

import ChildCom from "./ChildCom";

function App() {
  return (
    <div>
      <MyContext.Provider value='hello context'>
        <ThemeContext.Provider value='dark'>
          <LanguageContext.Provider value='en'>
            <ChildCom />
          </LanguageContext.Provider>
        </ThemeContext.Provider>
      </MyContext.Provider>
    </div>
  );
}

export default App;
