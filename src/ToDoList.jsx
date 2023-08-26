import React from "react";

const ToDoList = (props) =>{
    return (
    <>
      <div className="todo_style">
    <i class="fa fa-items" aria-hidden="true"/>
      <li>{props.text}</li>
      </div>
    </>
    );
};

export default ToDoList;