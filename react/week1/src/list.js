import React, { Component } from "react";
export class Tasks extends Component {
  render() {
    const list = this.props.list;
    return (
      <div>
        <h1>Todo List :</h1>
        <ul className="taskList">
          {list.map((element, index) => {
            return (
              <li key={index}>
                <h2>{element.title}</h2>
                <h3>{element.description}</h3>
                <p>{element.deadline}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
