import React from 'react';

function Form({ inputText, setInputText, todo, setTodo }) {
  const inputTextHandler = e => {
    setInputText(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    if (!inputText) return;
    setTodo([
      ...todo,
      { text: inputText, complated: false, id: Math.random() },
    ]);
    setInputText('');
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          value={inputText}
          onChange={inputTextHandler}
          className="todo__input"
          type="text"
        />
      </form>
      <button onClick={submitHandler}>+</button>
    </div>
  );
}

export default Form;
