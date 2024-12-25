import { useTodosData } from './hooks/todos-data';

import ItemList from './components/ItemList';
import AddItem from './components/AddItem';
import FilterItem from './components/FilterItem';

function App() {
  const { todos, delTodo, toggleTodo, addTodo, filterTodos } = useTodosData();

  return (
    <>
      <h1>TodoView</h1>
      <FilterItem filterTodos={filterTodos} />
      <ItemList todos={todos} delTodo={delTodo} toggleTodo={toggleTodo}>
        <h2>代办列表</h2>
      </ItemList>
      <AddItem addItem={addTodo} />
    </>
  );
}

export default App;
