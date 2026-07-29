import { createContext } from "react";

// 创建一个上下文对象
const MyContext = createContext("hello world");

MyContext.displayName = "MyContext";

export { MyContext };
