import React from 'react';
import styles from './Todo.module.css';

function Todo({ text }) {
  return (
    <div className={styles.list}>
      <button>delete</button>
      <input type="checkbox" />
      <li>{text} </li>
    </div>
  );
}

export default Todo;
