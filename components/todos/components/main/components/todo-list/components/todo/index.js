import React, { useState, useRef } from 'react';
import styles from './index.module.scss';

const ENTER_KEY = 13;
const ESCAPE_KEY = 27;

export const Todo = ({
  completed,
  children,
  handleEdit,
  handleRemove,
  handleToggle,
  isLast,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  const activateEdit = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current.focus();
    }, 200);
  };

  const handleSubmit = () => {
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.which === ESCAPE_KEY) {
      e.target.value = children;
      e.target.blur();
    }
    if (e.which === ENTER_KEY) {
      handleEdit(e.target.value);
      e.target.blur();
    }
  };

  return (
    <li
      className={[
        "todo",
        isEditing ? "todo_editing" : null,
        isLast ? "todo_last" : null,
        completed ? "todo_completed" : null,
      ].join(' ')}
    >
      <div className={styles["todo__view"]}>
        <input
          className={styles["todo__toggle"]}
          type="checkbox"
          checked={completed}
          onChange={handleToggle}
        />
        <label
          className={styles["todo__label"]}
          onDoubleClick={activateEdit}
        >
          {children}
        </label>
        <button
          className={styles["todo__destroy"]}
          onClick={handleRemove}
        />
      </div>
      <input
        ref={inputRef}
        type="text"
        className={styles["todo__edit"]}
        defaultValue={children}
        onBlur={handleSubmit}
        onKeyDown={handleKeyDown}
      />
    </li>
  );
};

export default Todo;
