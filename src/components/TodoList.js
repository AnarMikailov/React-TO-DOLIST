import React from 'react';
import Todo from './Todo';

const TodoList = ({ todo }) => {
  return (
    <div>
      <ul>
        {todo.map(todo => (
          <Todo text={todo.text} id={todo.id} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
