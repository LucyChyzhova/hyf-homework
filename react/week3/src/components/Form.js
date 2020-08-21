import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }

  function handleDate(e) {
    setDate(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name, date);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3>
        <label htmlFor="new-todo-input">
          Task's name
        </label>
      </h3>
      <input
        type="text"
        id="new-todo-input"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleName}
      />
      <h3>
        <label htmlFor="new-todo-input">
          Deadline
        </label>
      </h3>
      <input
        type="date"
        id="new-deadline-input"
        name="date"
        autoComplete="off"
        value={date}
        onChange={handleDate}
      />

      <button type="submit">
        Add
      </button>
    </form>
  );
}

export default Form;
