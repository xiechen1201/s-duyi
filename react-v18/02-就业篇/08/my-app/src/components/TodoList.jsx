import { useState, useMemo, memo } from "react";

const todos = [
  {
    id: 1,
    title: "学习 React",
    completed: false
  },
  {
    id: 2,
    title: "学习 Vue",
    completed: true
  },
  {
    id: 3,
    title: "学习 Node.js",
    completed: false
  },
  {
    id: 4,
    title: "学习 Express",
    completed: true
  }
];

const List = memo(function List(props) {
  const { items } = props;

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
});

function TodoList() {
  console.log("🚀 ～ TodoList 重渲染了 ～");

  const [theme, setTheme] = useState("light");

  const visibleTodos = useMemo(
    () => todos.filter((todo) => todo.completed === true),
    []
  );

  return (
    <div className={theme}>
      <List items={visibleTodos} />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        切换主题
      </button>
    </div>
  );
}

export default TodoList;
