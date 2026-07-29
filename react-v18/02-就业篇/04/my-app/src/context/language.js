import { createContext } from "react";

// 创建一个上下文对象
const LanguageContext = createContext("en");

LanguageContext.displayName = "LanguageContext";

export { LanguageContext };