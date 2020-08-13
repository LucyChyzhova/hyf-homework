import React, { useState } from "react";

export default function Todo(props) {
  const viewTemplate = (
    <div>
      <div>
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed} 
          onChange={() => props.toggleTaskCompleted(props.id) }
        />
        <label htmlFor={props.id}>{props.name}</label>
      </div>
      <div>
        <button type="button" onClick={() => props.deleteTask(props.id)}>
          Delete <span></span>
        </button>
      </div>
    </div>
  );

  return <li>{viewTemplate}</li>;
}
