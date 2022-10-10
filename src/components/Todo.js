import React from "react";
import styles from "./Todo.module.css";

function Todo({ text, setTodos, todos, todo }) {
  const doneHandler = (e) => {
    const sibling = e.target.nextElementSibling;
    if (e.currentTarget.checked) {
      sibling.className = styles.done;
    } else {
      sibling.className = "";
    }
  };

  const deleteHandler = (e) => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  return (
    <>
      {
        <div className={styles.list}>
          <button onClick={deleteHandler}>Delete</button>
          <input onChange={doneHandler} type="checkbox" />
          {<li className="saasas">{text}</li>}
        </div>
      }
    </>
  );
}

export default Todo;
