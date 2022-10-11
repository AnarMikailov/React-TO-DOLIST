import React from "react";
import styles from "./Form.module.css";

function Form({ inputText, setInputText, todos, setTodos, todo }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!inputText) return;
    setTodos([
      ...todo,
      { text: inputText, complated: false, id: Math.random() },
    ]);
    setInputText("");
  };
  return (
    <div>
      <h1>To do list</h1>
      <form onSubmit={submitHandler}>
        <input
          value={inputText}
          onChange={inputTextHandler}
          className="todo__input"
          type="text"
        />
      </form>
      <button className={styles.ion} onClick={submitHandler}>
        <ion-icon name="add-circle-sharp"></ion-icon>
      </button>
    </div>
  );
}

export default Form;
