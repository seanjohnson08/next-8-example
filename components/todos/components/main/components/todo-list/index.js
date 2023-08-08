import React from 'react';
import { Todo } from './components/todo';
import styles from './index.module.scss';

export const TodoList = ({
  data = [],
  editTodo,
  removeTodo,
  toggleCompleted
}) => (
  <ul className={styles["todo-list"]}>
    {data.map((item) => (
      <Todo
        key={item.id}
        completed={item.completed}
        handleEdit={value => editTodo(item.id, value)}
        handleRemove={() => removeTodo(item.id)}
        handleToggle={() => toggleCompleted(item.id, !item.completed)}
      >
        {item.value}
      </Todo>
    ))}
  </ul>
);

export default TodoList;
