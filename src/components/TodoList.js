import React from "react";
import Todo from "./Todo";
import styles from "./TodoList.module.css";
let current_datetime = new Date();
let formatted_date =
  current_datetime.getDate() +
  "-" +
  (current_datetime.getMonth() + 1) +
  "-" +
  current_datetime.getFullYear();
console.log(formatted_date);
const TodoList = ({ todos, setTodos }) => {
  const removeTodo = (e) => {
    // console.log(todo);
    // console.log(todo);
  };
  return (
    <div className={styles.container}>
      {formatted_date}
      <ul className={styles.ulist}>
        {todos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            text={todo.text}
            id={todo.id}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
