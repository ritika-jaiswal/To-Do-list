import React, { useState } from "react"
import "./App.css";
import ToDoList from "./ToDoList";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent=(event)=>{
    setInputList(event.target.value)
  }
  const listOfItems=()=>{
      setItems((oldItems) => {
        return [...oldItems,inputList]
      });
      setInputList("");
  }
  return (
    <>
    <div className="main_div">
      <div className="center_div">
        <br/>
        <h1>To Do List</h1>
         <br/>
         <input type="text" placeholder="Add a Items" onChange={itemEvent} value={inputList} />
         <button onClick={listOfItems}>+</button>

         <ol>
          {/* <li>{inputList}</li> */}
          {items.map((itemval) => {
             return <ToDoList text = {itemval}/>
          })}
         </ol>
      </div>
    </div>
    </>
  );
}

export default App;
