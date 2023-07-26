import React from 'react';
import { TodoList } from './components/todo-list';
import { ToggleAll } from './components/toggle-all';
import styles from './index.module.scss';

export const Main = ({
  data = [],
  editTodo,
  removeTodo,
  toggleCompleted,
  toggleAll
}) => (
  <section className={styles["main"]}>
    <ToggleAll
      toggleAll={toggleAll}
    />
    <TodoList
      data={data}
      editTodo={editTodo}
      removeTodo={removeTodo}
      toggleCompleted={toggleCompleted}
    />
  </section>
);

export default Main;
