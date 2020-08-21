import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3>
        <label htmlFor="new-todo-input">Task's name</label>
      </h3>
      <input
        type="text"
        id="new-todo-input"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleName}
      />

      <button type="submit">Add a task</button>
    </form>
  );
}

export default Form;
