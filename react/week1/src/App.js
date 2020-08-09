import React from 'react';
import {Tasks}  from './list';
import './App.css';


function TodoList() {
  let listOfTasks = [{title : "Set up a meeting", description : "Call to Ann and Jhon", deadline : "Wed Sep 13 2017"},{title : "Go shoping", description : "buy food", deadline : "Thu Sep 14 2017"},{title:"make a presentation", description : "by using inDesign", deadline:"Fri Sep 15 2017"}]
  return (
      <Tasks list = {listOfTasks}/>  
  );
}
export default TodoList;