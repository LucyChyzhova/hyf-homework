import React, { useState } from "react";

export default function Todo(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }

  const editingTemplate = (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={props.id}>
          Change task's name "{props.name}"
        </label>
        <input
          id={props.id}
          type="text"
          value={newName}
          onChange={handleChange}
        />
      </div>
      <div>
        <button
          type="button"
          onClick={() => setEditing(false)}
        >
          Cancel
          <span> renaming </span>
        </button>
        <button type="submit">
          Save
          <span> new name </span>
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div>
      <div>
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label htmlFor={props.id}>
          {props.name} | {props.date}
        </label>
      </div>
      <div>
        <button type="button" onClick={() => setEditing(true)}>
          Edit <span></span>
        </button>
        <button
          type="button"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete <span></span>
        </button>
      </div>
    </div>
  );

  return <li>{isEditing ? editingTemplate : viewTemplate}</li>;
}
