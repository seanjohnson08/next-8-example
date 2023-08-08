import React from 'react';
import styles from './index.module.scss';

const pluralize = (count, word) => count === 1 ? word : `${word}s`;

export const TodoCount = ({ count }) => (
  <span className={styles["todo-count"]}>
    <strong>{count}</strong>
    {` ${pluralize(count, 'item')} left `}
  </span>
);

export default TodoCount;
