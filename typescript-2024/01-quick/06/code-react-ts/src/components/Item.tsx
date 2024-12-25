import { TodoInter } from '../types/todos';

import styles from './Item.module.css';

type PropsType = {
  todo: TodoInter;
  children: React.ReactNode;
};

function Item({ todo, children }: PropsType) {
  return (
    <li className={todo.completed ? styles.finish : ''}>
      <span>{todo.id}</span>
      <span>{todo.title}</span>
      {children}
    </li>
  );
}

export default Item;
