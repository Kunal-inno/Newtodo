import React, { useState } from "react";
import Header from "./Header";
import PopUp from "./PopUp";
import Todolist from "./Todolist";
import "./App.css";


const local_Api = [
  { id: 0, name: "Book flight", check: true },
  { id: 1, name: "Book hotel", check: true },
  { id: 2, name: "Book cab", check: false },
];
const App = () => {
  const [show, setshow] = useState(false);
  const setShowPop = () => {
    setshow(!show);
  };

  // add portion

  const [todos, settodos] = useState(local_Api);

  const AddInput = (inputData) => {
    settodos([...todos, { id: Math.random(), name: inputData, check: false }]);
    console.log("kokoko");
    console.log(todos);
  };

  // delete portion

  const removeTodo = (id) => {
    const newlist = todos.filter((todos) => todos.id !== id);
    settodos(newlist);
    console.log(id);
  };

  // edit pop up

  const [showEditPop, setshowEditPop] = useState(false);
  const setshowEdit = () => {
    setshowEditPop(!showEditPop);
  };

  // edit portion
  const [editItem, seteditItem] = useState(null);

  const editTodo = (task) => {
    

    seteditItem(task);
    // setInputData(task.name)
  };

  // EDIT INPUT DATA

  const EditInput = (editItem) => {
    // let update = todos.splice(todos.indexOf(editItem.id), 0, editItem);
    const index = todos.findIndex(Object=>{
      return Object.id=== editItem.id
    })
    console.log(index)
    console.log(editItem)


    todos[index] = editItem
    console.log(todos)
    settodos([ ...todos]);
  
  };
  


  
  const timeShow =()=>{

  }

  // cancle button 

  const cancleBtn =()=>{
    setshow(false);

  }


  return (
    <>
      <div className="parent_Div">
        <Header togglePopUp={setShowPop} />
        <Todolist
          todoData={todos}
          removeTodo={removeTodo}
          AddInput={AddInput}
          editTodo={editTodo}
          setshowEdit={setshowEdit}
          timeShow={timeShow}
        />
      </div>
      {show ? <PopUp AddInput={AddInput} cancleBtn={cancleBtn}/> : null}
      {showEditPop ? (
        <PopUp AddInput={AddInput} EditInput={EditInput} editItem={editItem} />
      ) : null}
      

      {/* <Time/> */}

      

      
    </>
  );
};

export default App;
