import React from "react";
import Todo from "./Todo";

const date = new Date().toLocaleDateString("en-US").split("");
const TodoList = ({ todos, setTodos }) => {
  const removeTodo = (e) => {
    // console.log(todo);
    // console.log(todo);
  };
  return (
    <div>
      <ul>
        {date}
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
