import { TodoInter } from '../types/todos';

import Item from './Item';

type PropsType = {
  todos: TodoInter[];
  toggleTodo: (id: number) => void;
  delTodo: (id: number) => void;
  children?: React.ReactNode;
};

function ItemList({ todos, toggleTodo, delTodo, children }: PropsType) {
  return (
    <div>
      {children}
      <ul>
        {todos.map((todo) => (
          <Item todo={todo} key={todo.id}>
            <button onClick={() => toggleTodo(todo.id)}>
              {todo.completed ? '已完成' : '未完成'}
            </button>
            <button onClick={() => delTodo(todo.id)}>删 除</button>
          </Item>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
