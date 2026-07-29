import { useContext } from "react";
import { MyContext } from "./context";
import { ThemeContext } from "./context/theme";
import { LanguageContext } from "./context/language";

function ChildCom() {
  const context = useContext(LanguageContext);
  console.log("🚀 ~ ChildCom ~ context:", context);

  return (
    <div>
      <div>检测到语言：{context}</div>
      <ThemeContext.Consumer>
        {(theme) => <div data-theme={theme}>{theme}</div>}
      </ThemeContext.Consumer>
      <MyContext.Consumer>
        {/* 接收一个回调函数，然后返回一个 jsx 元素 */}
        {(context) => <div>{context}</div>}
      </MyContext.Consumer>
    </div>
  );
}

export default ChildCom;
