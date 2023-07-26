import React from 'react';
import { TodoCount } from './components/todo-count';
import { Filters } from './components/filters';
import styles from './index.module.scss';

export const Footer = ({
  data = [],
  clearCompleted,
  filterActive
}) => {
  const count = data.reduce((total, item) => item.completed ? total : total + 1, 0);

  return (
    <footer className={styles["footer"]}>
      <TodoCount count={count} />
      <Filters filterActive={filterActive} />
      <button
        onClick={clearCompleted}
        className={styles["clear-completed"]}
      >
        Clear Completed
      </button>
    </footer>
  );
};

export default Footer;
