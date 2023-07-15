import React, { useRef } from "react";
import classes from './components/NewTodo.module.css'

const NewTodo: React.FC  <{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputref = useRef<HTMLInputElement>(null);
  
  
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = todoTextInputref.current!.value;

    if (enteredText?.trim().length === 0) {
      return;
    }
    props.onAddTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputref} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
