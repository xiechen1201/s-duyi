import { useState } from 'react';
import { TodoInter } from '../types/todos';

export function useTodosData() {
  const [todos, setTodos] = useState<TodoInter[]>([
    {
      id: 1,
      title: 'Learn React',
      completed: false
    },
    {
      id: 2,
      title: 'Learn TypeScript',
      completed: true
    },
    {
      id: 3,
      title: 'Learn Hooks',
      completed: false
    }
  ]);

  function addTodo(title: string) {
    const newTodo: TodoInter = {
      id: new Date().getTime(),
      title: title,
      completed: false
    };
    setTodos([...todos, newTodo]);
  }

  function delTodo(id: number) {
    const result = todos.filter((todo) => todo.id !== id);
    setTodos(result);
  }

  function toggleTodo(id: number) {
    const result = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(result);
  }

  function filterTodos(title: string) {
    const result = todos.filter((todo) => todo.title.includes(title));
    setTodos(result);
  }

  return {
    todos,
    setTodos,
    addTodo,
    delTodo,
    toggleTodo,
    filterTodos
  };
}
