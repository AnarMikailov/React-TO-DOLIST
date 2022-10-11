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
          <button className={styles.deleteButton} onClick={deleteHandler}>
            <ion-icon className={styles.doneIcon} name="trash-sharp"></ion-icon>
          </button>
          <input
            className={styles.checkbox}
            onChange={doneHandler}
            type="checkbox"
          />
          {<li>{text}</li>}
        </div>
      }
    </>
  );
}

export default Todo;
